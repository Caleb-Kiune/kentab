"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Award, Users, Heart, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { TimelineSlider } from "@/components/timeline-slider"
import { useVideoPlayer } from "@/hooks/use-video-player"
import { cn } from "@/lib/utils"
import { BackgroundSlideshow } from "@/components/background-slideshow"
import Link from "next/link"

// Timeline data
const timelineData = [
  {
    year: "2014",
    icon: <Shield className="w-8 h-8" />,
    milestone: "Founded with a vision to provide accessible insurance solutions to Kenyans."
  },
  {
    year: "2016",
    icon: <Users className="w-8 h-8" />,
    milestone: "Expanded operations to major cities across Kenya, serving over 500 clients."
  },
  {
    year: "2018",
    icon: <Award className="w-8 h-8" />,
    milestone: "Recognized as the fastest-growing insurance agency in East Africa."
  },
  {
    year: "2020",
    icon: <Heart className="w-8 h-8" />,
    milestone: "Launched innovative digital insurance solutions during the pandemic."
  },
  {
    year: "2023",
    icon: <Star className="w-8 h-8" />,
    milestone: "Achieved ISO certification and expanded our service portfolio."
  }
]

// Team members data
const teamMembers = [
  {
    name: "Tabitha Kiune",
    title: "CEO & Founder",
    image: "/team/gaurav-kumar-briYAkuuT-E-unsplash.webp"
  },
  {
    name: "Caleb Kiune",
    title: "Head of Operations",
    image: "/team/kristine-wook-E1_RW3HIbUw-unsplash.webp"
  },
  {
    name: "Lilian Mwaniki",
    title: "Claims Director",
    image: "/team/ta-focando-LOuffSFpWQI-unsplash.webp"
  },
  {
    name: "James Kibathi",
    title: "Digital Marketing",
    image: "/team/benjamin-child-GWe0dlVD9e0-unsplash (1).jpg"
  }
]

// Values data
const valuesData = [
  {
    title: "Integrity",
    description: "Built trust with 98% client retention rate through transparent practices.",
    icon: <Shield className="w-12 h-12" />,
    color: "bg-accent-orange"
  },
  {
    title: "Innovation",
    description: "Pioneered digital claims processing, reducing settlement time by 60%.",
    icon: <Star className="w-12 h-12" />,
    color: "bg-accent-green"
  },
  {
    title: "Excellence",
    description: "Maintained 99.9% accuracy in policy documentation and claims processing.",
    icon: <Award className="w-12 h-12" />,
    color: "bg-primary-500"
  }
]

// Partners data
const partners = [
  { name: "Britam Insurance", logo: "/logos/britam-new.png" },
  { name: "Jubilee Insurance", logo: "/logos/jubilee-new.png" },
  { name: "CIC Insurance", logo: "/logos/cic-group.webp" },
  { name: "APA Insurance", logo: "/logos/apa-new.png" },
  { name: "Sanlam Insurance", logo: "/logos/sanlam.png" },
  { name: "ICEA Lion", logo: "/logos/icea-new.png" },
  { name: "AAR Insurance", logo: "/logos/aar-new.png" },
  { name: "Heritage Insurance", logo: "/logos/heritage-new.png" },
  { name: "Kenyan Alliance", logo: "/logos/kenyan-alliance.png" },
  { name: "Madison Insurance", logo: "/logos/madison-group.png" },
  { name: "Pioneer Insurance", logo: "/logos/pioneer.png" },
  { name: "Geminia Insurance", logo: "/logos/geminia.png" }
]

export default function AboutPage() {
  const { videoRef, isPlaying, togglePlay } = useVideoPlayer()

  const backgroundImages = [
    "/images/gaurav-kumar-briYAkuuT-E-unsplash.webp",
    "/images/kristine-wook-E1_RW3HIbUw-unsplash.webp",
    "/images/ta-focando-LOuffSFpWQI-unsplash.webp",
    "/images/benjamin-child-GWe0dlVD9e0-unsplash (1).jpg",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <BackgroundSlideshow
          images={backgroundImages}
          duration={5000}
          className="absolute inset-0 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-playfair font-bold mb-6"
          >
            Protecting What Matters Most
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Your trusted partner in insurance solutions, serving Kenya with integrity and excellence since 2010.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-accent-orange hover:bg-accent-orange/90" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => {
                const teamSection = document.getElementById('team-section');
                teamSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meet Our Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Journey</h2>
            <TimelineSlider>
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-50 rounded-full text-primary-500">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-bold text-primary-700">{item.year}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.milestone}</p>
                </motion.div>
              ))}
            </TimelineSlider>
          </FadeIn>
        </div>
      </section>

      {/* CEO Video & Team Section */}
      <section id="team-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/7821854-hd-1920-1080-30fps_LTBW3Lm4.mp4" type="video/mp4" />
                </video>
                <div 
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  {!isPlaying && (
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-500" />
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square rounded-full overflow-hidden group"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4 text-white">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm">{member.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Values in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuesData.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "p-8 rounded-lg text-white",
                    value.color
                  )}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Partners & Awards</h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee gap-12">
                {partners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className="flex-shrink-0 w-32 h-32 relative transition-all"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate partners for seamless loop */}
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-duplicate`}
                    className="flex-shrink-0 w-32 h-32 relative transition-all"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-accent-orange rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to talk?</h3>
                <p className="mb-6">Get a personalized quote for your insurance needs.</p>
                <Button size="lg" variant="outline" className="border-white text-accent-orange bg-white hover:bg-accent-orange hover:text-white" asChild>
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-accent-green rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                <p className="mb-6">Be part of Kenya's leading insurance agency.</p>
                <Button size="lg" variant="outline" className="border-white text-accent-green bg-white hover:bg-accent-green hover:text-white">
                  View Careers
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
