'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface GitHubEvent {
  id: string
  type: string
  repo: string
  repoFull: string
  createdAt: string
  detail: {
    commits?: number
    message?: string
    refType?: string
    ref?: string
    action?: string
    title?: string
  }
}

function eventLabel(event: GitHubEvent): string {
  switch (event.type) {
    case 'PushEvent':
      return event.detail.message
        ? `"${event.detail.message}"`
        : `${event.detail.commits ?? 1} commit${(event.detail.commits ?? 1) !== 1 ? 's' : ''}`
    case 'CreateEvent':
      return event.detail.refType === 'repository'
        ? 'New repo'
        : `New ${event.detail.refType}: ${event.detail.ref}`
    case 'PullRequestEvent':
      return `PR ${event.detail.action}: ${event.detail.title ?? ''}`
    case 'ReleaseEvent':
      return 'New release'
    default:
      return event.type.replace('Event', '')
  }
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor(diff / 3_600_000)
  if (days > 6) return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  if (days >= 1) return `${days}d ago`
  if (hours >= 1) return `${hours}h ago`
  return 'just now'
}

export function CurrentlyBuilding() {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [username, setUsername] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'ok'>('idle')

  useEffect(() => {
    setStatus('loading')
    fetch('/api/github')
      .then(r => r.json())
      .then(data => {
        if (data.error) { setStatus('error'); return }
        setEvents(data.events ?? [])
        setUsername(data.username ?? '')
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="py-24 border-t border-hairline" aria-labelledby="building-heading">
      <Container>
        <ScrollReveal>
          <div className="flex items-baseline justify-between mb-16">
            <h2
              id="building-heading"
              className="font-display font-bold text-ink tracking-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Currently building
            </h2>
            {username && status === 'ok' && (
              <a
                href={`https://github.com/${username}`}
                className="inline-flex items-center gap-1 font-mono text-2xs tracking-widest uppercase text-muted border-b border-hairline pb-px hover:text-ink hover:border-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
              >
                @{username}
                <ArrowUpRight size={10} aria-hidden />
              </a>
            )}
          </div>
        </ScrollReveal>

        {status === 'loading' && (
          <div className="flex gap-1.5 items-center py-6">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="inline-block h-1 w-1 rounded-full bg-muted animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        )}

        {status === 'error' && (
          <p className="font-mono text-2xs tracking-wide text-muted">
            {/* Silently omit in production if no GITHUB_USERNAME env var is set */}
            Could not load GitHub activity. Make sure{' '}
            <code className="text-accent">GITHUB_USERNAME</code> is set in{' '}
            <code className="text-accent">.env.local</code>.
          </p>
        )}

        {status === 'ok' && events.length === 0 && (
          <p className="font-mono text-2xs tracking-wide text-muted">No recent public activity.</p>
        )}

        {status === 'ok' && events.length > 0 && (
          <ul className="space-y-0 list-none" role="list">
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.04}>
                <li className="border-t border-hairline py-5 flex items-start gap-6">
                  <span className="font-mono text-2xs tracking-widest uppercase text-muted shrink-0 mt-0.5 w-16 text-right">
                    {timeAgo(event.createdAt)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <a
                      href={`https://github.com/${event.repoFull}`}
                      className="font-mono text-2xs tracking-widest uppercase text-ink hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      {event.repo}
                    </a>
                    <p className="font-mono text-2xs tracking-wide text-muted mt-1 truncate">
                      {eventLabel(event)}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
            <li className="border-t border-hairline" aria-hidden />
          </ul>
        )}
      </Container>
    </section>
  )
}
