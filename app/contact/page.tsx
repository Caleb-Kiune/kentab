"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, insuranceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        insuranceType: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white font-playfair">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to get started? Our team is here to help you find the right insurance
                  coverage.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-kentab-blue font-playfair">Get in Touch</h2>
                  <p className="text-gray-500">
                    Fill out the form below and one of our insurance specialists will contact you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-lg border border-kentab-green/20 bg-[#e6f4e6] p-6 text-center">
                    <h3 className="text-xl font-medium text-kentab-blue font-playfair">Thank You!</h3>
                    <p className="mt-2 text-gray-700">
                      Your message has been received. One of our representatives will contact you shortly.
                    </p>
                    <Button
                      className="mt-4 bg-kentab-green hover:bg-kentab-green/90 text-white hover:shadow-md transition-all"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="0700000000"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insuranceType">Insurance Type</Label>
                      <Select value={formData.insuranceType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home Insurance</SelectItem>
                          <SelectItem value="auto">Auto Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="business">Business Insurance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-kentab-blue hover:bg-kentab-blue/90 text-white hover:shadow-md transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn direction="right" delay={200}>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight text-kentab-blue font-playfair">
                    Contact Information
                  </h2>
                  <p className="text-gray-500">Reach out to us directly or visit our office during business hours.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-kentab-green mt-1" />
                    <div>
                      <h3 className="font-medium text-kentab-blue font-playfair">Office Address</h3>
                      <p className="text-gray-500">
                        Blessed House Thika Road
                        <br />
                        Suite 22, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-kentab-green mt-1" />
                    <div>
                      <h3 className="font-medium text-kentab-blue font-playfair">Phone</h3>
                      <p className="text-gray-500">0721315506</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-kentab-green mt-1" />
                    <div>
                      <h3 className="font-medium text-kentab-blue font-playfair">Email</h3>
                      <p className="text-gray-500">kentabinsurance@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-kentab-green mt-1" />
                    <div>
                      <h3 className="font-medium text-kentab-blue font-playfair">Business Hours</h3>
                      <p className="text-gray-500">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-kentab-green/20 p-6">
                  <h3 className="text-lg font-medium mb-4 text-kentab-blue font-playfair">Our Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-kentab-blue font-playfair">Tabitha Kiune</span>
                      <span className="text-sm text-gray-500">- Director</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-kentab-blue font-playfair">Caleb Kiune</span>
                      <span className="text-sm text-gray-500">- Operations Manager</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-kentab-blue font-playfair">Lilian Muriuki</span>
                      <span className="text-sm text-gray-500">- Claims Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-kentab-blue font-playfair">Our Location</h2>
                <p className="mx-auto max-w-[700px] text-gray-500">
                  Find us at Blessed House, Thika Road, Nairobi, Kenya
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[4/3] md:aspect-[16/9] w-full rounded-xl overflow-hidden border border-kentab-green/20 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818769056352!2d36.8421!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMDIuOCJTIDM2wrA1MCcyNS42IkU!5e0!3m2!1sen!2ske!4v1616661080000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kentab Insurance Agency Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a
                  href="https://maps.google.com/maps?q=Blessed+House+Thika+Road,+Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-kentab-blue hover:text-kentab-green flex items-center gap-1"
                >
                  <MapPin className="h-4 w-4" /> Get directions in Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
