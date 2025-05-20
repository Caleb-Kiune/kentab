"use client"

import { ServicePage } from "@/components/service-page"
import { Shield, Car, Clock, DollarSign, Phone, FileCheck } from "lucide-react"

export default function MotorInsurancePage() {
  return (
    <ServicePage
      title="Motor Insurance"
      subtitle="Protect your vehicle with comprehensive coverage tailored to your needs"
      description="Our motor insurance provides comprehensive protection for your vehicle, ensuring you're covered against accidents, theft, and other damages. We offer flexible coverage options to suit your specific needs and budget."
      heroImage="/images/motor-insurance.jpg"
      features={[
        "Comprehensive coverage for all types of vehicles",
        "24/7 roadside assistance and towing services",
        "Coverage for third-party liability",
        "Personal accident coverage for driver and passengers",
        "Protection against theft and natural disasters",
        "Flexible payment options and quick claims processing"
      ]}
      benefits={[
        {
          title: "Comprehensive Protection",
          description: "Full coverage for your vehicle including accidental damage, theft, and third-party liability.",
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: "24/7 Roadside Assistance",
          description: "Round-the-clock support for breakdowns, towing, and emergency services.",
          icon: <Car className="h-6 w-6" />
        },
        {
          title: "Quick Claims Processing",
          description: "Fast and efficient claims handling to get you back on the road quickly.",
          icon: <Clock className="h-6 w-6" />
        },
        {
          title: "Flexible Payment Options",
          description: "Choose from various payment plans that suit your budget and preferences.",
          icon: <DollarSign className="h-6 w-6" />
        },
        {
          title: "Expert Support",
          description: "Dedicated team of insurance professionals to assist you with any queries.",
          icon: <Phone className="h-6 w-6" />
        },
        {
          title: "Easy Documentation",
          description: "Simple and straightforward documentation process for policy issuance.",
          icon: <FileCheck className="h-6 w-6" />
        }
      ]}
      coverage={[
        {
          title: "What's Covered",
          items: [
            "Accidental damage to your vehicle",
            "Theft and attempted theft",
            "Natural disasters and weather damage",
            "Third-party liability",
            "Personal accident coverage",
            "Roadside assistance and towing",
            "Emergency medical expenses",
            "Loss of income due to accident"
          ]
        },
        {
          title: "Additional Benefits",
          items: [
            "No-claim bonus protection",
            "Coverage for accessories and modifications",
            "Emergency accommodation and travel expenses",
            "Legal liability coverage",
            "Coverage for both private and commercial vehicles",
            "Optional add-ons for enhanced protection",
            "Worldwide coverage options",
            "Courtesy car during repairs"
          ]
        }
      ]}
      faq={[
        {
          question: "What types of vehicles are covered?",
          answer: "We provide coverage for all types of vehicles including private cars, commercial vehicles, motorcycles, and specialized vehicles. Each vehicle type has specific coverage options tailored to its unique requirements."
        },
        {
          question: "How do I file a claim?",
          answer: "You can file a claim through our 24/7 claims hotline, online portal, or by visiting our office. Our claims team will guide you through the process and ensure quick resolution of your claim."
        },
        {
          question: "What factors affect my premium?",
          answer: "Your premium is calculated based on factors such as vehicle type, age, usage, driver's history, coverage level, and location. We offer competitive rates and various discounts for safe drivers and multiple policies."
        },
        {
          question: "Is roadside assistance included?",
          answer: "Yes, our comprehensive motor insurance includes 24/7 roadside assistance. This covers towing, battery jump-start, fuel delivery, flat tire assistance, and emergency locksmith services."
        }
      ]}
    />
  )
} 