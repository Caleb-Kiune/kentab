"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with your insurance needs today?", isUser: false },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message
    setMessages([...messages, { text: message, isUser: true }])
    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message. One of our insurance specialists will get back to you shortly. Is there anything else you'd like to know?",
          isUser: false,
        },
      ])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 mb-4 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Chat with Kentab Insurance</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 max-h-80 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "mb-3 max-w-[80%] rounded-lg p-3",
                  msg.isUser ? "bg-primary-100 text-primary-900 ml-auto" : "bg-gray-100 text-gray-800",
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="border-t p-3 flex items-center">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
              rows={1}
            />
            <Button onClick={handleSendMessage} size="icon" className="ml-2 bg-primary-500 hover:bg-primary-600">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <Button
        onClick={toggleChat}
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg",
          isOpen ? "bg-primary-700 hover:bg-primary-800" : "bg-primary-500 hover:bg-primary-600",
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
