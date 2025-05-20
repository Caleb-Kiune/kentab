"use client"

import { motion } from "framer-motion"
import { PartnersMarquee } from "@/components/partners-marquee"

const partners = [
  { name: "Britam Insurance", logo: "/logos/britam-new.png" },
  { name: "Jubilee Insurance", logo: "/logos/jubilee-new.png" },
  { name: "CIC Insurance", logo: "/logos/cic-group.webp" },
  { name: "APA Insurance", logo: "/logos/apa-new.png" },
  { name: "Sanlam Insurance", logo: "/logos/sanlam.png" },
  { name: "ICEA Lion", logo: "/logos/icea-new.png" },
  { name: "AAR Insurance", logo: "/logos/aar-new.png" },
  { name: "Heritage Insurance", logo: "/logos/heritage-new.png" },
  { name: "Kenyan Alliance", logo: "/logos/kenyan-alliance.png" },
  { name: "Madison Insurance", logo: "/logos/madison-group.png" },
  { name: "Pioneer Insurance", logo: "/logos/pioneer.png" },
  { name: "Geminia Insurance", logo: "/logos/geminia.png" }
]

export function PartnersSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-[var(--color-secondary)] dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We work with leading insurance providers to bring you the best coverage options.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <PartnersMarquee partners={partners} />
        </motion.div>
      </div>
    </section>
  )
} 