"use client"

import { motion } from "framer-motion"
import { Shield, Heart, Users, Star } from "lucide-react"

const values = [
  {
    title: "Trust & Reliability",
    description: "We've been serving our community for over 20 years, building trust through consistent, reliable service.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Customer First",
    description: "Your needs are our priority. We're committed to providing personalized solutions and exceptional service.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Expert Team",
    description: "Our experienced professionals are dedicated to helping you find the perfect insurance coverage.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Quality Service",
    description: "We maintain the highest standards of service quality, ensuring your complete satisfaction.",
    icon: <Star className="h-6 w-6" />,
  },
]

export function ValuesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-[var(--color-secondary)] dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            These principles guide everything we do at Kentab Insurance.
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-gradient-to-br from-white to-[var(--color-secondary)] border border-gray-100 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 h-full flex flex-col hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-[var(--color-secondary)] text-primary-500 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-cta-hover)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 