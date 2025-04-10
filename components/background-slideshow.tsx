"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SlideContent {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  primaryButtonLink: string
  secondaryButtonLink: string
  badge?: string
}

interface BackgroundSlideshowProps {
  images: string[]
  contents?: SlideContent[]
  interval?: number
  overlayOpacity?: number
  transitionDuration?: number
  className?: string
  children?: React.ReactNode
}

export function BackgroundSlideshow({
  images,
  contents,
  interval = 8000,
  overlayOpacity = 0.6,
  transitionDuration = 2000,
  className,
  children,
}: BackgroundSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex)
        setNextImageIndex((nextImageIndex + 1) % images.length)
        setIsTransitioning(false)
      }, transitionDuration) // Transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, nextImageIndex, transitionDuration])

  // If contents are provided, we'll show dynamic content based on the current image
  // Otherwise, we'll just show the static children
  const showDynamicContent = Array.isArray(contents) && contents.length > 0

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Current Image */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity ease-in-out z-10",
          isTransitioning ? "opacity-0" : "opacity-100",
        )}
        style={{ transitionDuration: `${transitionDuration}ms` }}
      >
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Next Image (preloaded) */}
      <div
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity ease-in-out z-0",
          isTransitioning ? "opacity-100" : "opacity-0",
        )}
        style={{ transitionDuration: `${transitionDuration}ms` }}
      >
        <Image
          src={images[nextImageIndex] || "/placeholder.svg"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {showDynamicContent ? (
          <>
            {/* Current Content */}
            <div
              className={cn("transition-opacity ease-in-out", isTransitioning ? "opacity-0" : "opacity-100")}
              style={{ transitionDuration: `${transitionDuration}ms` }}
            >
              {contents && contents[currentImageIndex] ? (
                <div className="container px-4 md:px-6 py-20 md:py-28 lg:py-32">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      {contents[currentImageIndex].badge && (
                        <div className="inline-block rounded-lg bg-accent-500 px-3 py-1 text-sm text-white">
                          {contents[currentImageIndex].badge}
                        </div>
                      )}
                      <h2 className="text-xl font-medium text-white/90">{contents[currentImageIndex].subtitle}</h2>
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
                        {contents[currentImageIndex].title}
                      </h1>
                      <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {contents[currentImageIndex].description}
                      </p>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                          href={contents[currentImageIndex].primaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 hover:bg-accent-600 text-white h-11 px-8 py-2"
                        >
                          {contents[currentImageIndex].primaryButtonText}
                        </a>
                        <a
                          href={contents[currentImageIndex].secondaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all h-11 px-8 py-2"
                        >
                          {contents[currentImageIndex].secondaryButtonText}
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block mx-auto lg:ml-auto">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                          <h3 className="text-xl font-bold text-primary-600 mb-4">Get a Quick Quote</h3>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Auto
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Home
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Health
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Life
                            </button>
                          </div>
                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 hover:bg-accent-600 text-white h-10 px-4 py-2 w-full">
                            View All Products
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Next Content (for smooth transition) */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity ease-in-out",
                isTransitioning ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDuration: `${transitionDuration}ms` }}
            >
              {contents && contents[nextImageIndex] ? (
                <div className="container px-4 md:px-6 py-20 md:py-28 lg:py-32">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      {contents[nextImageIndex].badge && (
                        <div className="inline-block rounded-lg bg-accent-500 px-3 py-1 text-sm text-white">
                          {contents[nextImageIndex].badge}
                        </div>
                      )}
                      <h2 className="text-xl font-medium text-white/90">{contents[nextImageIndex].subtitle}</h2>
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
                        {contents[nextImageIndex].title}
                      </h1>
                      <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {contents[nextImageIndex].description}
                      </p>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                          href={contents[nextImageIndex].primaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 hover:bg-accent-600 text-white h-11 px-8 py-2"
                        >
                          {contents[nextImageIndex].primaryButtonText}
                        </a>
                        <a
                          href={contents[nextImageIndex].secondaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all h-11 px-8 py-2"
                        >
                          {contents[nextImageIndex].secondaryButtonText}
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block mx-auto lg:ml-auto">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                          <h3 className="text-xl font-bold text-primary-600 mb-4">Get a Quick Quote</h3>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Auto
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Home
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Health
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-primary-600 text-white h-10 px-4 py-2">
                              Life
                            </button>
                          </div>
                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 hover:bg-accent-600 text-white h-10 px-4 py-2 w-full">
                            View All Products
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
