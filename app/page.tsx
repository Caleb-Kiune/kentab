"use client"

import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { PartnersSection } from "@/components/partners-section"
import { StatsSection } from "@/components/stats-section"
import { InsuranceCategoriesSection } from "@/components/insurance-categories-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <InsuranceCategoriesSection />
      <StatsSection />
      <PartnersSection />
    </main>
  )
}
