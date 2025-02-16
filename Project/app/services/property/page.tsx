"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { withAuth } from "@/components/withAuth"

function PropertyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Landed Property Agency</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Find your dream property with our expert guidance. We offer a wide range of lands and properties to suit your
          needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={property.image || "/placeholder.svg?height=300&width=400"}
                    alt={property.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=400"
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/products/${property.id}`}
                    className="bg-white text-black px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-lg font-bold text-blue-600 mb-4">₦{property.price.toLocaleString()}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{property.location}</span>
                  <span className="text-sm text-gray-500">{property.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

const properties = [
  {
    id: "prop1",
    title: "Luxury Villa in Lekki",
    description: "Spacious 5-bedroom villa with ocean view",
    image: "/placeholder.svg?height=300&width=400", // Replace with actual image URL when available
    price: 250000000,
    location: "Lekki Phase 1",
    type: "Residential",
  },
  {
    id: "prop2",
    title: "Commercial Space in Victoria Island",
    description: "Prime location for your business",
    image: "/placeholder.svg?height=300&width=400", // Replace with actual image URL when available
    price: 500000000,
    location: "Victoria Island",
    type: "Commercial",
  },
  {
    id: "prop3",
    title: "Residential Plot in Abuja",
    description: "Build your dream home in a serene environment",
    image: "/placeholder.svg?height=300&width=400", // Replace with actual image URL when available
    price: 75000000,
    location: "Abuja",
    type: "Land",
  },
]

export default withAuth(PropertyPage)

