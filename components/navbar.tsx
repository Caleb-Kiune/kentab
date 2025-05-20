"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <Link
            href="/services"
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/claims"
            className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
          >
            Claims
          </Link>
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
            <Link
              href="/services"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/claims"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Claims
            </Link>
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