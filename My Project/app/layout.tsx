import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import AuthProvider from "@/components/AuthProvider"
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "JESSES & SONS BUSINESS WORLD",
  description:
    "Specializing in landed property agency, piggery, livestock herding, poultry farming, and block industry.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} text-gray-900 bg-gray-50`}>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'