"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { X, Upload, Briefcase, ArrowRight, ChevronDown } from "lucide-react"

interface CareerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CareerModal({ isOpen, onClose }: CareerModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    resume: null as File | null,
    industry: "",
    experience: "",
    currentPosition: "",
    candidateType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false)
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false)

  const industries = [
    "Information Technology & Digital",
    "Software Development",
    "IT Services",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence & Machine Learning",
    "Data Analytics & Big Data",
    "Blockchain & Web3",
    "E-commerce",
    "Fintech (Financial Technology)",
    "EdTech (Education Technology)",
    "HealthTech",
    "HRTech",
    "Gaming & eSports",
    "Banking, Finance & Insurance",
    "Banking (Retail, Corporate, Investment)",
    "Insurance",
    "Asset Management",
    "Healthcare & Life Sciences",
    "Pharmaceuticals",
    "Biotechnology",
    "Medical Devices",
    "Manufacturing & Engineering",
    "Automotive",
    "Aerospace & Defense",
    "Chemicals & Petrochemicals",
    "Textiles & Apparel",
    "Renewable Energy",
    "Retail & Consumer",
    "FMCG (Fast-Moving Consumer Goods)",
    "Retail (Offline & Online)",
    "Fashion & Apparel",
    "Food & Beverages",
    "Logistics, Supply Chain & Transportation",
    "Warehousing",
    "Shipping & Freight",
    "Aviation & Airlines",
    "Telecommunications & Media",
    "Telecom Operators",
    "Media & Broadcasting",
    "Energy & Utilities",
    "Oil & Gas",
    "Power Generation & Distribution",
    "Education & Training",
    "Schools & Universities",
    "Corporate Training",
    "Hospitality, Travel & Tourism",
    "Hotels & Resorts",
    "Restaurants & Food Services",
    "Construction & Real Estate",
    "Real Estate",
    "Construction & Civil Engineering",
    "Agriculture & Environment",
    "AgriTech",
    "Government, Public & Nonprofit",
    "Professional & Business Services",
    "Consulting",
    "Legal Services",
    "Accounting & Auditing",
    "Marketing & Advertising",
    "Outsourcing (BPO, KPO, LPO)",
    "Creative & Design",
    "Other",
  ]

  const experienceOptions = [
    "0 (Fresher)",
    "1 Year",
    "2 Years",
    "3 Years",
    "4 Years",
    "5 Years",
    "6 Years",
    "7 Years",
    "8 Years",
    "9 Years",
    "10 Years",
    "11 Years",
    "12 Years",
    "13 Years",
    "14 Years",
    "15 Years",
    "15+ Years",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("fullName", formData.fullName)
      formDataToSend.append("mobile", formData.mobile)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("industry", formData.industry)
      formDataToSend.append("experience", formData.experience)
      formDataToSend.append("currentPosition", formData.currentPosition)
      formDataToSend.append("candidateType", formData.candidateType)
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume)
      }
      formDataToSend.append("_subject", "New Career Application - Emeraude Infotech")
      formDataToSend.append("_template", "table")

      const response = await fetch("https://formsubmit.co/info@emeraudeinfotech.com", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({
            fullName: "",
            mobile: "",
            email: "",
            resume: null,
            industry: "",
            experience: "",
            currentPosition: "",
            candidateType: "",
          })
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (allowedTypes.includes(file.type)) {
        setFormData((prev) => ({ ...prev, resume: file }))
      } else {
        alert("Please upload a PDF, DOC, or DOCX file.")
      }
    }
  }

  const selectIndustry = (industry: string) => {
    handleChange("industry", industry)
    setShowIndustryDropdown(false)
  }

  const selectExperience = (experience: string) => {
    handleChange("experience", experience)
    setShowExperienceDropdown(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[8000] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-in Panel from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-2xl z-[8001] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <Card className="h-full border-0 shadow-none rounded-none">
            <CardHeader className="p-6 lg:p-8 pb-4 relative border-b">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900">Join Our Team</CardTitle>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Submit your application and let's build the future together
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 lg:py-12">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 lg:w-10 lg:h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 text-base lg:text-lg">
                    Your resume has been submitted successfully. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        placeholder="Your full name"
                        className="h-10 lg:h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Mobile Number *
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        required
                        value={formData.mobile}
                        onChange={(e) => handleChange("mobile", e.target.value)}
                        placeholder="+91 9876543210"
                        className="h-10 lg:h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-10 lg:h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Upload Resume * (PDF, DOC, DOCX)
                    </Label>
                    <div className="relative">
                      <input
                        id="resume"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center w-full h-10 lg:h-12 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">
                          {formData.resume ? formData.resume.name : "Click to upload resume"}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                    {/* Custom Industry Dropdown */}
                    <div className="relative">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Industry *</Label>
                      <button
                        type="button"
                        onClick={() => {
                          setShowIndustryDropdown(!showIndustryDropdown)
                          setShowExperienceDropdown(false)
                        }}
                        className="w-full h-10 lg:h-12 px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 flex items-center justify-between"
                      >
                        <span className={formData.industry ? "text-gray-900" : "text-gray-500"}>
                          {formData.industry || "Select industry"}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform ${showIndustryDropdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {showIndustryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-[9999] max-h-60 overflow-y-auto">
                          {industries.map((industry, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => selectIndustry(industry)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-sm"
                            >
                              {industry}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Custom Experience Dropdown */}
                    <div className="relative">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Experience (Years) *</Label>
                      <button
                        type="button"
                        onClick={() => {
                          setShowExperienceDropdown(!showExperienceDropdown)
                          setShowIndustryDropdown(false)
                        }}
                        className="w-full h-10 lg:h-12 px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 flex items-center justify-between"
                      >
                        <span className={formData.experience ? "text-gray-900" : "text-gray-500"}>
                          {formData.experience || "Select experience"}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform ${showExperienceDropdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {showExperienceDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-[9999] max-h-60 overflow-y-auto">
                          {experienceOptions.map((exp, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => selectExperience(exp)}
                              className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none text-sm"
                            >
                              {exp}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentPosition" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Current Job Position
                    </Label>
                    <Input
                      id="currentPosition"
                      type="text"
                      value={formData.currentPosition}
                      onChange={(e) => handleChange("currentPosition", e.target.value)}
                      placeholder="e.g., Software Developer, Marketing Manager"
                      className="h-10 lg:h-12 text-base border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-3 block">Candidate Type *</Label>
                    <RadioGroup
                      value={formData.candidateType}
                      onValueChange={(value) => handleChange("candidateType", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="intern" id="intern" />
                        <Label htmlFor="intern" className="text-sm">
                          Intern
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="looking-internship" id="looking-internship" />
                        <Label htmlFor="looking-internship" className="text-sm">
                          Looking for Internship
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fresher" id="fresher" />
                        <Label htmlFor="fresher" className="text-sm">
                          Fresher
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="experienced" id="experienced" />
                        <Label htmlFor="experienced" className="text-sm">
                          Experienced
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-xl text-base lg:text-lg py-3 lg:py-4 h-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
