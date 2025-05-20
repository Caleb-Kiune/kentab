"use client"

import { motion } from "framer-motion"
import { Users, Shield, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Clients",
    description: "Trusted by thousands of satisfied customers",
  },
  {
    icon: Shield,
    value: "25+",
    label: "Years Experience",
    description: "Decades of insurance expertise",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    description: "Always here when you need us",
  },
  {
    icon: Star,
    value: "98%",
    label: "Satisfaction",
    description: "Client satisfaction rate",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-primary-200">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 