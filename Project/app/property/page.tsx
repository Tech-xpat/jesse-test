"use client";
import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"
import MotionImage from "@/components/MotionImage"

export default function PropertyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <section className="w-full py-16 px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Landed Property Agency
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Find your dream property with our expert guidance. We offer a wide range of lands and properties to suit your
          needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MotionImage src={property.image || "/placeholder.svg"} alt={property.title} width={400} height={300} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-lg font-bold text-blue-600">{property.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us for Inquiries</h2>
        <ContactForm />
      </section>
    </main>
  )
}

const properties = [
  {
    title: "Spacious Land in Prime Location",
    description: "A beautiful piece of land perfect for residential or commercial development.",
    image: "/property1.jpg",
    price: "₦10,000,000",
  },
  {
    title: "Modern Apartment Complex",
    description: "Newly built apartment complex with state-of-the-art amenities.",
    image: "/property2.jpg",
    price: "₦25,000,000",
  },
  {
    title: "Commercial Property in City Center",
    description: "Prime commercial property in the heart of the city, ideal for businesses.",
    image: "/property3.jpg",
    price: "₦50,000,000",
  },
  // Add more properties as needed
]

