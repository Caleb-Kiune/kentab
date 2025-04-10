import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxRating?: number
  className?: string
}

export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  return (
    <div className={cn("flex", className)}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "text-accent-500 fill-accent-500"
              : i < Math.ceil(rating) && rating % 1 !== 0
                ? "text-accent-500 fill-accent-500 opacity-50"
                : "text-gray-300",
          )}
        />
      ))}
    </div>
  )
}
