import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, HeartPulse, Users, Phone, Briefcase } from "lucide-react"
import { Carousel } from "@/components/carousel"
import { StarRating } from "@/components/star-rating"
import { LogoCarousel } from "@/components/logo-carousel"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import { InsuranceCategory } from "@/components/insurance-category"
import { ChatWidget } from "@/components/chat-widget"

export default function HomePage() {
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

  // Testimonials data - reduced to 5
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/placeholder.svg?height=40&width=40",
      content:
        "The team at Kentab was incredibly helpful in finding the right home insurance policy for my family. They took the time to understand our needs and found us great coverage at an affordable price.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Business Owner",
      image: "/placeholder.svg?height=40&width=40",
      content:
        "As a small business owner, I needed comprehensive coverage that wouldn't break the bank. Kentab provided excellent options and made the process simple and straightforward.",
      rating: 4.5,
    },
    {
      name: "Jane Muthoni",
      role: "Car Owner",
      image: "/placeholder.svg?height=40&width=40",
      content:
        "I've been with Kentab Insurance for over 3 years now for my auto insurance. Their claims process is efficient and their customer service is outstanding. Highly recommend!",
      rating: 5,
    },
    {
      name: "Grace Wanjiku",
      role: "Healthcare Professional",
      image: "/placeholder.svg?height=40&width=40",
      content:
        "I was looking for comprehensive health insurance for my family, and Kentab Insurance exceeded my expectations. They explained all the options clearly and helped me choose the best plan for our needs.",
      rating: 5,
    },
    {
      name: "Thomas Ochieng",
      role: "Small Business Owner",
      image: "/placeholder.svg?height=40&width=40",
      content:
        "When I started my business, I had no idea what kind of insurance I needed. Kentab Insurance guided me through the entire process and set up a comprehensive business insurance package that gives me peace of mind.",
      rating: 4.5,
    },
  ]

  // Insurance categories
  const insuranceCategories = [
    {
      title: "Personal Insurance",
      description: "Protect yourself and your family with our personal insurance solutions",
      icon: <Users className="h-7 w-7" />,
      link: "/services/personal",
      features: ["Auto insurance", "Home insurance", "Personal accident", "Travel insurance"],
    },
    {
      title: "Business Insurance",
      description: "Comprehensive coverage options for your business needs",
      icon: <Briefcase className="h-7 w-7" />,
      link: "/services/business",
      features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
    },
    {
      title: "Health Insurance",
      description: "Quality healthcare coverage for you and your family",
      icon: <HeartPulse className="h-7 w-7" />,
      link: "/services/health",
      features: ["Medical coverage", "Prescription benefits", "Preventive care", "Specialist visits"],
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your loved ones",
      icon: <Shield className="h-7 w-7" />,
      link: "/services/life",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dynamic Content */}
      <BackgroundSlideshow
        images={heroImages}
        contents={heroContents}
        interval={10000}
        transitionDuration={2000}
        overlayOpacity={0.7}
      />

      {/* Insurance Categories Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
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
              <InsuranceCategory
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                link={category.link}
                features={category.features}
                index={index}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
              <Link href="/services">View All Insurance Products</Link>
            </Button>
          </div>
        </div>
      </section>

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
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/handshake.png"
                  alt="Professional handshake representing trust and partnership"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
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

          <div className="mx-auto max-w-3xl py-12">
            <Carousel autoScroll={true} autoScrollInterval={5000} visibleItems={1} className="py-4" showControls={true}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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
                </div>
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
