"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Car, HeartPulse, Users, Briefcase, Umbrella, ArrowRight, X } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const backgroundImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
  ]

  const services = [
    {
      title: "Home Insurance",
      description: "Protect your home and belongings against damage, theft, and liability.",
      icon: <Home className="h-6 w-6 text-primary-500" />,
      link: "/services/home",
      features: [
        "Property coverage",
        "Personal belongings protection",
        "Liability coverage",
        "Additional living expenses",
      ],
      detailedDescription: `Our comprehensive home insurance provides complete protection for your most valuable asset. Coverage includes:

• Building Coverage: Protects the physical structure of your home against damage from fire, storms, and other perils
• Contents Coverage: Safeguards your personal belongings against theft, damage, or loss
• Liability Protection: Covers legal expenses if someone is injured on your property
• Additional Living Expenses: Provides temporary housing if your home becomes uninhabitable
• Natural Disaster Coverage: Protection against earthquakes, floods, and other natural disasters
• Personal Property: Coverage for items both inside and outside your home
• Loss of Use: Reimbursement for additional living expenses if you need to temporarily relocate

Our home insurance policies are customizable to fit your specific needs and budget. We work with multiple insurance providers to ensure you get the best coverage at competitive rates.`,
    },
    {
      title: "Auto Insurance",
      description: "Coverage for your vehicles with options for liability, collision, and comprehensive.",
      icon: <Car className="h-6 w-6 text-primary-500" />,
      link: "/services/auto",
      features: [
        "Liability protection",
        "Collision coverage",
        "Comprehensive coverage",
        "Uninsured motorist protection",
      ],
      detailedDescription: `Our auto insurance solutions provide comprehensive protection for your vehicles. Coverage includes:

• Third-Party Liability: Covers damages to other people's property or injuries
• Comprehensive Coverage: Protection against theft, vandalism, and natural disasters
• Collision Coverage: Repairs or replacement of your vehicle after an accident
• Personal Injury Protection: Medical expenses for you and your passengers
• Uninsured/Underinsured Motorist: Protection against drivers without adequate insurance
• Roadside Assistance: 24/7 emergency services and towing
• Rental Car Coverage: Temporary vehicle replacement while yours is being repaired

We offer flexible payment options and discounts for safe drivers, multiple vehicles, and security features.`,
    },
    {
      title: "Health Insurance",
      description: "Health plans that provide coverage for medical expenses, prescriptions, and preventive care.",
      icon: <HeartPulse className="h-6 w-6 text-primary-500" />,
      link: "/services/health",
      features: ["Medical coverage", "Prescription drug benefits", "Preventive care", "Specialist visits"],
      detailedDescription: `Our health insurance plans provide comprehensive coverage for you and your family. Benefits include:

• Inpatient Care: Hospital stays, surgeries, and treatments
• Outpatient Services: Doctor visits, diagnostic tests, and procedures
• Prescription Drugs: Coverage for essential medications
• Preventive Care: Regular check-ups, vaccinations, and screenings
• Specialist Consultations: Access to specialized medical care
• Dental Coverage: Basic and major dental procedures
• Vision Care: Eye exams and corrective lenses
• Maternity Care: Prenatal, delivery, and postnatal care

We offer various plan options to suit different needs and budgets, with access to a wide network of healthcare providers.`,
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your loved ones in the event of your passing.",
      icon: <Users className="h-6 w-6 text-primary-500" />,
      link: "/services/life",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
      detailedDescription: `Our life insurance solutions provide financial security for your loved ones. Options include:

• Term Life Insurance: Affordable coverage for a specific period
• Whole Life Insurance: Permanent coverage with cash value accumulation
• Universal Life Insurance: Flexible premiums and death benefits
• Critical Illness Coverage: Financial protection against serious illnesses
• Disability Insurance: Income replacement if you're unable to work
• Funeral Expense Coverage: Assistance with final expenses
• Family Income Benefit: Regular payments to your beneficiaries

We help you choose the right coverage amount and policy type based on your family's needs and financial goals.`,
    },
    {
      title: "Business Insurance",
      description: "Comprehensive coverage options to protect your business assets, employees, and operations.",
      icon: <Briefcase className="h-6 w-6 text-primary-500" />,
      link: "/services/business",
      features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
      detailedDescription: `Our business insurance solutions protect your company from various risks. Coverage includes:

• Property Insurance: Protection for buildings, equipment, and inventory
• General Liability: Coverage for third-party injuries and property damage
• Professional Liability: Protection against professional errors and omissions
• Workers' Compensation: Coverage for employee injuries and illnesses
• Business Interruption: Income protection during forced closures
• Cyber Liability: Protection against data breaches and cyber attacks
• Commercial Auto: Coverage for business vehicles
• Employee Benefits: Health, life, and disability coverage for employees

We offer customizable packages for businesses of all sizes, from startups to large corporations.`,
    },
    {
      title: "Umbrella Insurance",
      description: "Additional liability coverage that goes beyond the limits of your existing policies.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/umbrella",
      features: ["Extended liability protection", "Legal defense coverage", "Worldwide coverage", "Asset protection"],
      detailedDescription: `Our umbrella insurance provides extra liability protection beyond your existing policies. Benefits include:

• Additional Liability Coverage: Extra protection above your primary policies
• Legal Defense Costs: Coverage for attorney fees and court costs
• Worldwide Coverage: Protection anywhere in the world
• Personal Injury Protection: Coverage for libel, slander, and defamation
• Property Damage: Additional coverage for damage to others' property
• Bodily Injury: Extra protection for injuries to others
• Asset Protection: Safeguards your personal and business assets

Umbrella insurance is an affordable way to significantly increase your liability protection.`,
    },
    {
      title: "Travel Insurance",
      description: "Protection for unexpected events during your travels, both domestic and international.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/travel",
      features: ["Trip cancellation", "Medical emergencies", "Lost luggage", "Travel assistance"],
      detailedDescription: `Our travel insurance provides comprehensive protection for your journeys. Coverage includes:

• Trip Cancellation: Reimbursement for non-refundable expenses
• Medical Emergencies: Coverage for illness and injuries abroad
• Emergency Evacuation: Transportation to appropriate medical facilities
• Lost/Delayed Baggage: Protection for lost or delayed luggage
• Travel Delay: Compensation for unexpected delays
• 24/7 Assistance: Global support services
• Rental Car Coverage: Protection for rental vehicle damage
• Adventure Sports: Coverage for various activities

We offer both single-trip and annual travel insurance policies to suit your travel needs.`,
    },
    {
      title: "Pet Insurance",
      description: "Coverage for veterinary expenses to keep your furry family members healthy.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/pet",
      features: ["Accident coverage", "Illness coverage", "Wellness plans", "Prescription medications"],
      detailedDescription: `Our pet insurance helps you provide the best care for your furry family members. Coverage includes:

• Accident Coverage: Treatment for injuries and emergencies
• Illness Coverage: Protection against diseases and conditions
• Wellness Care: Routine check-ups and preventive care
• Prescription Medications: Coverage for necessary medications
• Surgery Coverage: Protection for surgical procedures
• Alternative Therapies: Coverage for holistic treatments
• Dental Care: Basic and major dental procedures
• Hereditary Conditions: Coverage for breed-specific conditions

We offer flexible plans for dogs and cats, with options to add coverage for other pets.`,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/healthcare.png')] bg-cover bg-center opacity-20"></div>
        <div className="container relative px-4 md:px-6 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <FadeIn>
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair">
                  Our Insurance Services
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                  Comprehensive insurance solutions tailored to protect what matters most to you and your business.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8">
                    Get a Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary-700 text-lg px-8"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl text-center transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group">
                  <div className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6 text-left">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary-50">
                    {selectedService.icon}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-primary-700">
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-1">
                      {selectedService.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-8">
                {/* Key Features Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Coverage Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">Coverage Details</h3>
                  <div className="prose prose-sm max-w-none">
                    {selectedService.detailedDescription.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('•')) {
                        // This is a bullet point section
                        const points = paragraph.split('\n').filter(p => p.trim().startsWith('•'));
                        return (
                          <div key={index} className="space-y-2">
                            {points.map((point, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="mt-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                </div>
                                <span className="text-gray-700">{point.replace('•', '').trim()}</span>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      // Regular paragraph
                      return (
                        <p key={index} className="text-gray-600 mb-4">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="border-t pt-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                      Ready to get started? Contact us for a personalized quote.
                    </p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setSelectedService(null)}
                        className="border-gray-300"
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-primary-500 hover:bg-primary-600 text-white"
                        asChild
                      >
                        <Link href={selectedService.link}>
                          Get a Quote
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple process makes getting the right insurance coverage easy and stress-free.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Consultation</h3>
                <p className="text-sm text-gray-500">
                  We'll discuss your needs and help you understand your coverage options.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-sm text-gray-500">
                  We'll create a personalized insurance plan tailored to your specific requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Coverage</h3>
                <p className="text-sm text-gray-500">
                  Once you're satisfied, we'll set up your policy and provide ongoing support.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Protected?</h2>
                <p className="text-primary-100 md:text-xl/relaxed">
                  Contact us today for a free consultation and quote. Our team is ready to help you find the perfect
                  coverage for your needs.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                    Get a Free Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white hover:shadow-md transition-all"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
