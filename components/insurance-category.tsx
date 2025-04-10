import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/fade-in"

interface InsuranceCategoryProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  features: string[]
  index: number
  className?: string
}

export function InsuranceCategory({
  title,
  description,
  icon,
  link,
  features,
  index,
  className,
}: InsuranceCategoryProps) {
  return (
    <FadeIn direction="up" delay={index * 100}>
      <div
        className={cn(
          "relative overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl text-center transition-all duration-300 h-full flex flex-col hover:border-primary-200 hover:shadow-xl group",
          className,
        )}
      >
        <div className="p-6">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-primary-700 mb-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          <ul className="space-y-2 mb-6 text-left">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary-500 mt-2 flex-shrink-0"></span>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={link}
            className="inline-flex items-center text-primary-600 hover:text-white font-medium transition-all px-3 py-1 rounded hover:bg-primary-600 group-hover:font-semibold"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}
