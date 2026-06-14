'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={mounted && theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group flex h-8 w-8 items-center justify-center rounded-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
    >
      {/* Render Moon as placeholder until mounted to avoid flash */}
      {mounted && theme === 'dark' ? (
        <Sun size={15} strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon size={15} strokeWidth={1.5} aria-hidden />
      )}
    </button>
  )
}
