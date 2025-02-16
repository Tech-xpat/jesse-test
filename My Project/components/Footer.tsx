import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">JESSES & SONS BUSINESS WORLD</h3>
            <p className="mb-4">Your trusted partner in property, livestock, and construction.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-blue-400 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-red-400 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/property" className="hover:underline">
                  Property
                </Link>
              </li>
              <li>
                <Link href="/piggery" className="hover:underline">
                  Piggery
                </Link>
              </li>
              <li>
                <Link href="/livestock" className="hover:underline">
                  Livestock
                </Link>
              </li>
              <li>
                <Link href="/poultry" className="hover:underline">
                  Poultry
                </Link>
              </li>
              <li>
                <Link href="/blocks" className="hover:underline">
                  Blocks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Km 21 Ughelli - Warri Expressway</p>
            <p>Phone: +234 XXX XXX XXXX</p>
            <p>Email: info@jessesandsons.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} JESSES & SONS BUSINESS WORLD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

