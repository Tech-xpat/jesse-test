"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { withAuth } from "@/components/withAuth"

function Checkout() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const productId = searchParams.get("product")
    const qty = searchParams.get("quantity")
    if (productId) {
      const foundProduct = products.find((p) => p.id === productId)
      if (foundProduct) {
        setProduct(foundProduct)
        setQuantity(Number.parseInt(qty) || 1)
      }
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For now, we'll just show an alert
    alert("Thank you for your purchase!")
    router.push("/dashboard")
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">Quantity: {quantity}</p>
          <p className="text-xl font-bold text-blue-600 mt-2">Total: ₦{(product.price * quantity).toLocaleString()}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Delivery Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="payment"
              name="payment"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option value="">Select a payment method</option>
              <option value="card">Credit Card</option>
              <option value="transfer">Bank Transfer</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Complete Purchase
          </button>
        </form>
      </motion.div>
    </main>
  )
}

const products = [
  // ... (same product list as before)
]

export default withAuth(Checkout)

