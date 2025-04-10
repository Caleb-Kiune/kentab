"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  direction = "up",
  duration = 800,
  delay = 0,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && (!once || !hasAnimated.current)) {
          setIsVisible(true)
          hasAnimated.current = true
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    const { current } = domRef
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold, once])

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "translate-y-[-10px]"
      case "left":
        return "translate-x-10"
      case "right":
        return "translate-x-[-10px]"
      default:
        return ""
    }
  }

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all opacity-0",
        {
          "opacity-100": isVisible,
          [getDirectionStyles()]: !isVisible && direction !== "none",
        },
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
