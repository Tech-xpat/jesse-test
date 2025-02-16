"use client"

import { useState, useEffect } from "react"
import { database } from "@/lib/firebase"
import { ref, set, increment } from "firebase/database"

export function useReferral() {
  const [referralCode, setReferralCode] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const ref = urlParams.get("ref")
    if (ref) {
      setReferralCode(ref)
      incrementReferralCount(ref)
    }
  }, [])

  const incrementReferralCount = async (code: string) => {
    const referralRef = ref(database, `referrals/${code}/count`)
    await set(referralRef, increment(1))
  }

  return { referralCode }
}

