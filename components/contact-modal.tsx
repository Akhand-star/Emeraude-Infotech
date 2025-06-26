"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Phone, Mail } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-2xl">
        <CardHeader className="p-6 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 text-center">Get in Touch</CardTitle>
          <p className="text-gray-600 text-sm lg:text-base text-center">Choose your preferred way to contact us</p>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <div className="space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-lg text-base lg:text-lg py-4 h-auto justify-center"
              onClick={() => {
                window.open("tel:+919163739982")
                onClose()
              }}
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Us Now
            </Button>

            <Button
              variant="outline"
              className="w-full border-purple-700 text-purple-700 hover:bg-purple-50 text-base lg:text-lg py-4 h-auto justify-center"
              onClick={() => {
                window.open("mailto:info@emeraudeinfotech.com")
                onClose()
              }}
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Email
            </Button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center space-y-2">
            <p className="text-sm font-medium text-gray-700">Contact Information</p>
            <p className="text-sm text-gray-600">📞 +91 9163739982</p>
            <p className="text-sm text-gray-600">📧 info@emeraudeinfotech.com</p>
            <p className="text-xs text-gray-500 mt-3">We typically respond within 24 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
