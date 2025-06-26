"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ContactModal from "./contact-modal"

interface CTAButtonsProps {
  variant?: "primary" | "secondary" | "hero"
  showServices?: boolean
  showContact?: boolean
  className?: string
}

export default function CTAButtons({
  variant = "primary",
  showServices = true,
  showContact = true,
  className = "",
}: CTAButtonsProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (variant === "hero") {
    return (
      <>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${className}`}>
          {showContact && (
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 shadow-xl text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto font-semibold"
              onClick={() => setIsContactModalOpen(true)}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>
          )}
          {showServices && (
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto font-semibold"
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
          )}
        </div>
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </>
    )
  }

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
        {showContact && (
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-xl text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto font-semibold"
            onClick={() => setIsContactModalOpen(true)}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
          </Button>
        )}
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
