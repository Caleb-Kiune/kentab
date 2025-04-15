tsx
"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode[]
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
  const totalItems = children.length
  const itemsToShow = Math.min(visibleItems, totalItems);
  return (
    <div
      className={cn("w-full", className)}
    >
      <div
        className={`grid gap-4 ${itemsToShow === 3 ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {children.slice(0, itemsToShow).map((child, index) => (
          <div
            key={index}
            className={cn(
              itemClassName,
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}