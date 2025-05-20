"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Footer() {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-primary-900 text-gray-200">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Kentab Insurance Agency"
                width={60}
                height={60}
                className="rounded-full bg-white"
              />
              <div>
                <span className="font-playfair font-bold text-xl text-white">Kentab Insurance</span>
                <p className="text-secondary-400 text-sm">Your Peace, Our Concern.</p>
              </div>
            </div>
            <p className="text-primary-200 text-sm">
              Providing comprehensive insurance solutions for individuals and businesses in Kenya.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4 font-playfair">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/motor"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/health"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/life"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4 font-playfair">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary-400 mt-0.5" />
                <span className="text-primary-200 text-sm">
                  Blessed House Thika Road
                  <br />
                  Suite 22, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary-400" />
                <span className="text-primary-200 text-sm">0721315506</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary-400" />
                <span className="text-primary-200 text-sm">kentabinsurance@gmail.com</span>
              </li>
              <li className="mt-4">
                <Button
                  variant="outline"
                  className="border-secondary-500 text-secondary-400 hover:bg-secondary-500/10 hover:text-secondary-300"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-primary-300 text-sm">
          <p>&copy; {year} Kentab Insurance Agency. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-secondary-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}



