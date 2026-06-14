import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10 mt-24">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-2xs tracking-widest uppercase text-muted">
            {/* TODO: Update year or make dynamic */}
            © 2025 Jolie Goldstein
          </p>
          <p className="font-mono text-2xs tracking-widest uppercase text-muted">
            Designed & built in Next.js
          </p>
        </div>
      </Container>
    </footer>
  )
}
