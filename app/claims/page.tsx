import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, FileText, Clock, AlertCircle } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { BackgroundSlideshow } from "@/components/background-slideshow"

export default function ClaimsPage() {
  const backgroundImages = [
    "/images/healthcare.png",
    "/images/autumn-umbrella.png",
    "/images/travel-family.png",
    "/images/home-family.png",
    "/images/red-umbrella.png",
  ]

  const faqs = [
    {
      question: "How do I file a claim?",
      answer:
        "You can file a claim by calling our claims hotline at 1-800-555-5678, through our online portal, or by contacting your insurance agent directly.",
    },
    {
      question: "How long does it take to process a claim?",
      answer:
        "Most claims are processed within 7-10 business days, depending on the complexity of the claim and the information provided.",
    },
    {
      question: "What information do I need to provide when filing a claim?",
      answer:
        "You'll need your policy number, date of incident, description of what happened, photos or documentation of damages (if applicable), and any police reports or other relevant documents.",
    },
    {
      question: "Will filing a claim affect my premium?",
      answer:
        "Not all claims will affect your premium. Factors such as the type of claim, your claims history, and policy terms will determine if there's any impact on your future premiums.",
    },
    {
      question: "What if I disagree with the claim decision?",
      answer:
        "If you disagree with a claim decision, you can request a review by contacting your claims adjuster. You may also file a formal appeal through our appeals department.",
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
                  Claims Center
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to help you through the claims process with ease and efficiency. Learn how to file a claim
                  and track its progress.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  File a Claim
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary-600 border-white hover:bg-primary-600 hover:text-white transition-all"
                >
                  Track a Claim
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </BackgroundSlideshow>

      {/* Claims Process */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Claims Process</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've simplified the claims process to get you back on track as quickly as possible.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-4">
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Report</h3>
                <p className="text-sm text-gray-500">Report your claim online, by phone, or through your agent.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Assess</h3>
                <p className="text-sm text-gray-500">
                  A claims adjuster will assess the damages and review your coverage.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Approve</h3>
                <p className="text-sm text-gray-500">Your claim is approved and payment amount is determined.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900 font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold">Resolve</h3>
                <p className="text-sm text-gray-500">Payment is issued and your claim is resolved.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Claims Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <FadeIn direction="up" delay={100}>
              <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                    File by Phone
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Speak directly with a claims representative</p>
                  <div className="flex-grow">
                    <p className="text-gray-500">
                      Call our 24/7 claims hotline to report your claim and get immediate assistance from our team of
                      experts.
                    </p>
                    <div className="mt-4 font-medium">1-800-555-5678</div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">Call Now</Button>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                    File Online
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Submit your claim through our secure portal</p>
                  <div className="flex-grow">
                    <p className="text-gray-500">
                      Our online claims portal allows you to submit your claim, upload supporting documents, and track
                      the status of your claim 24/7.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">File Online</Button>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
                    Track Your Claim
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Check the status of your existing claim</p>
                  <div className="flex-grow">
                    <p className="text-gray-500">
                      Already filed a claim? Check the status, view updates, and communicate with your claims adjuster
                      through our tracking system.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">Track Claim</Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Emergency Claims */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-900">
                  Emergency Claims
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Immediate Assistance?</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  For emergency situations requiring immediate attention, our emergency claims team is available 24/7 to
                  provide assistance and guidance.
                </p>
                <div className="flex items-center justify-center gap-4 rounded-lg border p-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                  <div>
                    <h3 className="font-medium">Emergency Claims Hotline</h3>
                    <p className="text-xl font-bold">1-800-555-9999</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about the claims process.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="mx-auto max-w-3xl py-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-600 text-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Help With Your Claim?</h2>
                <p className="mx-auto max-w-[700px] text-primary-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our claims specialists are ready to assist you through every step of the process.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-100">
                  Contact Claims Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:text-white hover:shadow-md transition-all"
                >
                  View Resources
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
