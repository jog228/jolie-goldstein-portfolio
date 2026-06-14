import { NextResponse } from 'next/server'

export const revalidate = 300

interface GitHubEvent {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload: {
    commits?: Array<{ message: string }>
    ref_type?: string
    ref?: string
    action?: string
    pull_request?: { title: string }
  }
}

function summarizeEvent(event: GitHubEvent) {
  switch (event.type) {
    case 'PushEvent':
      return {
        commits: event.payload.commits?.length ?? 0,
        message: event.payload.commits?.[0]?.message?.split('\n')[0] ?? '',
      }
    case 'CreateEvent':
      return { refType: event.payload.ref_type, ref: event.payload.ref }
    case 'PullRequestEvent':
      return { action: event.payload.action, title: event.payload.pull_request?.title }
    default:
      return {}
  }
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME
  if (!username) {
    return NextResponse.json(
      { error: 'GITHUB_USERNAME env var is not set' },
      { status: 500 }
    )
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/events/public?per_page=30`,
    { headers, next: { revalidate: 300 } }
  )

  if (!res.ok) {
    const rateLimitRemaining = res.headers.get('x-ratelimit-remaining')
    return NextResponse.json(
      {
        error: 'GitHub API error',
        status: res.status,
        rateLimitRemaining,
      },
      { status: res.status }
    )
  }

  const raw: GitHubEvent[] = await res.json()

  const RELEVANT = new Set([
    'PushEvent',
    'CreateEvent',
    'PullRequestEvent',
    'ReleaseEvent',
  ])

  const events = raw
    .filter(e => RELEVANT.has(e.type))
    .slice(0, 8)
    .map(e => ({
      id: e.id,
      type: e.type,
      repo: e.repo.name.replace(`${username}/`, ''),
      repoFull: e.repo.name,
      createdAt: e.created_at,
      detail: summarizeEvent(e),
    }))

  return NextResponse.json({ username, events })
}
