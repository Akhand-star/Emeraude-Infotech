import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Globe } from "lucide-react"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Responsive */}
          <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent ${montserrat.className}`}
            >
              <span className="block sm:hidden">EMERAUDE</span>
              <span className="hidden sm:block">EMERAUDE INFOTECH</span>
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              Your trusted partner for premium staffing, recruitment, and IT solutions serving businesses across India.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 hover:text-white" />
              </div>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 hover:text-white" />
              </div>
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 lg:w-5 lg:h-5 text-gray-300 hover:text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links - Responsive */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-3 lg:space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-base lg:text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Responsive */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Our Services</h4>
            <ul className="space-y-3 lg:space-y-4">
              <li className="text-gray-300 text-base lg:text-lg">Permanent & Contract Staffing</li>
              <li className="text-gray-300 text-base lg:text-lg">Executive Search</li>
              <li className="text-gray-300 text-base lg:text-lg">IT Outsourcing</li>
              <li className="text-gray-300 text-base lg:text-lg">Payroll Compliance</li>
            </ul>
          </div>

          {/* Contact Info - Responsive */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-base lg:text-lg">+91 9163739982</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-base lg:text-lg break-all">info@emeraudeinfotech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-base lg:text-lg">Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-base lg:text-lg">Serving PAN India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            © 2024 Emeraude Infotech Private Limited. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
