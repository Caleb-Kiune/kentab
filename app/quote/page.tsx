"use client"

import { useState, useEffect } from "react"
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

function QuoteForm() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: type || "",
    message: "",
    preferredContactMethod: "email",
    preferredContactTime: "morning"
  })

  useEffect(() => {
    if (type) {
      setFormData(prev => ({ ...prev, insuranceType: type }))
    }
  }, [type])

  const handleInputChange = (id: string, value: any) => {
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Show success message or redirect
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Request a Quote</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Fill out the form below and one of our insurance experts will contact you with a personalized quote.
        We'll get back to you within 24 hours.
      </p>

      <Card className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
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
              <SelectTrigger id="insuranceType">
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
                <SelectTrigger id="preferredContactMethod">
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredContactTime">Preferred Contact Time *</Label>
              <Select
                value={formData.preferredContactTime}
                onValueChange={(value) => handleInputChange("preferredContactTime", value)}
                required
              >
                <SelectTrigger id="preferredContactTime">
                  <SelectValue placeholder="Select contact time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                  <SelectItem value="evening">Evening (4PM - 6PM)</SelectItem>
                </SelectContent>
              </Select>
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

          <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
            Submit Quote Request
          </Button>
        </form>
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