import Link from "next/link"
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-primary-900 text-white py-2 hidden md:block">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-sm">
            <Phone className="h-3.5 w-3.5 mr-2 text-secondary-400" />
            <span>0721315506</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail className="h-3.5 w-3.5 mr-2 text-secondary-400" />
            <span>kentabinsurance@gmail.com</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-3.5 w-3.5 mr-2 text-secondary-400" />
            <span>Mon-Fri: 8:00AM - 5:00PM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-secondary-400 transition-colors">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
