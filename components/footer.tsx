import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-200">
      <div className="container px-4 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-primary-800">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-playfair">Stay Updated</h3>
              <p className="text-primary-200">
                Subscribe to our newsletter for the latest insurance news, tips, and special offers.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-primary-600 hover:bg-primary-700 text-white" suppressHydrationWarning>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

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
                  href="/services/personal"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Personal Insurance
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
                  href="/claims"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Claims
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-200 hover:text-secondary-400 text-sm flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                  Contact Us
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
          <p>&copy; {new Date().getFullYear()} Kentab Insurance Agency. All rights reserved.</p>
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
