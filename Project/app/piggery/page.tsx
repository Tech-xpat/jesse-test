"use client";
import Image from "next/image"
import { motion } from "framer-motion"
import BookingForm from "@/components/BookingForm"

export default function PiggeryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <section className="w-full py-16 px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Piggery
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our high-quality pig breeds for sale. We offer home delivery options for your convenience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pigBreeds.map((breed, index) => (
            <motion.div
              key={breed.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={breed.image || "/placeholder.svg"}
                alt={breed.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
                <p className="text-gray-600 mb-4">{breed.description}</p>
                <p className="text-lg font-bold text-blue-600">{breed.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Pigs</h2>
        <BookingForm />
      </section>
    </main>
  )
}

const pigBreeds = [
  {
    name: "Large White",
    description: "Known for their rapid growth and lean meat production.",
    image: "/large-white.jpg",
    price: "₦50,000 per pig",
  },
  {
    name: "Duroc",
    description: "Excellent for pork production with high-quality meat.",
    image: "/duroc.jpg",
    price: "₦55,000 per pig",
  },
  {
    name: "Landrace",
    description: "Long-bodied pigs with high fertility rates.",
    image: "/landrace.jpg",
    price: "₦52,000 per pig",
  },
  // Add more pig breeds as needed
]

