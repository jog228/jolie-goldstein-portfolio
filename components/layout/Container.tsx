import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-5xl px-6 md:px-10', className)}>
      {children}
    </Tag>
  )
}
