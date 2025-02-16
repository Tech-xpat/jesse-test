"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { Globe, Building, Truck, ShieldCheck, Award } from "lucide-react"

export default function Home() {
  const { user } = useAuth()
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full h-screen relative">
        <motion.div style={{ opacity }}>
          <Image
            src="https://i.ibb.co/qY7jd1GF/Rent-Pictures-Freepik.jpg"
            alt="JESSE&SONS Worldwide"
            layout="fill"
            objectFit="cover"
            className="parallax"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=1080&width=1920"
            }}
          />
        </motion.div>
        <div className="absolute inset-0 hero-overlay flex flex-col items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center justify-center mb-6"
            >
              <Globe className="w-16 h-16 text-blue-400" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">JESSE&SONS Worldwide</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Your Global Partner in Property, Livestock, and Construction
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={user ? "/products" : "/contact"}
                className="animated-border-button bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block"
              >
                {user ? "Enter our Market" : "Get in Touch"}
              </Link>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-20 w-full">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <MarketingIcon icon={Building} text="Global Properties" />
                <MarketingIcon icon={Truck} text="Fast Delivery" />
                <MarketingIcon icon={ShieldCheck} text="Trusted Service" />
                <MarketingIcon icon={Award} text="Quality Assured" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

function MarketingIcon({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="bg-white bg-opacity-20 p-4 rounded-full mb-2">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <span className="text-sm md:text-base text-center">{text}</span>
    </motion.div>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-48">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">{service.description}</p>
        <Link href={service.link} className="text-blue-600 hover:underline text-sm sm:text-base flex items-center">
          Learn More <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </motion.div>
  )
}

const services = [
  {
    title: "Landed Property",
    description: "Find your dream property with our expert guidance.",
    image: "https://i.ibb.co/twkwxYN5/Seller-finance-option.jpg",
    link: "/services/property",
  },
  {
    title: "Piggery",
    description: "High-quality pig breeds for sale with home delivery options.",
    image: "https://i.ibb.co/YBf5VZFk/10-Things-that-REALLY-Surprised-Me-About-A-Commercial-Pig-Farm-I-Visited.jpg",
    link: "/services/piggery",
  },
  {
    title: "Livestock Herding",
    description: "Premium sheep, rams, and goats available for purchase.",
    image: "https://i.ibb.co/8LvxMxdn/Ram-stock-photo-Image-of-trip-fleece-country-curly-15673150.jpg",
    link: "/services/livestock",
  },
  {
    title: "Poultry Farming",
    description: "Wide variety of agric and native chickens for your needs.",
    image: "https://i.ibb.co/1YyXBT4M/Poultry-Exhibition-for-Poultry-Farming-Equipment-Manufacturers-and-Livestock.jpg",
    link: "/services/poultry",
  },
  {
    title: "Block Industry",
    description: "Quality blocks for all your construction projects.",
    image: "https://i.ibb.co/Mkwd7xQC/How-Much-Do-Cinder-Blocks-Weigh-Average-Weight-By-Size.jpg",
    link: "/services/blocks",
  },
]

