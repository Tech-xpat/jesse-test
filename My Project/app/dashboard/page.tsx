"use client"

import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { signOut } from "firebase/auth"
import { auth, database } from "@/lib/firebase"
import { ref, onValue } from "firebase/database"
import { withAuth } from "@/components/withAuth"
import Image from "next/image"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [referralCode, setReferralCode] = useState("")
  const [referrals, setReferrals] = useState(0)
  const [joinDate, setJoinDate] = useState("")
  const [successfulDeals, setSuccessfulDeals] = useState(0)
  const [recentTransactions, setRecentTransactions] = useState([])
  const [salesData, setSalesData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  })

  useEffect(() => {
    if (user) {
      const code = generateReferralCode(user.uid)
      setReferralCode(code)

      const userRef = ref(database, `users/${user.uid}`)
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val()
        if (userData) {
          setJoinDate(userData.joinDate || "")
          setSuccessfulDeals(userData.successfulDeals || 0)
          setRecentTransactions(userData.recentTransactions || [])
        }
      })

      const referralsRef = ref(database, `referrals/${user.uid}/count`)
      onValue(referralsRef, (snapshot) => {
        const count = snapshot.val() || 0
        setReferrals(count)
      })

      // Simulating real-time data updates
      const interval = setInterval(() => {
        setSalesData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: prevData.datasets[0].data.map(() => Math.floor(Math.random() * 20) + 1),
            },
          ],
        }))
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [user])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push("/")
    } catch (error) {
      console.error("Failed to sign out", error)
    }
  }

  const generateReferralCode = (uid: string) => {
    return uid.slice(0, 8)
  }

  const copyReferralLink = () => {
    const link = `${window.location.origin}/signup?ref=${referralCode}`
    navigator.clipboard.writeText(link)
    alert("Referral link copied to clipboard!")
  }

  if (!user) {
    return null
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <div className="flex items-center mb-8">
          <Image
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}`}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.displayName || user.email}!</h1>
            <p className="text-gray-600">Joined: {joinDate || "N/A"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DashboardCard title="Successful Deals" value={successfulDeals} icon="fa-handshake" />
          <DashboardCard title="Total Referrals" value={referrals} icon="fa-users" />
          <DashboardCard title="My Properties" value={0} icon="fa-home" />
          <DashboardCard title="My Orders" value={0} icon="fa-shopping-cart" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sales Overview</h2>
          <Bar data={salesData} options={{ responsive: true }} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {recentTransactions.length > 0 ? (
              <ul>
                {recentTransactions.map((transaction, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{transaction.type}</span> - {transaction.amount}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent transactions</p>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Referral Dashboard</h2>
          <p className="mb-2">
            Your Referral Code: <strong>{referralCode}</strong>
          </p>
          <button
            onClick={copyReferralLink}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Copy Referral Link
          </button>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => router.push("/products")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Browse Products
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      </motion.div>
    </main>
  )
}

function DashboardCard({ title, value, icon }: { title: string; value: number; icon: string }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <i className={`fas ${icon} text-4xl text-blue-600 mb-4`}></i>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}

export default withAuth(Dashboard)

