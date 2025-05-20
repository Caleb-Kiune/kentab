"use client"

import { ServicePage } from "@/components/service-page"
import { HeartPulse, Stethoscope, Users, Shield, Hospital, Star } from "lucide-react"

export default function HealthInsurancePage() {
  return (
    <ServicePage
      title="Health Insurance"
      subtitle="Comprehensive healthcare coverage for you and your family"
      description="Our health insurance solutions are designed to provide you and your loved ones with access to quality healthcare. We offer a variety of plans to suit different needs and budgets, ensuring you receive the best possible care when you need it most."
      heroImage="/images/health-insurance.jpg"
      features={[
        "Extensive network of healthcare providers",
        "Comprehensive medical coverage",
        "Flexible plan options",
        "Quick claims processing",
        "24/7 customer support"
      ]}
      benefits={[
        {
          title: "Comprehensive Coverage",
          description: "Covers hospitalization, surgeries, outpatient care, and more.",
          icon: <Hospital className="h-6 w-6" />
        },
        {
          title: "Quality Healthcare",
          description: "Access to top hospitals and specialists across Kenya.",
          icon: <Stethoscope className="h-6 w-6" />
        },
        {
          title: "Preventive Care",
          description: "Regular check-ups, screenings, and wellness programs included.",
          icon: <HeartPulse className="h-6 w-6" />
        },
        {
          title: "Prescription Coverage",
          description: "Covers essential medications and pharmacy needs.",
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: "Hospital Coverage",
          description: "Inpatient and outpatient services at leading hospitals.",
          icon: <Hospital className="h-6 w-6" />
        },
        {
          title: "Family Coverage",
          description: "Plans available for individuals, couples, and families.",
          icon: <Users className="h-6 w-6" />
        }
      ]}
      coverage={[
        {
          title: "Medical Coverage",
          items: [
            "Hospitalization and surgery",
            "Outpatient consultations",
            "Specialist visits",
            "Emergency care"
          ]
        },
        {
          title: "Preventive Care",
          items: [
            "Annual check-ups",
            "Vaccinations",
            "Screenings and diagnostics",
            "Wellness programs"
          ]
        },
        {
          title: "Prescription Benefits",
          items: [
            "Essential medications",
            "Chronic disease management",
            "Pharmacy network access"
          ]
        },
        {
          title: "Additional Benefits",
          items: [
            "Maternity coverage",
            "Dental and optical care (optional)",
            "Ambulance services",
            "24/7 medical helpline"
          ]
        }
      ]}
      faq={[
        {
          question: "What types of health insurance plans do you offer?",
          answer: "We offer individual, family, and group health insurance plans. Each plan can be customized to include various levels of coverage, including inpatient, outpatient, maternity, dental, and optical benefits."
        },
        {
          question: "How do I find a healthcare provider in your network?",
          answer: "We provide a comprehensive list of partner hospitals, clinics, and specialists. You can access this list online or contact our support team for assistance."
        },
        {
          question: "What is the claims process for health insurance?",
          answer: "Our claims process is simple and efficient. Present your insurance card at the healthcare facility, and we will handle the rest. For reimbursements, submit your claim online or at our office."
        },
        {
          question: "Can I add family members to my health insurance plan?",
          answer: "Yes, our family plans allow you to add your spouse, children, and other dependents. You can also upgrade your plan as your family's needs change."
        },
        {
          question: "Are there any additional services included in the health insurance plans?",
          answer: "Yes, we offer wellness programs, preventive care, 24/7 medical helpline, and access to health education resources as part of our health insurance plans."
        }
      ]}
    />
  )
} 