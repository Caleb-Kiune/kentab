"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export function HeroSection() {
  const backgroundImages = [
    "/images/gaurav-kumar-briYAkuuT-E-unsplash.webp",
    "/images/kristine-wook-E1_RW3HIbUw-unsplash.webp",
    "/images/ta-focando-LOuffSFpWQI-unsplash.webp",
    "/images/benjamin-child-GWe0dlVD9e0-unsplash (1).jpg",
  ]

  return (
    <section className="relative w-full h-[calc(100vh-80px)] bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
      <BackgroundSlideshow
        images={backgroundImages}
        duration={5000}
        className="absolute inset-0 opacity-20"
      />
      <div className="container relative px-4 md:px-6 h-full flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col items-center justify-center space-y-8 text-center w-full max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Your Trusted Partner in{" "}
            <span className="text-accent-400">Insurance Solutions</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            Comprehensive insurance coverage tailored to your needs. Protect what matters most with Kentab Insurance.
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
            }}
          >
            <Link
              href="/quote"
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
          </motion.div>
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
