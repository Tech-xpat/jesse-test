"use client"

import type React from "react"

import { useAuth } from "@/hooks/useAuth"

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuth() // This will initialize the auth listener
  return <>{children}</>
}

