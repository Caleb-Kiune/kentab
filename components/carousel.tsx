"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Children, isValidElement } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: ReactNode | ReactNode[]
  className?: string
  itemClassName?: string
  visibleItems?: number
}

export function Carousel({
  children,
  className,
  itemClassName,
  visibleItems = 1,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentVisible, setCurrentVisible] = useState(visibleItems)
  const [itemWidth, setItemWidth] = useState(100 / visibleItems)
  const [activeIndex, setActiveIndex] = useState(visibleItems) // Start after clones

  const rawChildren = Children.toArray(children).filter(isValidElement)
  const cloneCount = currentVisible

  const clonedStart = rawChildren.slice(-cloneCount)
  const clonedEnd = rawChildren.slice(0, cloneCount)
  const allItems = [...clonedStart, ...rawChildren, ...clonedEnd]
  const totalItems = rawChildren.length

  const scrollToIndex = (index: number, smooth = true) => {
    if (!containerRef.current) return
    const scrollAmount = containerRef.current.offsetWidth * (index / currentVisible)
    containerRef.current.scrollTo({
      left: scrollAmount,
      behavior: smooth ? "smooth" : "auto",
    })
    setActiveIndex(index)
  }

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setCurrentVisible(3)
        setItemWidth(100 / 3)
      } else if (width >= 640) {
        setCurrentVisible(2)
        setItemWidth(100 / 2)
      } else {
        setCurrentVisible(1)
        setItemWidth(100)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Jump to real slides after mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToIndex(cloneCount, false)
    }, 10)
    return () => clearTimeout(timeout)
  }, [cloneCount, currentVisible])

  // Scroll event to reset when looping
  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, offsetWidth } = containerRef.current
    const index = Math.round(scrollLeft / (offsetWidth / currentVisible))

    // Update current index
    setActiveIndex(index)

    // Loop back logic
    if (index < cloneCount) {
      // Too far left — jump to end
      scrollToIndex(totalItems + cloneCount - 1, false)
    } else if (index >= totalItems + cloneCount) {
      // Too far right — jump to start
      scrollToIndex(cloneCount, false)
    }
  }

  // Buttons
  const scrollLeft = () => {
    const newIndex = activeIndex - 1
    scrollToIndex(newIndex)
  }

  const scrollRight = () => {
    const newIndex = activeIndex + 1
    scrollToIndex(newIndex)
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1"
      >
        {allItems.map((child, index) => (
          <div
            key={index}
            className={cn("snap-start shrink-0", itemClassName)}
            style={{ width: `${itemWidth}%` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  )
}
