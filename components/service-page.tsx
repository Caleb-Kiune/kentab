"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Shield, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  features: string[]
  benefits: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  coverage: {
    title: string
    items: string[]
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export function ServicePage({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  coverage,
  faq,
}: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/healthcare.png')] bg-cover bg-center opacity-20"></div>
        <div className="container relative px-4 md:px-6 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <FadeIn>
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                  {subtitle}
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8" asChild>
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary-700 text-lg px-8"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                  Comprehensive {title} Solutions
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  {description}
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                Why Choose Our {title}
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed max-w-3xl">
                We provide comprehensive coverage and exceptional service to ensure your peace of mind.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {coverage.map((section, index) => (
              <FadeIn key={index} direction={index === 0 ? "left" : "right"}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary-700 font-playfair">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed max-w-3xl">
                Find answers to common questions about our {title} services.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {faq.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                  Get in Touch
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  Ready to get started? Fill out the form and our team will get back to you shortly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-600">0721315506</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-600">kentabinsurance@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-600">
                      Blessed House Thika Road
                      <br />
                      Suite 22, Nairobi, Kenya
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                  />
                </div>
                <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
} 