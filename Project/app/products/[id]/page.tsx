"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { withAuth } from "@/components/withAuth"

function ProductDetail({ params }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleBuy = () => {
    router.push(`/checkout?product=${product.id}&quantity=${quantity}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/2">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">₦{product.price.toLocaleString()}</p>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
                className="border rounded px-2 py-1 w-20"
              />
            </div>
            <button
              onClick={handleBuy}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

const products = [
  {
    id: "prop1",
    name: "Luxury Villa in Lekki",
    description: "Spacious 5-bedroom villa with ocean view",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    price: 250000000,
    category: "property",
  },
  {
    id: "pig1",
    name: "Large White Pig",
    description: "High-quality breed known for rapid growth",
    image:
      "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: 50000,
    category: "piggery",
  },
  {
    id: "live1",
    name: "Merino Sheep",
    description: "Known for high-quality wool production",
    image:
      "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    price: 80000,
    category: "livestock",
  },
  {
    id: "poul1",
    name: "Broiler Chicken",
    description: "Fast-growing chicken breed for meat production",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: 2000,
    category: "poultry",
  },
  {
    id: "block1",
    name: "Concrete Blocks (Pack of 100)",
    description: "High-quality concrete blocks for construction",
    image:
      "https://images.unsplash.com/photo-1590084022666-52d1cd095d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: 50000,
    category: "blocks",
  },
]

export default withAuth(ProductDetail)

