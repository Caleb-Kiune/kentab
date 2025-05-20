"use client"

import { ServicePage } from "@/components/service-page"
import { Shield, Users, HeartPulse, Car, Home, Plane } from "lucide-react"

export default function PersonalInsurancePage() {
  return (
    <ServicePage
      title="Personal Insurance"
      subtitle="Protect yourself and your loved ones with comprehensive personal insurance solutions"
      description="Our personal insurance solutions are designed to provide comprehensive protection for you and your family. We understand that life is full of uncertainties, and our goal is to help you navigate them with confidence. Our personal insurance products cover everything from your health and home to your vehicle and travel needs."
      heroImage="/images/personal-insurance.jpg"
      features={[
        "Comprehensive coverage options tailored to your needs",
        "Competitive rates and flexible payment plans",
        "24/7 customer support and claims assistance",
        "Quick and easy claims processing",
        "Access to a wide network of service providers",
      ]}
      benefits={[
        {
          title: "Comprehensive Coverage",
          description: "Protection against a wide range of risks and uncertainties, ensuring you're covered in any situation.",
          icon: <Shield className="h-6 w-6" />,
        },
        {
          title: "Family Protection",
          description: "Secure your family's future with insurance solutions that protect their health, education, and well-being.",
          icon: <Users className="h-6 w-6" />,
        },
        {
          title: "Health Security",
          description: "Access quality healthcare when you need it most with our comprehensive health insurance plans.",
          icon: <HeartPulse className="h-6 w-6" />,
        },
        {
          title: "Vehicle Protection",
          description: "Keep your vehicle protected with comprehensive auto insurance coverage for all types of vehicles.",
          icon: <Car className="h-6 w-6" />,
        },
        {
          title: "Home Security",
          description: "Protect your home and belongings with our comprehensive home insurance solutions.",
          icon: <Home className="h-6 w-6" />,
        },
        {
          title: "Travel Safety",
          description: "Travel with peace of mind knowing you're protected against unexpected events during your journey.",
          icon: <Plane className="h-6 w-6" />,
        },
      ]}
      coverage={[
        {
          title: "Health Insurance Coverage",
          items: [
            "Inpatient and outpatient medical expenses",
            "Prescription medication coverage",
            "Dental and vision care",
            "Maternity and newborn care",
            "Emergency medical evacuation",
            "Preventive care and wellness programs",
          ],
        },
        {
          title: "Auto Insurance Coverage",
          items: [
            "Comprehensive vehicle protection",
            "Third-party liability coverage",
            "Personal accident coverage",
            "Roadside assistance",
            "Loss of use benefits",
            "Legal liability coverage",
          ],
        },
        {
          title: "Home Insurance Coverage",
          items: [
            "Building and contents coverage",
            "Natural disaster protection",
            "Theft and burglary coverage",
            "Personal liability protection",
            "Temporary accommodation benefits",
            "Home emergency assistance",
          ],
        },
        {
          title: "Travel Insurance Coverage",
          items: [
            "Trip cancellation and interruption",
            "Medical emergency coverage",
            "Lost or delayed baggage protection",
            "Travel delay benefits",
            "Emergency evacuation coverage",
            "24/7 travel assistance",
          ],
        },
      ]}
      faq={[
        {
          question: "What types of personal insurance do you offer?",
          answer: "We offer a comprehensive range of personal insurance products including health insurance, auto insurance, home insurance, and travel insurance. Each product can be customized to meet your specific needs and budget.",
        },
        {
          question: "How do I choose the right insurance coverage?",
          answer: "Our experienced insurance advisors will help you assess your needs and recommend the most suitable coverage options. We consider factors such as your lifestyle, family situation, and budget to create a personalized insurance plan.",
        },
        {
          question: "What is the claims process like?",
          answer: "Our claims process is simple and efficient. You can file a claim through our website, mobile app, or by contacting our customer service team. We process claims quickly and keep you informed throughout the process.",
        },
        {
          question: "Can I customize my insurance coverage?",
          answer: "Yes, we offer flexible coverage options that can be tailored to your specific needs. You can choose from different coverage levels, add-ons, and payment plans to create a policy that works best for you.",
        },
        {
          question: "What happens if I need to make changes to my policy?",
          answer: "You can easily make changes to your policy through our customer portal or by contacting our customer service team. We'll help you update your coverage to reflect any changes in your circumstances.",
        },
      ]}
    />
  )
} 