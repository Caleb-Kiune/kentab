"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineSliderProps {
  children: React.ReactNode
  className?: string
}

export function TimelineSlider({ children, className }: TimelineSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const x = useMotionValue(0)
  const controls = useAnimation()

  const dragConstraints = {
    left: -(contentWidth - containerWidth),
    right: 0,
  }

  const opacity = useTransform(
    x,
    [0, -contentWidth + containerWidth],
    [0.5, 0.5]
  )

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width)
          const content = entry.target.firstElementChild as HTMLElement
          if (content) {
            setContentWidth(content.scrollWidth)
          }
        }
      })

      resizeObserver.observe(containerRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        style={{ x, opacity }}
        className="flex gap-8 cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
    </div>
  )
} 