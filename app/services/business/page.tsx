"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Shield, Building2, Clock, DollarSign, Phone, FileCheck, ArrowUp, Search, Users, PiggyBank, Scale, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

// Global theme variables
const themeVars = {
  '--color-primary': '#002E4D',
  '--color-accent': '#FFB700',
  '--color-bg-card': '#F9FAFB',
} as const

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Testimonials data
const testimonials = [
  {
    text: "Comprehensive coverage that protects our business assets.",
    author: "Sarah L.",
    rating: 5,
  },
  {
    text: "Excellent support during our claim process.",
    author: "Michael R.",
    rating: 5,
  },
  {
    text: "Tailored solutions for our specific business needs.",
    author: "David K.",
    rating: 5,
  },
]

// Benefits data with categories
const benefits = [
  {
    title: "Property Protection",
    description: "Comprehensive coverage for your business premises, equipment, and inventory.",
    icon: <Building2 className="h-6 w-6" />,
    category: "coverage",
  },
  {
    title: "Liability Coverage",
    description: "Protection against third-party claims for injury, property damage, or negligence.",
    icon: <Shield className="h-6 w-6" />,
    category: "coverage",
  },
  {
    title: "Business Interruption",
    description: "Coverage for lost income and expenses during forced business closure.",
    icon: <Clock className="h-6 w-6" />,
    category: "protection",
  },
  {
    title: "Employee Benefits",
    description: "Comprehensive health and welfare benefits for your employees.",
    icon: <Users className="h-6 w-6" />,
    category: "benefits",
  },
  {
    title: "Risk Management",
    description: "Expert guidance on identifying and mitigating business risks.",
    icon: <Scale className="h-6 w-6" />,
    category: "service",
  },
  {
    title: "Global Coverage",
    description: "International protection for businesses operating across borders.",
    icon: <Gift className="h-6 w-6" />,
    category: "coverage",
  },
]

// Coverage data
const coverage = [
  {
    title: "What's Covered",
    items: [
      "Property damage protection",
      "Liability coverage",
      "Business interruption",
      "Equipment breakdown",
      "Cyber liability",
      "Employee dishonesty",
      "Commercial auto coverage",
      "Professional liability",
    ],
  },
  {
    title: "Additional Benefits",
    items: [
      "Risk management services",
      "Claims assistance",
      "Legal support",
      "Business continuity planning",
      "Employee benefits",
      "Tax planning",
      "Succession planning",
      "Emergency response",
    ],
  },
]

// FAQ data
const faq = [
  {
    question: "What types of businesses do you cover?",
    answer: "We provide coverage for businesses of all sizes, from startups to large corporations, across various industries including retail, manufacturing, technology, professional services, and more. Each policy is tailored to your specific business needs and risks.",
  },
  {
    question: "How do you determine the coverage amount?",
    answer: "Coverage amounts are determined based on factors such as your business size, industry, annual revenue, number of employees, property value, and specific risk factors. We conduct a thorough assessment to ensure adequate protection.",
  },
  {
    question: "What is included in business interruption coverage?",
    answer: "Business interruption coverage includes lost income, operating expenses, employee wages, and relocation costs during periods when your business cannot operate due to covered events such as property damage, natural disasters, or other insured perils.",
  },
  {
    question: "Do you offer cyber liability coverage?",
    answer: "Yes, we offer comprehensive cyber liability coverage that protects against data breaches, cyber attacks, and related liabilities. This includes coverage for data recovery, notification costs, legal expenses, and regulatory fines.",
  },
]

export default function BusinessInsurancePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter benefits based on category and search
  const filteredBenefits = benefits.filter((benefit) => {
    const matchesCategory = selectedCategory === "all" || benefit.category === selectedCategory
    const matchesSearch = benefit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      benefit.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Filter FAQ based on search
  const filteredFaq = faq.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="container relative px-4 md:px-6 h-full flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center justify-center space-y-8 text-center w-full max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair"
              variants={itemVariants}
            >
              Business Insurance
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Protect your business with comprehensive coverage solutions
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary-700 text-lg px-8"
                asChild
              >
                <Link href="#coverage">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Micro-testimonial strip */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-sm py-4"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center space-x-8 overflow-x-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <span className="text-sm font-medium">{testimonial.text}</span>
                  <span className="text-xs opacity-75">- {testimonial.author}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-[var(--color-bg-card)]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 font-playfair">
              Why Choose Our Business Insurance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coverage and exceptional service to ensure your business is protected.
            </p>
          </motion.div>

          {/* Filter UI */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full"
            >
              All Benefits
            </Button>
            {Array.from(new Set(benefits.map((b) => b.category))).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search input */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-6 bg-gradient-to-br from-white to-[var(--color-bg-card)] hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/80 text-white group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section id="coverage" className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coverage.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 flex flex-col items-start"
              >
                <h3 className="text-2xl font-bold text-primary-700 font-playfair">{section.title}</h3>
                <ul className="space-y-4 w-full">
                  {section.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Shield className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-[var(--color-bg-card)]">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our business insurance services.
            </p>
          </motion.div>

          {/* Search input */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {filteredFaq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* JSON-LD for FAQ */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 hidden md:block">
              Ready to protect your business? Get your free quote now!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/80 text-white hover:opacity-90"
              asChild
            >
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 p-3 rounded-full bg-[var(--color-accent)] text-white shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  )
} 