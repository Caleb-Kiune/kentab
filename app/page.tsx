"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, HeartPulse, Users, Phone, Briefcase, ArrowRight } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { StarRating } from "@/components/star-rating"
import { LogoCarousel } from "@/components/logo-carousel"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { InsuranceCategory } from "@/components/insurance-category"
import { ChatWidget } from "@/components/chat-widget"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof insuranceCategories[0] | null>(null)

  // Background images for hero section
  const heroImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
  ]

  // Content for each slide
  const heroContents = [
    {
      title: "Quality Healthcare Coverage",
      subtitle: "Health Insurance Solutions",
      description:
        "Protect your family's health with comprehensive medical coverage. Access quality healthcare when you need it most.",
      primaryButtonText: "Get Health Quote",
      secondaryButtonText: "Learn More",
      primaryButtonLink: "/services/health",
      secondaryButtonLink: "/services/health",
      badge: "Medical Protection",
    },
    {
      title: "Weather Life's Storms",
      subtitle: "Comprehensive Protection",
      description:
        "Be prepared for whatever life brings your way with our umbrella insurance policies that provide extra layers of protection.",
      primaryButtonText: "Explore Coverage",
      secondaryButtonText: "Get Details",
      primaryButtonLink: "/services/umbrella",
      secondaryButtonLink: "/services/umbrella",
      badge: "Extra Protection",
    },
    {
      title: "Travel With Confidence",
      subtitle: "Travel Insurance",
      description:
        "Enjoy your journey knowing you're protected against unexpected events with our comprehensive travel insurance.",
      primaryButtonText: "Get Travel Quote",
      secondaryButtonText: "See Benefits",
      primaryButtonLink: "/services/travel",
      secondaryButtonLink: "/services/travel",
      badge: "Journey Protection",
    },
    {
      title: "Protect Your Home",
      subtitle: "Home Insurance Solutions",
      description:
        "Your home is your sanctuary. Protect it and everything inside with our comprehensive home insurance policies.",
      primaryButtonText: "Home Coverage",
      secondaryButtonText: "Learn More",
      primaryButtonLink: "/services/home",
      secondaryButtonLink: "/services/home",
      badge: "Home Protection",
    },
    {
      title: "Stand Out From The Crowd",
      subtitle: "Unique Insurance Solutions",
      description:
        "We provide personalized insurance solutions as unique as you are, ensuring you get exactly the coverage you need.",
      primaryButtonText: "Get a Free Quote",
      secondaryButtonText: "Our Approach",
      primaryButtonLink: "/contact",
      secondaryButtonLink: "/about",
      badge: "Tailored Coverage",
    },
  ]

  // Insurance providers data - Updated with all logos
  const insuranceProviders = [
    { name: "Geminia Insurance", src: "/logos/geminia.png" },
    { name: "Britam Insurance", src: "/logos/britam-new.png" },
    { name: "AIG", src: "/logos/aig.png" },
    { name: "Madison Group", src: "/logos/madison-group.png" },
    { name: "Prudential", src: "/logos/prudential.jpeg" },
    { name: "Pioneer Insurance", src: "/logos/pioneer.png" },
    { name: "CIC Group", src: "/logos/cic-group.webp" },
    { name: "The Monarch Insurance", src: "/logos/monarch.jpeg" },
    { name: "Jubilee Insurance", src: "/logos/jubilee-new.png" },
    { name: "AAR Insurance", src: "/logos/aar-new.png" },
    { name: "ICEA Lion", src: "/logos/icea-new.png" },
    { name: "Sanlam", src: "/logos/sanlam.png" },
    { name: "GA Insurance", src: "/logos/ga-new.png" },
    { name: "APA Insurance", src: "/logos/apa-new.png" },
    { name: "Heritage Insurance", src: "/logos/heritage-new.png" },
    { name: "Kenyan Alliance", src: "/logos/kenyan-alliance.png" },
  ]

  // Testimonials data - reduced to 3
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/placeholder.svg?height=40&width=40",
      content: "The team at Kentab was incredibly helpful...",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Business Owner",
      image: "/placeholder.svg?height=40&width=40",
      content: "As a small business owner, I needed comprehensive coverage...",
      rating: 4.5,
    },
    {
      name: "Jane Muthoni",
      role: "Car Owner",
      image: "/placeholder.svg?height=40&width=40",
      content: "I've been with Kentab Insurance for over 3 years...",
      rating: 5,
    },
    {
      name: "Daniel Otieno",
      role: "Entrepreneur",
      image: "/placeholder.svg?height=40&width=40",
      content: "They really understand the unique needs of business owners.",
      rating: 4.8,
    },
    {
      name: "Aisha Khan",
      role: "Traveler",
      image: "/placeholder.svg?height=40&width=40",
      content: "Their travel insurance gave me peace of mind abroad.",
      rating: 5,
    },
    {
      name: "John Kamau",
      role: "Landlord",
      image: "/placeholder.svg?height=40&width=40",
      content: "Got great property insurance and support.",
      rating: 4.6,
    },
    {
      name: "Emily Njeri",
      role: "Mother",
      image: "/placeholder.svg?height=40&width=40",
      content: "Kentab helped me find the best family health cover.",
      rating: 5,
    },
    {
      name: "Paul Mwangi",
      role: "Consultant",
      image: "/placeholder.svg?height=40&width=40",
      content: "Superb customer service and value for money.",
      rating: 4.7,
    },
  ]
  
  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "Homeowner",
  //     image: "/placeholder.svg?height=40&width=40",
  //     content:
  //       "The team at Kentab was incredibly helpful in finding the right home insurance policy for my family. They took the time to understand our needs and found us great coverage at an affordable price.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "Business Owner",
  //     image: "/placeholder.svg?height=40&width=40",
  //     content:
  //       "As a small business owner, I needed comprehensive coverage that wouldn't break the bank. Kentab provided excellent options and made the process simple and straightforward.",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "Jane Muthoni",
  //     role: "Car Owner",
  //     image: "/placeholder.svg?height=40&width=40",
  //     content:
  //       "I've been with Kentab Insurance for over 3 years now for my auto insurance. Their claims process is efficient and their customer service is outstanding. Highly recommend!",
  //     rating: 5,
  //   },
  // ]

  // Insurance categories with detailed descriptions
  const insuranceCategories = [
    {
      title: "Motor Insurance",
      description: "Protect your vehicle with our comprehensive motor insurance solutions",
      icon: <Users className="h-7 w-7" />,
      link: "/services/motor",
      features: ["Comprehensive coverage", "Third-party liability", "Personal accident", "Roadside assistance"],
      detailedDescription: `Our motor insurance solutions provide comprehensive protection for your vehicle. Coverage includes:

• Comprehensive Coverage: Protection for your vehicle against damage, theft, and natural disasters
• Third-Party Liability: Coverage for damages caused to others' property or injuries
• Personal Accident: Coverage for accidental injuries while driving
• Roadside Assistance: 24/7 support for breakdowns and emergencies

We offer customizable plans to fit your specific needs and budget, ensuring you get the right coverage for your vehicle.`,
    },
    {
      title: "Business Insurance",
      description: "Comprehensive coverage options for your business needs",
      icon: <Briefcase className="h-7 w-7" />,
      link: "/services/business",
      features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
      detailedDescription: `Our business insurance solutions protect your company from various risks. Coverage includes:

• Property Insurance: Protection for buildings, equipment, and inventory
• Liability Coverage: Protection against third-party claims and lawsuits
• Workers' Compensation: Coverage for employee injuries and illnesses
• Business Interruption: Protection against income loss due to covered events

We provide tailored solutions for businesses of all sizes, from startups to large corporations.`,
    },
    {
      title: "Health Insurance",
      description: "Quality healthcare coverage for you and your family",
      icon: <HeartPulse className="h-7 w-7" />,
      link: "/services/health",
      features: ["Medical coverage", "Prescription benefits", "Preventive care", "Specialist visits"],
      detailedDescription: `Our health insurance plans provide comprehensive coverage for you and your family. Benefits include:

• Medical Coverage: Hospital stays, surgeries, and treatments
• Prescription Benefits: Coverage for essential medications
• Preventive Care: Regular check-ups and screenings
• Specialist Visits: Access to specialized medical care

We offer various plan options to suit different needs and budgets, with access to a wide network of healthcare providers.`,
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your loved ones",
      icon: <Shield className="h-7 w-7" />,
      link: "/services/life",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
      detailedDescription: `Our life insurance solutions provide financial security for your loved ones. Options include:

• Term Life Insurance: Affordable coverage for a specific period
• Whole Life Insurance: Permanent coverage with cash value accumulation
• Universal Life Insurance: Flexible premiums and death benefits
• Final Expense Coverage: Assistance with funeral and burial costs

We help you choose the right coverage amount and policy type based on your family's needs and financial goals.`,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dynamic Content */}
      <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="absolute inset-0 bg-[url('/images/healthcare.png')] bg-cover bg-center opacity-20"></div>
        <div className="container relative px-4 md:px-6 py-20 md:py-32 lg:py-40">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <FadeIn>
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-playfair">
                  Your Trusted Insurance Partner in Kenya
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
                    Learn More
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Insurance Categories Section */}
      <section className="w-full py-16 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                  Protect What Matters Most
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  We offer a wide range of insurance products to meet your personal and business needs.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insuranceCategories.map((category, index) => (
              <FadeIn key={index} direction="up" delay={index * 100}>
                <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl text-center transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group">
                  <div className="p-6">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                    <ul className="space-y-2 mb-6 text-left">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
              <Link href="/services">View All Insurance Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Details Modal */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          {selectedCategory && (
            <>
              <DialogHeader className="border-b pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary-50">
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-primary-700">
                      {selectedCategory.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 mt-1">
                      {selectedCategory.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-8">
                {/* Key Features Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-700 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCategory.features.map((feature, index) => (
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
                    {selectedCategory.detailedDescription.split('\n\n').map((paragraph, index) => {
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
                        onClick={() => setSelectedCategory(null)}
                        className="border-gray-300"
                      >
                        Close
                      </Button>
                      <Button
                        className="bg-primary-500 hover:bg-primary-600 text-white"
                        asChild
                      >
                        <Link href={selectedCategory.link}>
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

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <FadeIn direction="left">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary-100 px-3 py-1 text-sm text-secondary-600">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                  Insurance You Can Trust
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed">
                  We're committed to providing exceptional service and personalized insurance solutions that protect
                  what matters most to you.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-secondary-100 p-1">
                      <Shield className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Reliable Protection</h3>
                      <p className="text-sm text-gray-600">
                        We partner with top-rated insurance carriers to provide reliable coverage you can trust.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-secondary-100 p-1">
                      <Users className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Experienced Team</h3>
                      <p className="text-sm text-gray-600">
                        Our team of experienced professionals is dedicated to finding the right coverage for your needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-secondary-100 p-1">
                      <Phone className="h-5 w-5 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Exceptional Service</h3>
                      <p className="text-sm text-gray-600">
                        We're here when you need us, providing personalized service and support for all your insurance
                        needs.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button
                    className="bg-white border border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-white transition-all"
                    asChild
                  >
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl overflow-hidden shadow-xl max-w-[500px] mx-auto">
                <Image
                  src="/images/handshake.png"
                  alt="Professional handshake representing trust and partnership"
                  width={500}
                  height={400}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                    <p className="text-sm text-white/90">
                      Our team has over 20 years of experience in the insurance industry
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Insurance Providers Section */}
      <section className="w-full py-16 md:py-20 bg-primary-900 text-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white font-playfair">
                  Our Insurance Partners
                </h2>
                <p className="max-w-[900px] text-primary-100 md:text-xl/relaxed">
                  We work with Kenya's leading insurance providers to offer you the best coverage options.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mx-auto max-w-6xl">
            <LogoCarousel logos={insuranceProviders} />
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary-700 font-playfair">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Carousel */}
          <div className="mt-8">
            <Carousel visibleItems={3}>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow mx-2">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary-50 p-1">
                        <Image
                          src={testimonial.image || "/placeholder.svg?height=40&width=40"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-primary-700">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} className="mt-2" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Protected?</h2>
                <p className="text-primary-100 md:text-xl/relaxed">
                  Contact us today for a free consultation and quote. Our team is ready to help you find the perfect
                  coverage for your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-gray-100 hover:shadow-md transition-all"
                  asChild
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white hover:shadow-md transition-all"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
