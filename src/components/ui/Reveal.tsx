'use client'

import { useEffect, useRef, useState } from 'react'

type Variant = 'up' | 'down' | 'left' | 'right' | 'fade'

interface RevealProps {
  children: React.ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

const hiddenTransform: Record<Variant, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: '-translate-x-8',
  right: 'translate-x-8',
  fade: '',
}

export default function Reveal({ children, variant = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTransform[variant]}`
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
