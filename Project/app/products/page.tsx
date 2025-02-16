"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { withAuth } from "@/components/withAuth"

function Products() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products and Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </motion.div>
    </main>
  )
}

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </motion.div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">₦{product.price.toLocaleString()}</span>
          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
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

export default withAuth(Products)

