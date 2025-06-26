"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Search, FileText, CheckCircle, ArrowRight, Building, UserCheck, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("job-seekers")

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation - Responsive */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="bg-white rounded-2xl p-1 sm:p-2 shadow-lg border w-full max-w-md sm:max-w-lg">
            <div className="flex">
              <button
                onClick={() => setActiveTab("job-seekers")}
                className={`flex-1 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                  activeTab === "job-seekers"
                    ? "bg-gradient-to-r from-purple-700 to-teal-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="hidden sm:inline">FOR JOB SEEKERS</span>
                <span className="sm:hidden">JOB SEEKERS</span>
              </button>
              <button
                onClick={() => setActiveTab("employers")}
                className={`flex-1 px-3 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                  activeTab === "employers"
                    ? "bg-gradient-to-r from-purple-700 to-teal-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="hidden sm:inline">FOR EMPLOYERS</span>
                <span className="sm:hidden">EMPLOYERS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px] lg:min-h-[600px]">
          {activeTab === "job-seekers" && (
            <div className="space-y-12 lg:space-y-16">
              {/* Job Seekers Hero */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Find Your{" "}
                  <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                    Dream Career
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover exciting opportunities across India with top companies. Let us help you take the next step in
                  your professional journey.
                </p>
              </div>

              {/* Job Seekers Services - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <Search className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Job Search</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Access thousands of job opportunities across various industries and experience levels
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Resume Building</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Get professional resume writing and optimization services to stand out from the crowd
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <UserCheck className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Career Guidance</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Receive personalized career counseling and interview preparation support
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA for Job Seekers - Responsive */}
              <div className="text-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative space-y-4 lg:space-y-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Ready to Start Your Journey?</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-purple-100">
                    Upload your resume and let us connect you with the perfect opportunities
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-purple-900 hover:bg-gray-100 shadow-xl text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                      >
                        Upload Resume
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                    >
                      Browse Jobs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "employers" && (
            <div className="space-y-12 lg:space-y-16">
              {/* Employers Hero */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Build Your{" "}
                  <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                    Dream Team
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Partner with us to find exceptional talent that drives your business forward. We understand your
                  hiring needs and deliver results.
                </p>
              </div>

              {/* Employers Services - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Talent Acquisition</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Access our extensive network of pre-screened, qualified professionals across all industries
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Quick Hiring</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Fast-track your recruitment process with our streamlined hiring solutions
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                      <Building className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Bulk Recruitment</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      Scale your team efficiently with our bulk hiring and campus recruitment services
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Why Choose Us for Employers - Responsive */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-12 text-gray-900">
                  Why Leading Companies Choose{" "}
                  <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                    Emeraude Infotech
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                      <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h4 className="font-bold text-base lg:text-lg mb-2">98% Success Rate</h4>
                    <p className="text-gray-600 text-sm lg:text-base">Proven track record of successful placements</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                      <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                    </div>
                    <h4 className="font-bold text-base lg:text-lg mb-2">48-72 Hours</h4>
                    <p className="text-gray-600 text-sm lg:text-base">Average time to provide initial candidates</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                      <Award className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                    </div>
                    <h4 className="font-bold text-base lg:text-lg mb-2">Industry Expertise</h4>
                    <p className="text-gray-600 text-sm lg:text-base">Deep knowledge across multiple sectors</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                      <Users className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                    </div>
                    <h4 className="font-bold text-base lg:text-lg mb-2">22+ Happy Clients</h4>
                    <p className="text-gray-600 text-sm lg:text-base">Trusted by leading companies across India</p>
                  </div>
                </div>
              </div>

              {/* CTA for Employers - Responsive */}
              <div className="text-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative space-y-4 lg:space-y-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Get in Touch Now and Start Hiring</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-purple-100">
                    We're here to help you keep your business productive and growing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="bg-white text-purple-900 hover:bg-gray-100 shadow-xl text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                      >
                        Contact Us Now
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto w-full sm:w-auto"
                      onClick={() => window.open("tel:+919163739982")}
                    >
                      Call: +91 9163739982
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
