"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { auth, database } from "@/lib/firebase"
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { ref, set } from "firebase/database"
import { useReferral } from "@/hooks/useReferral"

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { referralCode } = useReferral()

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      if (referralCode) {
        await saveReferral(result.user.uid, referralCode)
      }
      onClose()
    } catch (error) {
      setError("Failed to sign in with Google")
    }
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        if (referralCode) {
          await saveReferral(result.user.uid, referralCode)
        }
      }
      onClose()
    } catch (error) {
      setError(`Failed to ${isLogin ? "sign in" : "sign up"}`)
    }
  }

  const saveReferral = async (userId: string, referrerCode: string) => {
    const referralRef = ref(database, `users/${userId}/referredBy`)
    await set(referralRef, referrerCode)
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animated-border"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
            {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
          </button>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            Close
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300 flex items-center justify-center"
          >
            <i className="fab fa-google mr-2"></i> Continue with Google
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

