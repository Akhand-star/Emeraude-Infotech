"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import CareerModal from "./career-modal"

export default function CareerTab() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-semibold"
          aria-label="Open career opportunities"
        >
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Careers</span>
        </button>
      </div>

      <CareerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
