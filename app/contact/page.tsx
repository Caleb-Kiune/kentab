"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowUp, Mail, Phone, MapPin, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

// Animation variants
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ContactPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[var(--color-accent)]" />,
      title: "Email Us",
      content: "kentabinsurance@gmail.com",
      link: "mailto:kentabinsurance@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[var(--color-accent)]" />,
      title: "Call Us",
      content: "+254 721 315 506",
      link: "tel:+254721315506",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[var(--color-accent)]" />,
      title: "Visit Us",
      content: "Garden City Mall, Thika Road, Nairobi, Kenya",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-[var(--color-accent)]" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
      link: null,
    },
  ]

  const teamMembers = [
    {
      name: "Tabitha Kiune",
      role: "CEO & Founder",
      image: "/team/gaurav-kumar-briYAkuuT-E-unsplash.webp",
    },
    {
      name: "Caleb Kiune",
      role: "Head of Operations",
      image: "/team/kristine-wook-E1_RW3HIbUw-unsplash.webp",
    },
    {
      name: "Lilian Mwaniki",
      role: "Claims Director",
      image: "/team/ta-focando-LOuffSFpWQI-unsplash.webp",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 lg:py-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container relative px-4 md:px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerAnimation}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemAnimation}
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-white font-playfair mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={itemAnimation}
              className="text-xl md:text-2xl lg:text-3xl text-primary-700 font-semibold"
            >
              Our specialists will reach out within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-[var(--color-secondary)] dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="insuranceType" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Insurance Type
                        </label>
                        <select
                          id="insuranceType"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select Insurance Type</option>
                          <option value="auto">Auto Insurance</option>
                          <option value="home">Home Insurance</option>
                          <option value="health">Health Insurance</option>
                          <option value="life">Life Insurance</option>
                          <option value="business">Business Insurance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="coverageAmount" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Desired Coverage Amount (KES)
                        </label>
                        <Input
                          id="coverageAmount"
                          type="number"
                          placeholder="1000000"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="preferredContact" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContact"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select Preferred Method</option>
                          <option value="email">Email</option>
                          <option value="phone">Phone Call</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="sms">SMS</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please provide any additional details about your insurance needs, such as specific coverage requirements or questions you may have."
                        required
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-cta-hover)] text-white",
                        "hover:opacity-90 transition-all duration-300",
                        "relative overflow-hidden group"
                      )}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                      {isSubmitting && (
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </Button>

                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[var(--color-accent)]" />
                        We reply within 24 hours
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[var(--color-accent)]" />
                        No obligation quote
                      </li>
                    </ul>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, rotateX: -90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                  >
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || undefined}
                    target={info.link?.startsWith('http') ? '_blank' : undefined}
                    rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn(
                      "p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300",
                      info.link && "cursor-pointer"
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[var(--color-accent)]/10">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-700 dark:text-primary-300">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Team Section */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-6">
                  Our Team
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-primary-700 dark:text-primary-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {member.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199!2d36.8704!3d-1.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17b0c6d0c0c7%3A0x1c3c3c3c3c3c3c3c!2sGarden%20City%20Mall!5e0!3m2!1sen!2ske!4v1645564750982!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10"
            />
          </motion.div>
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
