"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Briefcase } from "lucide-react"
import { Montserrat } from "next/font/google"
import CareerModal from "./career-modal"
import ContactModal from "./contact-modal"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-[1000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Company Branding - Now prominently displayed */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className={`${montserrat.className}`}>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent leading-tight">
                    EMERAUDE INFOTECH
                  </h1>
                  <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mt-1"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-gray-700 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsCareerModalOpen(true)}
                  className="text-gray-700 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  <Briefcase className="w-4 h-4 mr-1" />
                  Careers
                </button>
              </div>
            </div>

            {/* CTA Button - Updated to use contact modal */}
            <div className="hidden md:flex items-center">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-lg text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-700 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <Link
                  href="/"
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => {
                    setIsCareerModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="flex items-center w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Careers
                </button>
                <div className="px-3 py-3 md:hidden">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-700 to-teal-600 text-white w-full"
                    onClick={() => {
                      setIsContactModalOpen(true)
                      setIsOpen(false)
                    }}
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CareerModal isOpen={isCareerModalOpen} onClose={() => setIsCareerModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
