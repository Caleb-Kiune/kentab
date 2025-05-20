"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from 'framer-motion'

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

export interface BackgroundSlideshowProps {
  images: string[]
  contents?: SlideContent[]
  duration?: number
  overlayOpacity?: number
  transitionDuration?: number
  className?: string
  children?: React.ReactNode
}

export function BackgroundSlideshow({
  images,
  contents,
  duration = 5000,
  overlayOpacity = 0.6,
  transitionDuration = 2000,
  className,
  children,
}: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, duration)

    return () => clearInterval(interval)
  }, [images.length, duration])

  // If contents are provided, we'll show dynamic content based on the current image
  // Otherwise, we'll just show the static children
  const showDynamicContent = Array.isArray(contents) && contents.length > 0

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-primary-800/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20">
        {showDynamicContent ? (
          <>
            {/* Current Content */}
            <div
              className={cn("transition-opacity ease-in-out", currentIndex === 0 ? "opacity-100" : "opacity-0")}
              style={{ transitionDuration: `${transitionDuration}ms` }}
            >
              {contents && contents[currentIndex] ? (
                <div className="container px-4 md:px-6 py-20 md:py-28 lg:py-32">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      {contents[currentIndex].badge && (
                        <div className="inline-block rounded-lg bg-accent-500 px-3 py-1 text-sm text-white">
                          {contents[currentIndex].badge}
                        </div>
                      )}
                      <h2 className="text-xl font-medium text-white/90">{contents[currentIndex].subtitle}</h2>
                      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
                        {contents[currentIndex].title}
                      </h1>
                      <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {contents[currentIndex].description}
                      </p>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <a
                          href={contents[currentIndex].primaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent-500 hover:bg-accent-600 text-white h-11 px-8 py-2"
                        >
                          {contents[currentIndex].primaryButtonText}
                        </a>
                        <a
                          href={contents[currentIndex].secondaryButtonLink}
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all h-11 px-8 py-2"
                        >
                          {contents[currentIndex].secondaryButtonText}
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
