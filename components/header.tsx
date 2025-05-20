"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Insurance",
      href: "/services",
      children: [
        { name: "Motor Insurance", href: "/services/motor" },
        { name: "Business Insurance", href: "/services/business" },
        { name: "Health Insurance", href: "/services/health" },
        { name: "Life Insurance", href: "/services/life" },
        { name: "View All Products", href: "/services" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Kentab Insurance Agency" width={50} height={50} className="rounded-full" />
            <span className="font-playfair font-bold text-xl text-primary-500">Kentab Insurance</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary-500",
                    pathname === item.href ? "text-secondary-500" : "text-gray-600",
                  )}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.name} <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute left-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-secondary-500",
                            pathname === child.href ? "text-secondary-500" : "text-gray-600",
                          )}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary-500",
                  pathname === item.href ? "text-secondary-500" : "text-gray-600",
                )}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-accent-500 hover:bg-accent-600 text-white hover:shadow-md transition-all" asChild>
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button
            variant="outline"
            className="border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-white transition-all"
          >
            Client Portal
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href} className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-gray-600">{item.name}</div>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "text-sm transition-colors hover:text-secondary-500",
                            pathname === child.href ? "text-secondary-500" : "text-gray-500",
                          )}
                          onClick={() => {
                            setIsMenuOpen(false)
                            window.scrollTo(0, 0)
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-secondary-500",
                      pathname === item.href ? "text-secondary-500" : "text-gray-600",
                    )}
                    onClick={() => {
                      setIsMenuOpen(false)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary-500" />
                <span className="text-sm font-medium">0721315506</span>
              </div>
              <Button className="bg-accent-500 hover:bg-accent-600 text-white w-full hover:shadow-md transition-all" asChild>
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary-500 text-primary-600 hover:bg-primary-600 hover:text-white transition-all w-full"
              >
                Client Portal
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
