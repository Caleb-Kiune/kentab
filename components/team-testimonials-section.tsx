"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "/testimonials/sarah.jpg",
    content: "Kentab Insurance has been an invaluable partner for my business. Their comprehensive coverage and exceptional service give me peace of mind.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    image: "/testimonials/michael.jpg",
    content: "The team at Kentab made the insurance process seamless. Their attention to detail and personalized approach sets them apart.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Family Provider",
    image: "/testimonials/emily.jpg",
    content: "I appreciate how Kentab takes the time to understand our family's needs. Their health insurance solutions have been a lifesaver.",
    rating: 5,
  },
]

const team = [
  {
    name: "David Thompson",
    role: "Insurance Advisor",
    image: "/team/david.jpg",
    bio: "With over 15 years of experience, David specializes in creating tailored insurance solutions for businesses.",
  },
  {
    name: "Lisa Anderson",
    role: "Claims Specialist",
    image: "/team/lisa.jpg",
    bio: "Lisa ensures smooth claims processing and provides exceptional support during challenging times.",
  },
  {
    name: "James Wilson",
    role: "Risk Analyst",
    image: "/team/james.jpg",
    bio: "James brings deep expertise in risk assessment and helps clients make informed insurance decisions.",
  },
]

export function TeamTestimonialsSection() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Meet Our Team & Client Stories
          </h2>
          <p className="text-lg text-primary-600">
            Get to know our dedicated professionals and hear from our satisfied clients.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">
            Our Expert Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-primary-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent-600 mb-3">{member.role}</p>
                  <p className="text-primary-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary-900 mb-8 text-center">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-400 fill-accent-400"
                    />
                  ))}
                </div>
                <p className="text-primary-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 