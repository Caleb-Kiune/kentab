"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export function HeroSection() {
  const backgroundImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in{" "}
              <span className="text-accent-400">Insurance Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Comprehensive insurance coverage tailored to your needs. Protect what matters most with Kentab Insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors duration-200"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/20 hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-accent-500/20 rounded-full blur-3xl" />
            <BackgroundSlideshow
              images={backgroundImages}
              duration={5000}
              className="relative rounded-2xl shadow-2xl overflow-hidden aspect-square"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
