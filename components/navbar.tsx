"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false)

  const insuranceLinks = [
    { href: "/services/business", label: "Business Insurance" },
    { href: "/services/health", label: "Health Insurance" },
    { href: "/services/life", label: "Life Insurance" },
    { href: "/services", label: "View All Products" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Kentab Insurance"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold text-primary-700">Kentab Insurance</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setIsInsuranceOpen(true)}
              onMouseLeave={() => setIsInsuranceOpen(false)}
              className="flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Insurance
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isInsuranceOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setIsInsuranceOpen(true)}
                onMouseLeave={() => setIsInsuranceOpen(false)}
              >
                <div className="py-1">
                  {insuranceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            Contact
          </Link>
          <Button className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container space-y-4 py-4">
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-600">Insurance</div>
              <div className="pl-4 space-y-2">
                {insuranceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white" asChild>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
} 