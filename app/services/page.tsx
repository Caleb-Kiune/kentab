"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Car, HeartPulse, Users, Briefcase, Umbrella, ArrowRight, X, ArrowUp } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ServiceCard } from '@/components/service-card'
import { useTheme } from 'next-themes'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

// Global styles
const globalStyles = {
  '--color-primary': '#002E4D',
  '--color-accent': '#FFB700',
  '--color-secondary': '#F5F5F5',
  '--color-cta-hover': '#FF9E00',
} as const

// Animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
}

const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServicesPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const backgroundImages = [
    "/images/gaurav-kumar-briYAkuuT-E-unsplash.webp",
    "/images/kristine-wook-E1_RW3HIbUw-unsplash.webp",
    "/images/ta-focando-LOuffSFpWQI-unsplash.webp",
    "/images/benjamin-child-GWe0dlVD9e0-unsplash (1).jpg",
  ]

  const services = [
    {
      title: "Home Insurance",
      description: "Protect your home and belongings against damage, theft, and liability.",
      icon: <Home className="h-6 w-6 text-primary-500" />,
      link: "/services/home",
      features: [
        "Property coverage",
        "Personal belongings protection",
        "Liability coverage",
        "Additional living expenses",
      ],
      detailedDescription: `Our comprehensive home insurance provides complete protection for your most valuable asset. Coverage includes:

• Building Coverage: Protects the physical structure of your home against damage from fire, storms, and other perils
• Contents Coverage: Safeguards your personal belongings against theft, damage, or loss
• Liability Protection: Covers legal expenses if someone is injured on your property
• Additional Living Expenses: Provides temporary housing if your home becomes uninhabitable
• Natural Disaster Coverage: Protection against earthquakes, floods, and other natural disasters
• Personal Property: Coverage for items both inside and outside your home
• Loss of Use: Reimbursement for additional living expenses if you need to temporarily relocate

Our home insurance policies are customizable to fit your specific needs and budget. We work with multiple insurance providers to ensure you get the best coverage at competitive rates.`,
    },
    {
      title: "Motor Insurance",
      description: "Coverage for your vehicles with options for liability, collision, and comprehensive.",
      icon: <Car className="h-6 w-6 text-primary-500" />,
      link: "/services/motor",
      features: [
        "Liability protection",
        "Collision coverage",
        "Comprehensive coverage",
        "Uninsured motorist protection",
      ],
      detailedDescription: `Our motor insurance solutions provide comprehensive protection for your vehicles. Coverage includes:

• Third-Party Liability: Covers damages to other people's property or injuries
• Comprehensive Coverage: Protection against theft, vandalism, and natural disasters
• Collision Coverage: Repairs or replacement of your vehicle after an accident
• Personal Injury Protection: Medical expenses for you and your passengers
• Uninsured/Underinsured Motorist: Protection against drivers without adequate insurance
• Roadside Assistance: 24/7 emergency services and towing
• Rental Car Coverage: Temporary vehicle replacement while yours is being repaired

We offer flexible payment options and discounts for safe drivers, multiple vehicles, and security features.`,
    },
    {
      title: "Health Insurance",
      description: "Health plans that provide coverage for medical expenses, prescriptions, and preventive care.",
      icon: <HeartPulse className="h-6 w-6 text-primary-500" />,
      link: "/services/health",
      features: ["Medical coverage", "Prescription drug benefits", "Preventive care", "Specialist visits"],
      detailedDescription: `Our health insurance plans provide comprehensive coverage for you and your family. Benefits include:

• Inpatient Care: Hospital stays, surgeries, and treatments
• Outpatient Services: Doctor visits, diagnostic tests, and procedures
• Prescription Drugs: Coverage for essential medications
• Preventive Care: Regular check-ups, vaccinations, and screenings
• Specialist Consultations: Access to specialized medical care
• Dental Coverage: Basic and major dental procedures
• Vision Care: Eye exams and corrective lenses
• Maternity Care: Prenatal, delivery, and postnatal care

We offer various plan options to suit different needs and budgets, with access to a wide network of healthcare providers.`,
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your loved ones in the event of your passing.",
      icon: <Users className="h-6 w-6 text-primary-500" />,
      link: "/services/life",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
      detailedDescription: `Our life insurance solutions provide financial security for your loved ones. Options include:

• Term Life Insurance: Affordable coverage for a specific period
• Whole Life Insurance: Permanent coverage with cash value accumulation
• Universal Life Insurance: Flexible premiums and death benefits
• Critical Illness Coverage: Financial protection against serious illnesses
• Disability Insurance: Income replacement if you're unable to work
• Funeral Expense Coverage: Assistance with final expenses
• Family Income Benefit: Regular payments to your beneficiaries

We help you choose the right coverage amount and policy type based on your family's needs and financial goals.`,
    },
    {
      title: "Business Insurance",
      description: "Comprehensive coverage options to protect your business assets, employees, and operations.",
      icon: <Briefcase className="h-6 w-6 text-primary-500" />,
      link: "/services/business",
      features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
      detailedDescription: `Our business insurance solutions protect your company from various risks. Coverage includes:

• Property Insurance: Protection for buildings, equipment, and inventory
• General Liability: Coverage for third-party injuries and property damage
• Professional Liability: Protection against professional errors and omissions
• Workers' Compensation: Coverage for employee injuries and illnesses
• Business Interruption: Income protection during forced closures
• Cyber Liability: Protection against data breaches and cyber attacks
• Commercial Auto: Coverage for business vehicles
• Employee Benefits: Health, life, and disability coverage for employees

We offer customizable packages for businesses of all sizes, from startups to large corporations.`,
    },
    {
      title: "Umbrella Insurance",
      description: "Additional liability coverage that goes beyond the limits of your existing policies.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/umbrella",
      features: ["Extended liability protection", "Legal defense coverage", "Worldwide coverage", "Asset protection"],
      detailedDescription: `Our umbrella insurance provides extra liability protection beyond your existing policies. Benefits include:

• Additional Liability Coverage: Extra protection above your primary policies
• Legal Defense Costs: Coverage for attorney fees and court costs
• Worldwide Coverage: Protection anywhere in the world
• Personal Injury Protection: Coverage for libel, slander, and defamation
• Property Damage: Additional coverage for damage to others' property
• Bodily Injury: Extra protection for injuries to others
• Asset Protection: Safeguards your personal and business assets

Umbrella insurance is an affordable way to significantly increase your liability protection.`,
    },
    {
      title: "Travel Insurance",
      description: "Protection for unexpected events during your travels, both domestic and international.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/travel",
      features: ["Trip cancellation", "Medical emergencies", "Lost luggage", "Travel assistance"],
      detailedDescription: `Our travel insurance provides comprehensive protection for your journeys. Coverage includes:

• Trip Cancellation: Reimbursement for non-refundable expenses
• Medical Emergencies: Coverage for illness and injuries abroad
• Emergency Evacuation: Transportation to appropriate medical facilities
• Lost/Delayed Baggage: Protection for lost or delayed luggage
• Travel Delay: Compensation for unexpected delays
• 24/7 Assistance: Global support services
• Rental Car Coverage: Protection for rental vehicle damage
• Adventure Sports: Coverage for various activities

We offer both single-trip and annual travel insurance policies to suit your travel needs.`,
    },
    {
      title: "Pet Insurance",
      description: "Coverage for veterinary expenses to keep your furry family members healthy.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/pet",
      features: ["Accident coverage", "Illness coverage", "Wellness plans", "Prescription medications"],
      detailedDescription: `Our pet insurance helps you provide the best care for your furry family members. Coverage includes:

• Accident Coverage: Treatment for injuries and emergencies
• Illness Coverage: Protection against diseases and conditions
• Wellness Care: Routine check-ups and preventive care
• Prescription Medications: Coverage for necessary medications
• Surgery Coverage: Protection for surgical procedures
• Alternative Therapies: Coverage for holistic treatments
• Dental Care: Basic and major dental procedures
• Hereditary Conditions: Coverage for breed-specific conditions

We offer flexible plans for dogs and cats, with options to add coverage for other pets.`,
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Choose Your Coverage',
      description: 'Select the insurance products that best fit your needs and budget.',
    },
    {
      number: '02',
      title: 'Get a Quote',
      description: 'Receive a personalized quote based on your specific requirements.',
    },
    {
      number: '03',
      title: 'Start Protection',
      description: 'Complete the process and begin enjoying comprehensive coverage.',
    },
  ]

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <BackgroundSlideshow
          images={backgroundImages}
          duration={5000}
          className="absolute inset-0 opacity-20"
        />
        <div className="container relative px-4 md:px-6 h-full flex items-center justify-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerAnimation}
            className="flex flex-col items-center justify-center space-y-8 text-center w-full max-w-5xl mx-auto"
          >
            <div className="space-y-6 w-full">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair"
                variants={containerAnimation}
              >
                {Array.from("Comprehensive Insurance Solutions").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Protect what matters most with our range of insurance products designed for your peace of mind.
              </motion.p>
              <motion.div 
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className={cn(
                    "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)] text-white",
                    "hover:opacity-90 transition-all duration-300"
                  )}
                  asChild
                >
                  <Link href="/quote">
                    <span className="relative z-10">Get a Free Quote</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className={cn(
                    "bg-white text-primary-700",
                    "hover:bg-gray-100",
                    "transition-all duration-300"
                  )}
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 w-full"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 20]),
          }}
        >
          <svg
            className="w-full h-16 text-white"
            viewBox="0 0 1440 100"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
              className="transition-all duration-300"
            />
          </svg>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Insurance Products
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose from our comprehensive range of insurance products designed to protect what matters most to you.
            </motion.p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-[var(--color-secondary)] border border-gray-100 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 h-full flex flex-col hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)]">
                  <div className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-[var(--color-secondary)] text-primary-500 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-cta-hover)] transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6 text-left">
                      {service.features.map((feature, i) => (
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
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
          {selectedService && (
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
                    {selectedService.icon}
                  </motion.div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-primary-700">
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-1">
                      {selectedService.description}
                    </DialogDescription>
                  </div>
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </motion.button>
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
                    {selectedService.features.map((feature, index) => (
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
                    {selectedService.detailedDescription.split('\n\n').map((paragraph, index) => {
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
                        onClick={() => setSelectedService(null)}
                        className="border-gray-300 dark:border-gray-700"
                      >
                        Close
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700"
                        asChild
                      >
                        <Link href={selectedService.link}>
                          Learn More
                        </Link>
                      </Button>
                      <Button
                        className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)] text-white hover:opacity-90 transition-opacity"
                        asChild
                      >
                        <Link href="/quote">
                          Get a Quote
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

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-[var(--color-secondary)] dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-700 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Getting started with Kentab Insurance is simple and straightforward.
            </motion.p>
          </div>
          <div className="relative">
            {/* SVG Path */}
            <svg
              className="absolute left-1/2 top-0 -translate-x-1/2 h-full hidden md:block"
              width="2"
              height="100%"
              viewBox="0 0 2 100%"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M1 0 L1 100"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent)" />
                  <stop offset="100%" stopColor="var(--color-cta-hover)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Process Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-cta-hover)] flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white font-semibold">{step.number}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Get Protected?
              </motion.h2>
              <motion.p 
                className="text-primary-700 md:text-xl/relaxed font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Contact us today for a free consultation and quote. Our team is ready to help you find the perfect
                coverage for your needs.
              </motion.p>
              <motion.div 
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className={cn(
                    "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)] text-white",
                    "hover:opacity-90 transition-all duration-300"
                  )}
                  asChild
                >
                  <Link href="/quote">
                    <span className="relative z-10">Get a Free Quote</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className={cn(
                    "bg-white text-primary-700",
                    "hover:bg-gray-100",
                    "transition-all duration-300"
                  )}
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)] text-white shadow-lg hover:shadow-xl transition-shadow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
          scale: scrollYProgress.get() > 0.1 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </div>
  )
}
