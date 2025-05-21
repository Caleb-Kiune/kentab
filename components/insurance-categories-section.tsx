"use client"

import { motion } from "framer-motion"
import { Shield, HeartPulse, Users, Briefcase, ArrowRight, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "Motor Insurance",
    description: "Protect your vehicle with our comprehensive motor insurance solutions",
    icon: Users,
    link: "/services/motor",
    features: ["Comprehensive coverage", "Third-party liability", "Personal accident", "Roadside assistance"],
    detailedDescription: `Our motor insurance solutions provide comprehensive protection for your vehicle. Coverage includes:

• Comprehensive Coverage: Protection for your vehicle against damage, theft, and natural disasters
• Third-Party Liability: Coverage for damages caused to others' property or injuries
• Personal Accident: Coverage for accidental injuries while driving
• Roadside Assistance: 24/7 support for breakdowns and emergencies

We offer customizable plans to fit your specific needs and budget, ensuring you get the right coverage for your vehicle.`,
  },
  {
    title: "Business Insurance",
    description: "Comprehensive coverage options for your business needs",
    icon: Briefcase,
    link: "/services/business",
    features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
    detailedDescription: `Our business insurance solutions protect your company from various risks. Coverage includes:

• Property Insurance: Protection for buildings, equipment, and inventory
• Liability Coverage: Protection against third-party claims and lawsuits
• Workers' Compensation: Coverage for employee injuries and illnesses
• Business Interruption: Protection against income loss due to covered events

We provide tailored solutions for businesses of all sizes, from startups to large corporations.`,
  },
  {
    title: "Health Insurance",
    description: "Quality healthcare coverage for you and your family",
    icon: HeartPulse,
    link: "/services/health",
    features: ["Medical coverage", "Prescription benefits", "Preventive care", "Specialist visits"],
    detailedDescription: `Our health insurance plans provide comprehensive coverage for you and your family. Benefits include:

• Medical Coverage: Hospital stays, surgeries, and treatments
• Prescription Benefits: Coverage for essential medications
• Preventive Care: Regular check-ups and screenings
• Specialist Visits: Access to specialized medical care

We offer various plan options to suit different needs and budgets, with access to a wide network of healthcare providers.`,
  },
  {
    title: "Life Insurance",
    description: "Financial protection for your loved ones",
    icon: Shield,
    link: "/services/life",
    features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
    detailedDescription: `Our life insurance solutions provide financial security for your loved ones. Options include:

• Term Life Insurance: Affordable coverage for a specific period
• Whole Life Insurance: Permanent coverage with cash value accumulation
• Universal Life Insurance: Flexible premiums and death benefits
• Final Expense Coverage: Assistance with funeral and burial costs

We help you choose the right coverage amount and policy type based on your family's needs and financial goals.`,
  },
]

export function InsuranceCategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-lg bg-accent-100 px-3 py-1 text-sm text-accent-600 mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-lg text-primary-600">
            Choose from our range of insurance products designed to protect what matters most to you.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-gradient-to-br from-white to-[var(--color-secondary)] border border-gray-100 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 h-full flex flex-col hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-[var(--color-secondary)] text-primary-500 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-cta-hover)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {category.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 group/item"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-500 group-hover/item:after:w-full after:transition-all after:duration-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => setSelectedCategory(category)}
                  className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Details Modal */}
        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
            {selectedCategory && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <DialogHeader className="border-b pb-4">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-3 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-cta-hover)]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <selectedCategory.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <DialogTitle className="text-2xl font-bold text-primary-700">
                        {selectedCategory.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 mt-1">
                        {selectedCategory.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="mt-6 space-y-8">
                  {/* Key Features Section */}
                  <motion.div 
                    className="bg-gradient-to-br from-white to-[var(--color-secondary)] dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-primary-700 mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCategory.features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="mt-1">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)]"></div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Detailed Coverage Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold text-primary-700 mb-4">Coverage Details</h3>
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      {selectedCategory.detailedDescription.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('•')) {
                          const points = paragraph.split('\n').filter(p => p.trim().startsWith('•'));
                          return (
                            <motion.div 
                              key={index} 
                              className="space-y-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {points.map((point, i) => (
                                <motion.div 
                                  key={i} 
                                  className="flex items-start gap-3"
                                  whileHover={{ x: 4 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  <div className="mt-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)]"></div>
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300">{point.replace('•', '').trim()}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          );
                        }
                        return (
                          <motion.p 
                            key={index} 
                            className="text-gray-600 dark:text-gray-400 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {paragraph}
                          </motion.p>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div 
                    className="border-t pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Ready to get started? Contact us for a personalized quote.
                      </p>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedCategory(null)}
                          className="border-gray-300 dark:border-gray-700"
                        >
                          Close
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 dark:border-gray-700"
                          asChild
                        >
                          <Link href={selectedCategory.link}>
                            Learn More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
} 