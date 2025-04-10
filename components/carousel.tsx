"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode[]
  autoScroll?: boolean
  autoScrollInterval?: number
  showControls?: boolean
  className?: string
  itemClassName?: string
  visibleItems?: number
}

export function Carousel({
  children,
  autoScroll = true,
  autoScrollInterval = 5000,
  showControls = true,
  className,
  itemClassName,
  visibleItems = 1,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const totalItems = children.length
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate how many items to show based on screen size and visibleItems prop
  const itemsToShow = visibleItems

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (autoScroll && !isHovering) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, autoScrollInterval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoScroll, autoScrollInterval, isHovering, totalItems])

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          width: `${(totalItems / itemsToShow) * 100}%`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0",
              itemClassName,
              { "w-full": itemsToShow === 1 },
              { [`w-1/${itemsToShow}`]: itemsToShow > 1 },
            )}
            style={{ width: `${(100 / totalItems) * itemsToShow}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-kentab-blue" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-kentab-blue" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: totalItems - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-kentab-blue" : "bg-gray-300",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
