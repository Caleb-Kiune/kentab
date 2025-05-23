"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"

type FormErrors = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  insuranceType?: string
  preferredContactMethod?: string
  preferredContactTime?: string
}

function QuoteForm() {
  const searchParams = useSearchParams()
  const type = searchParams?.get("type") || ""
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: type,
    message: "",
    preferredContactMethod: "email",
    preferredContactTime: "morning"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    if (type) {
      setFormData(prev => ({ ...prev, insuranceType: type }))
    }
  }, [type])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.insuranceType) newErrors.insuranceType = "Insurance type is required"
    if (!formData.preferredContactMethod) newErrors.preferredContactMethod = "Contact method is required"
    if (!formData.preferredContactTime) newErrors.preferredContactTime = "Contact time is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const phoneRegex = /^\d{10,}$/
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (id: string, value: any) => {
    setFormData({ ...formData, [id]: value })
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }))
    }
  }

  const trackFormSubmission = (data: typeof formData) => {
    console.log(`Quote form submitted for ${data.insuranceType} by ${data.email}`)
    // Future analytics implementation can be added here
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      formRef.current?.scrollIntoView({ behavior: "smooth" })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xwpojwow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form")
      }

      trackFormSubmission(formData)
      
      toast({
        title: "Success!",
        description: "✅ Quote request submitted successfully!",
        className: "bg-green-50 border-green-200 text-green-700",
      })

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        insuranceType: type,
        message: "",
        preferredContactMethod: "email",
        preferredContactTime: "morning"
      })
      setIsSubmitted(true)
    } catch (error) {
      toast({
        title: "Error",
        description: "❌ Failed to submit form. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
      formRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Request a Quote</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Fill out the form below and one of our insurance experts will contact you with a personalized quote.
        We'll get back to you within 24 hours.
      </p>

      <Card className="max-w-2xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              ref={formRef}
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={cn(errors.firstName && "border-red-500")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={cn(errors.lastName && "border-red-500")}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={cn(errors.email && "border-red-500")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={cn(errors.phone && "border-red-500")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Insurance Type */}
              <div className="space-y-2">
                <Label htmlFor="insuranceType">Type of Insurance *</Label>
                <Select
                  value={formData.insuranceType}
                  onValueChange={(value) => handleInputChange("insuranceType", value)}
                  required
                >
                  <SelectTrigger 
                    id="insuranceType"
                    className={cn(errors.insuranceType && "border-red-500")}
                  >
                    <SelectValue placeholder="Select insurance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home Insurance</SelectItem>
                    <SelectItem value="auto">Auto Insurance</SelectItem>
                    <SelectItem value="health">Health Insurance</SelectItem>
                    <SelectItem value="life">Life Insurance</SelectItem>
                    <SelectItem value="business">Business Insurance</SelectItem>
                    <SelectItem value="umbrella">Umbrella Insurance</SelectItem>
                    <SelectItem value="travel">Travel Insurance</SelectItem>
                    <SelectItem value="pet">Pet Insurance</SelectItem>
                  </SelectContent>
                </Select>
                {errors.insuranceType && (
                  <p className="text-sm text-red-500">{errors.insuranceType}</p>
                )}
              </div>

              {/* Contact Preferences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredContactMethod">Preferred Contact Method *</Label>
                  <Select
                    value={formData.preferredContactMethod}
                    onValueChange={(value) => handleInputChange("preferredContactMethod", value)}
                    required
                  >
                    <SelectTrigger 
                      id="preferredContactMethod"
                      className={cn(errors.preferredContactMethod && "border-red-500")}
                    >
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredContactMethod && (
                    <p className="text-sm text-red-500">{errors.preferredContactMethod}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredContactTime">Preferred Contact Time *</Label>
                  <Select
                    value={formData.preferredContactTime}
                    onValueChange={(value) => handleInputChange("preferredContactTime", value)}
                    required
                  >
                    <SelectTrigger 
                      id="preferredContactTime"
                      className={cn(errors.preferredContactTime && "border-red-500")}
                    >
                      <SelectValue placeholder="Select contact time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                      <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.preferredContactTime && (
                    <p className="text-sm text-red-500">{errors.preferredContactTime}</p>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide any additional details about your insurance needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="text-sm text-gray-500">
                <p>* Required fields</p>
                <p className="mt-2">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
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
                Your quote request has been submitted successfully. We'll get back to you within 24 hours with a personalized quote.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white"
              >
                Request Another Quote
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  )
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="container py-16 text-center">Loading...</div>}>
      <QuoteForm />
    </Suspense>
  )
}