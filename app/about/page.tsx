import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award } from "lucide-react"
import { CounterAnimation } from "@/components/counter-animation"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export default function AboutPage() {
  const backgroundImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
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
                  About Kentab Insurance
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                  Your trusted partner in protection. Learn more about our mission, values, and the team behind our success.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                  <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8">
                    Our Services
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

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f4e6] px-3 py-1 text-sm text-kentab-blue">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-kentab-blue font-playfair">
                  A Legacy of Protection
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Kentab Insurance Agency was founded with a simple mission: to provide reliable, affordable insurance
                  solutions with exceptional customer service. What started as a small family business has grown into a
                  trusted insurance provider serving thousands of clients across Kenya.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Through economic ups and downs, natural disasters, and changing markets, we've remained steadfast in
                  our commitment to our clients. Our growth is built on the foundation of trust we've established with
                  each person and business we serve.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <div className="relative rounded-xl overflow-hidden shadow-xl max-w-[500px]">
                  <Image
                    src="/images/chess-strategy.png"
                    alt="Chess pieces representing strategic planning and leadership"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-kentab-blue font-playfair">
                  Our Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These principles guide everything we do and define who we are as an organization.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f4e6]">
                  <CheckCircle className="h-6 w-6 text-kentab-green" />
                </div>
                <h3 className="text-xl font-bold text-kentab-blue font-playfair">Integrity</h3>
                <p className="text-sm text-gray-500">
                  We operate with honesty and transparency in all our dealings, always putting our clients' interests
                  first.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f4e6]">
                  <Users className="h-6 w-6 text-kentab-green" />
                </div>
                <h3 className="text-xl font-bold text-kentab-blue font-playfair">Community</h3>
                <p className="text-sm text-gray-500">
                  We're committed to making a positive impact in the communities we serve through service and support.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f4e6]">
                  <Award className="h-6 w-6 text-kentab-green" />
                </div>
                <h3 className="text-xl font-bold text-kentab-blue font-playfair">Excellence</h3>
                <p className="text-sm text-gray-500">
                  We strive for excellence in everything we do, from customer service to the insurance products we
                  offer.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-kentab-blue font-playfair">
                  Meet Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our experienced professionals are dedicated to finding the right insurance solutions for your needs.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Tabitha Kiune"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-kentab-blue font-playfair">Tabitha Kiune</h3>
                  <p className="text-sm text-kentab-green">Director</p>
                  <p className="text-sm text-gray-500">
                    With extensive experience in the insurance industry, Tabitha leads our team with vision and
                    dedication.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/placeholder.svg?height=160&width=160" alt="Caleb Kiune" fill className="object-cover" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-kentab-blue font-playfair">Caleb Kiune</h3>
                  <p className="text-sm text-kentab-green">Operations Manager</p>
                  <p className="text-sm text-gray-500">
                    Caleb ensures our day-to-day operations run smoothly, focusing on efficiency and customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=160&width=160"
                    alt="Lilian Muriuki"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-kentab-blue font-playfair">Lilian Muriuki</h3>
                  <p className="text-sm text-kentab-green">Claims Manager</p>
                  <p className="text-sm text-gray-500">
                    Lilian specializes in claims processing, ensuring our clients receive prompt and fair settlements.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-kentab-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-4xl font-bold font-playfair">
                  <CounterAnimation end={5} suffix="+" />
                </h3>
                <p className="text-blue-100">Years in Business</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-4xl font-bold font-playfair">
                  <CounterAnimation end={1000} suffix="+" />
                </h3>
                <p className="text-blue-100">Satisfied Clients</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-4xl font-bold font-playfair">
                  <CounterAnimation end={10} suffix="+" />
                </h3>
                <p className="text-blue-100">Insurance Partners</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <h3 className="text-4xl font-bold font-playfair">
                  <CounterAnimation end={95} suffix="%" />
                </h3>
                <p className="text-blue-100">Client Retention Rate</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-kentab-blue font-playfair">
                  Ready to Work With Us?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team today to learn more about our insurance solutions and how we can help protect what
                  matters most to you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-kentab-blue hover:bg-kentab-blue/90 text-white hover:shadow-md transition-all"
                >
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-md transition-all"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
