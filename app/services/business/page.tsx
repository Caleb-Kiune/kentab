"use client"

import { ServicePage } from "@/components/service-page"
import { Building2, Truck, Users, Shield, Briefcase, Star } from "lucide-react"

export default function BusinessInsurancePage() {
  return (
    <ServicePage
      title="Business Insurance"
      subtitle="Protect your business with comprehensive insurance solutions tailored to your needs"
      description="Our business insurance solutions are designed to safeguard your company's assets, operations, and future. We understand that every business is unique, which is why we offer customizable coverage options to meet your specific requirements and industry standards."
      heroImage="/images/business-insurance.jpg"
      features={[
        "Tailored coverage for your business needs",
        "Comprehensive risk management solutions",
        "Expert claims handling and support",
        "Flexible payment options",
        "24/7 business support"
      ]}
      benefits={[
        {
          title: "Asset Protection",
          description: "Comprehensive coverage for your business property, equipment, and inventory against damage, theft, and natural disasters.",
          icon: <Building2 className="h-6 w-6" />
        },
        {
          title: "Business Continuity",
          description: "Protection against business interruption and loss of income due to covered events.",
          icon: <Briefcase className="h-6 w-6" />
        },
        {
          title: "Employee Protection",
          description: "Comprehensive coverage for your employees, including workers' compensation and employee benefits.",
          icon: <Users className="h-6 w-6" />
        },
        {
          title: "Liability Coverage",
          description: "Protection against legal claims and financial losses resulting from business operations.",
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: "Transportation Coverage",
          description: "Comprehensive coverage for your business vehicles and transportation operations.",
          icon: <Truck className="h-6 w-6" />
        },
        {
          title: "Industry-Specific Solutions",
          description: "Specialized coverage options tailored to your specific industry and business needs.",
          icon: <Star className="h-6 w-6" />
        }
      ]}
      coverage={[
        {
          title: "Property Insurance",
          items: [
            "Building and contents coverage",
            "Business interruption insurance",
            "Equipment breakdown coverage",
            "Natural disaster protection"
          ]
        },
        {
          title: "Liability Insurance",
          items: [
            "General liability coverage",
            "Professional liability insurance",
            "Product liability protection",
            "Cyber liability coverage"
          ]
        },
        {
          title: "Employee Benefits",
          items: [
            "Workers' compensation",
            "Group health insurance",
            "Disability insurance",
            "Life insurance"
          ]
        },
        {
          title: "Commercial Auto",
          items: [
            "Fleet insurance",
            "Liability coverage",
            "Physical damage protection",
            "Hired and non-owned auto coverage"
          ]
        }
      ]}
      faq={[
        {
          question: "What types of business insurance do you offer?",
          answer: "We offer a comprehensive range of business insurance products including property insurance, liability insurance, workers' compensation, commercial auto insurance, and specialized coverage for various industries. Each policy can be customized to meet your specific business needs."
        },
        {
          question: "How do I determine the right coverage for my business?",
          answer: "Our business insurance experts will conduct a thorough assessment of your operations, assets, and risks to recommend the most appropriate coverage levels. We consider factors such as your industry, business size, location, and specific operations."
        },
        {
          question: "What is the claims process for business insurance?",
          answer: "Our business claims process is efficient and straightforward. You can file a claim through our 24/7 claims hotline or online portal. Our dedicated business claims team will guide you through the process and work to minimize any disruption to your operations."
        },
        {
          question: "Can I customize my business insurance policy?",
          answer: "Yes, we offer flexible policy options that can be tailored to your specific business needs. You can choose from various coverage levels, deductibles, and additional riders to create a policy that best protects your business."
        },
        {
          question: "What additional services do you offer to business clients?",
          answer: "In addition to insurance coverage, we provide risk management consulting, safety training, and access to our network of trusted service providers. We also offer regular policy reviews to ensure your coverage remains appropriate for your business needs."
        }
      ]}
    />
  )
} 