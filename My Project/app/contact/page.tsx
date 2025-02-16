import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="space-y-6">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl mr-4" />
            <p>Km 21 Ughelli - Warri Expressway</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-2xl mr-4" />
            <p>+234 XXX XXX XXXX</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl mr-4" />
            <p>info@jessesandsons.com</p>
          </div>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </main>
  )
}

