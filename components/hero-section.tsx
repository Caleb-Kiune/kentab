"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  primaryButtonLink: string
  secondaryButtonLink: string
  badge?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  badge,
}: HeroSectionProps) {
  const backgroundImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
  ]

  return (
    <BackgroundSlideshow
      images={backgroundImages}
      interval={6000}
      overlayOpacity={0.65}
      className="py-20 md:py-28 lg:py-32"
    >
      <div className="relative z-10 container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeIn direction="left">
            <div className="space-y-4">
              {badge && (
                <div className="inline-block rounded-lg bg-accent-500 px-3 py-1 text-sm text-white">{badge}</div>
              )}
              <h2 className="text-xl font-medium text-white/90">{subtitle}</h2>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
                {title}
              </h1>
              <p className="text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{description}</p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white" asChild>
                  <a href={primaryButtonLink}>{primaryButtonText}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all"
                  asChild
                >
                  <a href={secondaryButtonLink}>{secondaryButtonText}</a>
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={200} className="hidden lg:block">
            <div className="mx-auto lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-primary-600 mb-4">Get a Quick Quote</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">Auto</Button>
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">Home</Button>
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">Health</Button>
                    <Button className="bg-primary-500 hover:bg-primary-600 text-white">Life</Button>
                  </div>
                  <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white">View All Products</Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </BackgroundSlideshow>
  )
}
