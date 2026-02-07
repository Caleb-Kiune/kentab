import type React from "react"
import "@/styles/globals.css"
import { Playfair_Display, Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TopBar } from "@/components/top-bar"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/app/scroll-to-top"
import { ChatWidget } from "@/components/chat-widget"
import type { Metadata } from "next" 

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})


export const metadata: Metadata = {
  title: {
    default: "Kentab Insurance Agency | Your Peace, Our Concern",
    template: "%s | Kentab Insurance Agency",
  },
  description: "Kentab Insurance Agency offers comprehensive motor, health, life, and business insurance solutions in Kenya. Protect your future with experts who care.",
  keywords: ["Insurance Agency Kenya", "Motor Insurance Nairobi", "Health Insurance Kenya", "Kentab Insurance"],

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lora.variable} font-serif`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}