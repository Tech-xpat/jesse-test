import Image from "next/image"
import { motion } from "framer-motion"
import BookingForm from "@/components/BookingForm"

export default function LivestockPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <section className="w-full py-16 px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Livestock Herding
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Browse our selection of premium sheep, rams, and goats. We offer delivery services for your convenience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {livestock.map((animal, index) => (
            <motion.div
              key={animal.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={animal.image || "/placeholder.svg"}
                alt={animal.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                <p className="text-gray-600 mb-4">{animal.description}</p>
                <p className="text-lg font-bold text-blue-600">{animal.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Livestock</h2>
        <BookingForm />
      </section>
    </main>
  )
}

const livestock = [
  {
    name: "Merino Sheep",
    description: "Known for their high-quality wool and meat production.",
    image: "/merino-sheep.jpg",
    price: "₦80,000 per sheep",
  },
  {
    name: "Boer Goat",
    description: "Excellent meat producers with rapid growth rates.",
    image: "/boer-goat.jpg",
    price: "₦70,000 per goat",
  },
  {
    name: "Balami Ram",
    description: "Large-bodied rams perfect for Eid celebrations.",
    image: "/balami-ram.jpg",
    price: "₦120,000 per ram",
  },
  // Add more livestock as needed
]

