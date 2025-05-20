import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Car, HeartPulse, Users, Briefcase, Umbrella, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export default function ServicesPage() {
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
    },
    {
      title: "Health Insurance",
      description: "Health plans that provide coverage for medical expenses, prescriptions, and preventive care.",
      icon: <HeartPulse className="h-6 w-6 text-primary-500" />,
      link: "/services/health",
      features: ["Medical coverage", "Prescription drug benefits", "Preventive care", "Specialist visits"],
    },
    {
      title: "Life Insurance",
      description: "Financial protection for your loved ones in the event of your passing.",
      icon: <Users className="h-6 w-6 text-primary-500" />,
      link: "/services/life",
      features: ["Term life insurance", "Whole life insurance", "Universal life insurance", "Final expense coverage"],
    },
    {
      title: "Business Insurance",
      description: "Comprehensive coverage options to protect your business assets, employees, and operations.",
      icon: <Briefcase className="h-6 w-6 text-primary-500" />,
      link: "/services/business",
      features: ["Property insurance", "Liability coverage", "Workers' compensation", "Business interruption"],
    },
    {
      title: "Umbrella Insurance",
      description: "Additional liability coverage that goes beyond the limits of your existing policies.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/umbrella",
      features: ["Extended liability protection", "Legal defense coverage", "Worldwide coverage", "Asset protection"],
    },
    {
      title: "Travel Insurance",
      description: "Protection for unexpected events during your travels, both domestic and international.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/travel",
      features: ["Trip cancellation", "Medical emergencies", "Lost luggage", "Travel assistance"],
    },
    {
      title: "Pet Insurance",
      description: "Coverage for veterinary expenses to keep your furry family members healthy.",
      icon: <Umbrella className="h-6 w-6 text-primary-500" />,
      link: "/services/pet",
      features: ["Accident coverage", "Illness coverage", "Wellness plans", "Prescription medications"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <BackgroundSlideshow
        images={backgroundImages}
        interval={6000}
        overlayOpacity={0.7}
        className="py-20 md:py-32 lg:py-40"
      >
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Our Insurance Services
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive insurance solutions tailored to your unique needs. Explore our range of products
                  designed to protect what matters most.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </BackgroundSlideshow>

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
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
