import type React from "react"
import "@/styles/globals.css"
import { Playfair_Display, Lora } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { TopBar } from "@/components/top-bar"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/app/scroll-to-top"
import { ChatWidget } from "@/components/chat-widget"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata = {
  title: "Kentab Insurance Agency | Your Peace, Our Concern",
  description: "Providing comprehensive insurance solutions for individuals and businesses in Kenya.",
    generator: 'v0.dev'
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