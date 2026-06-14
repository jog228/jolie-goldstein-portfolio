'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
}

const MotionDiv = motion.div

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </MotionDiv>
  )
}
