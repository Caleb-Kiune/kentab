"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const insuranceLinks = [
    { href: "/services/business", label: "Business Insurance", icon: "🏢" },
    { href: "/services/health", label: "Health Insurance", icon: "🏥" },
    { href: "/services/life", label: "Life Insurance", icon: "🛡️" },
    { href: "/services", label: "View All Products", icon: "📋" }
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur h-16 shadow-md" 
          : "bg-transparent h-20"
      }`}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Kentab Insurance"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold text-[#005662]">Kentab Insurance</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className="text-sm font-medium text-[#333] hover:text-[#005662] transition-colors"
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setIsInsuranceOpen(true)}
              onMouseLeave={() => setIsInsuranceOpen(false)}
              className="flex items-center text-sm font-medium text-[#333] hover:text-[#005662] transition-colors"
              aria-expanded={isInsuranceOpen}
              aria-haspopup="true"
            >
              Insurance
              <ChevronDown 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isInsuranceOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <AnimatePresence>
              {isInsuranceOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[600px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseEnter={() => setIsInsuranceOpen(true)}
                  onMouseLeave={() => setIsInsuranceOpen(false)}
                  role="menu"
                >
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {insuranceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col items-center p-4 text-sm text-[#333] hover:bg-gray-50 rounded-md transition-colors"
                        role="menuitem"
                      >
                        <span className="text-2xl mb-2">{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#333] hover:text-[#005662] transition-colors"
          >
            Contact
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[#333] hover:text-[#005662] transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="text-[#333] hover:text-[#005662] transition-colors"
              aria-label="Select language"
            >
              <Globe className="h-5 w-5" />
            </button>
            <Button className="bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="container space-y-4 py-4">
              <Link
                href="/about"
                className="block text-sm font-medium text-[#333] hover:text-[#005662] transition-colors p-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="space-y-2 p-4">
                <div className="text-sm font-medium text-[#333]">Insurance</div>
                <div className="pl-4 space-y-2">
                  {insuranceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-2 text-sm text-[#333] hover:text-[#005662] transition-colors p-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-sm font-medium text-[#333] hover:text-[#005662] transition-colors p-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="p-4">
                <Button className="w-full bg-[#FF6F61] hover:bg-[#FF6F61]/90 text-white" asChild>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4"
          >
            <div className="container">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#005662]"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 