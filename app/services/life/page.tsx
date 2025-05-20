"use client"

import { ServicePage } from "@/components/service-page"
import { Shield, Heart, Users, DollarSign, Briefcase, Star } from "lucide-react"

export default function LifeInsurancePage() {
  return (
    <ServicePage
      title="Life Insurance"
      subtitle="Secure your family's future with reliable life insurance solutions"
      description="Our life insurance solutions are designed to provide financial security and peace of mind for you and your loved ones. We offer a range of flexible policies to suit your needs, ensuring your family is protected no matter what the future holds."
      heroImage="/images/life-insurance.jpg"
      features={[
        "Flexible coverage options",
        "Affordable premium rates",
        "Quick and easy application process",
        "Expert guidance and support",
        "Comprehensive family protection"
      ]}
      benefits={[
        {
          title: "Family Protection",
          description: "Ensure your loved ones are financially secure in the event of your passing.",
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: "Wealth Transfer",
          description: "Facilitate the transfer of wealth to your beneficiaries efficiently.",
          icon: <DollarSign className="h-6 w-6" />
        },
        {
          title: "Education Planning",
          description: "Provide for your children's education and future needs.",
          icon: <Briefcase className="h-6 w-6" />
        },
        {
          title: "Flexible Policies",
          description: "Choose from term, whole, or universal life insurance to fit your goals.",
          icon: <Star className="h-6 w-6" />
        },
        {
          title: "Living Benefits",
          description: "Access funds in case of critical illness or disability (optional riders).",
          icon: <Heart className="h-6 w-6" />
        },
        {
          title: "Legacy Planning",
          description: "Leave a lasting legacy for your family and causes you care about.",
          icon: <Users className="h-6 w-6" />
        }
      ]}
      coverage={[
        {
          title: "Term Life Insurance",
          items: [
            "Affordable coverage for a set period (e.g., 10, 20, 30 years)",
            "Fixed premiums for the term duration",
            "Death benefit paid to beneficiaries if the insured passes during the term"
          ]
        },
        {
          title: "Whole Life Insurance",
          items: [
            "Lifetime coverage with guaranteed death benefit",
            "Builds cash value over time",
            "Level premiums throughout the policy"
          ]
        },
        {
          title: "Universal Life Insurance",
          items: [
            "Flexible premiums and adjustable death benefits",
            "Potential to accumulate cash value",
            "Option to increase or decrease coverage as needs change"
          ]
        },
        {
          title: "Additional Benefits",
          items: [
            "Critical illness and disability riders",
            "Accidental death benefit",
            "Education and savings plans",
            "Funeral and final expense coverage"
          ]
        }
      ]}
      faq={[
        {
          question: "What types of life insurance do you offer?",
          answer: "We offer term life, whole life, and universal life insurance policies. Each type provides different benefits and can be tailored to your specific needs and goals."
        },
        {
          question: "How much life insurance coverage do I need?",
          answer: "The amount of coverage you need depends on your financial obligations, income, family size, and long-term goals. Our advisors can help you determine the right amount for your situation."
        },
        {
          question: "What is the application process for life insurance?",
          answer: "Our application process is simple and straightforward. You can apply online or with the help of our advisors. Some policies may require a medical exam, while others offer simplified or guaranteed issue options."
        },
        {
          question: "Can I change my policy or coverage amount later?",
          answer: "Yes, many of our life insurance policies offer flexibility to adjust your coverage as your needs change. You can also add riders for additional protection."
        },
        {
          question: "What happens if I become disabled or critically ill?",
          answer: "Some life insurance policies include riders that provide benefits in the event of disability or critical illness. These can help cover expenses and provide financial support during difficult times."
        }
      ]}
    />
  )
} 