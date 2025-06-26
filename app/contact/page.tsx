"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Award, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will get back to you within 24 hours.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Responsive */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4 lg:mb-6">
            <Award className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            Let's Transform Your{" "}
            <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
              Business Together
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to elevate your hiring process or need cutting-edge IT solutions? Connect with our experts and
            discover how we can drive your business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Contact Form - Responsive */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="p-6 lg:p-10 pb-4 lg:pb-6">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600 text-base lg:text-lg">
                  Fill out the form below and we'll get back to you within 24 hours with a customized solution.
                </p>
              </CardHeader>
              <CardContent className="p-6 lg:p-10 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="h-10 lg:h-12 text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        className="h-10 lg:h-12 text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                        Company Name *
                      </label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="h-10 lg:h-12 text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 9163739982"
                        className="h-10 lg:h-12 text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                      Service Interest *
                    </label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="h-10 lg:h-12 text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="staffing">Permanent & Contract Staffing</SelectItem>
                        <SelectItem value="executive-search">Executive Search & Bulk Hiring</SelectItem>
                        <SelectItem value="it-outsourcing">IT Outsourcing</SelectItem>
                        <SelectItem value="payroll">Payroll Compliance</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your requirements, timeline, and any specific needs..."
                      className="text-base lg:text-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-xl text-base lg:text-lg py-3 lg:py-4 h-auto"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information - Responsive */}
          <div className="space-y-6 lg:space-y-8">
            {/* Quick Contact */}
            <Card className="border-0 shadow-2xl">
              <CardHeader className="p-6 lg:p-8 pb-3 lg:pb-4">
                <CardTitle className="text-lg lg:text-2xl font-bold text-gray-900">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-6 lg:p-8 pt-3 lg:pt-4 space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">Phone</p>
                    <p className="text-gray-600 text-base lg:text-lg">+91 9163739982</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">Email</p>
                    <p className="text-gray-600 text-base lg:text-lg break-all">info@emeraudeinfotech.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">Address</p>
                    <p className="text-gray-600 text-base lg:text-lg">Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">Business Hours</p>
                    <p className="text-gray-600 text-base lg:text-lg">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Contact - Responsive */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-2xl">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">WhatsApp Us</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg">Get instant responses to your queries</p>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white shadow-lg text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                  onClick={() => window.open("https://wa.me/919163739982", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact - Responsive */}
            <Card className="bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white shadow-2xl">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Phone className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-4">Urgent Requirements?</h3>
                <p className="text-purple-100 mb-4 lg:mb-6 text-base lg:text-lg">
                  Call our priority hotline for urgent staffing needs
                </p>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                  onClick={() => window.open("tel:+919163739982")}
                >
                  Call: +91 9163739982
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section - Responsive */}
        <section className="mt-16 lg:mt-24">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  How quickly can you provide candidates?
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  We typically provide initial candidate profiles within 48-72 hours for most positions, with final
                  placements completed within 1-2 weeks depending on requirements and complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  What industries do you specialize in?
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  We specialize in IT, BPO, logistics, fintech, and manufacturing sectors, with deep expertise in
                  understanding the unique requirements and challenges of each industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Do you offer replacement guarantees?
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Yes, we offer comprehensive replacement guarantees for permanent placements within the first 90 days
                  at no additional cost to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  What are your service charges?
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  Our pricing is competitive and transparent, varying based on service type and requirements. Contact us
                  for a detailed, customized quote based on your specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
