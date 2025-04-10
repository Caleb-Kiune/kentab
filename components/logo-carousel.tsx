"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoCarouselProps {
  logos: Array<{
    name: string
    src: string
  }>
  className?: string
}

export function LogoCarousel({ logos, className }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const visibleLogos = 5 // Number of logos visible at once
  const scrollSpeed = 0.5 // Pixels per frame

  // Create a duplicate set of logos for seamless looping
  const duplicatedLogos = [...logos, ...logos]

  // Function to handle manual scrolling
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const scrollAmount = direction === "left" ? -300 : 300
    containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  // Animation function for continuous scrolling
  const animate = () => {
    if (!containerRef.current || !scrollRef.current) return

    // Get the current scroll position
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

    // If we've scrolled to the halfway point (original set of logos),
    // reset to the beginning without animation to create seamless loop
    if (scrollLeft >= scrollWidth / 2) {
      containerRef.current.scrollLeft = 0
    }

    // Otherwise, continue scrolling
    containerRef.current.scrollLeft += scrollSpeed

    // Continue the animation
    animationRef.current = requestAnimationFrame(animate)
  }

  // Start/stop the animation based on isPaused state
  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    } else {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="overflow-hidden px-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          ref={scrollRef}
          className="flex"
          style={{
            width: `${(duplicatedLogos.length / visibleLogos) * 100}%`,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 flex items-center justify-center"
              style={{ width: `${100 / duplicatedLogos.length}%` }}
            >
              <div className="bg-white rounded-lg shadow-sm p-6 h-24 w-full flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg?height=80&width=160"}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="max-h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-kentab-blue" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-kentab-blue" />
      </button>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
