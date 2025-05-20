"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const phoneNumber = "254721315506" // Your WhatsApp number with country code
  const defaultMessage = "Hello! I'm interested in learning more about your insurance services."

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-colors"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
