"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Menu, X } from "lucide-react"
import AuthModal from "./AuthModal"
import { useAuth } from "@/hooks/useAuth"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Failed to sign out", error)
    }
  }

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-blue-600 animate-spin-slow" />
          <span className="text-xl font-bold text-gray-800 hidden sm:inline">JESSE&SONS</span>
          <span className="text-xl font-bold text-gray-800 sm:hidden">J&S</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition duration-300 text-sm"
                >
                  Dashboard
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="text-gray-600 hover:text-gray-900 transition duration-300"
                title="Sign Out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition duration-300 text-sm"
            >
              Login
            </motion.button>
          )}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <NavLink href="/services" onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
            <NavLink href="/products" onClick={() => setIsOpen(false)}>
              Products
            </NavLink>
            <NavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </motion.nav>
      )}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-gray-900 transition duration-300 flex items-center py-2 px-4"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

