"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimalPlaces?: number
}

export function CounterAnimation({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className,
  decimalPlaces = 0,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = progress * end

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className={cn("font-bold", className)}>
      {prefix}
      {count.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </div>
  )
}
