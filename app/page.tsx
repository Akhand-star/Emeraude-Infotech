"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Code,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Award,
  Clock,
  Phone,
} from "lucide-react"
import Link from "next/link"
import TabsSection from "@/components/tabs-section"
import CTAButtons from "@/components/cta-buttons"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated without large company branding */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Premier Staffing &{" "}
                  <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                    IT Solutions
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-purple-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Excellence serving businesses nationwide. We bridge the gap between exceptional talent and
                  forward-thinking companies through innovative staffing and IT solutions across India.
                </p>
              </div>

              <CTAButtons variant="hero" className="pt-4" />

              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">180+</div>
                  <div className="text-purple-200 text-xs sm:text-sm">Successful Placements</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">22+</div>
                  <div className="text-purple-200 text-xs sm:text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">98%</div>
                  <div className="text-purple-200 text-xs sm:text-sm">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Professional team collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Responsive Grid */}
      <section id="services-section" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Comprehensive Solutions for{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From permanent staffing to IT outsourcing, we deliver end-to-end solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Permanent & Contract Staffing
                </h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  Comprehensive staffing solutions including permanent placements and flexible contract hiring across
                  all industries
                </p>
                <Link
                  href="/services"
                  className="flex items-center text-purple-700 font-medium text-sm lg:text-base hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Executive Search & Bulk Hiring
                </h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  Strategic talent acquisition, executive search for leadership roles, and efficient bulk hiring
                  solutions
                </p>
                <Link
                  href="/services"
                  className="flex items-center text-purple-700 font-medium text-sm lg:text-base hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">IT Outsourcing</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  Complete IT outsourcing solutions and technology consulting services to optimize your business
                  operations
                </p>
                <Link
                  href="/services"
                  className="flex items-center text-purple-700 font-medium text-sm lg:text-base hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Payroll Compliance</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  End-to-end payroll management and compliance solutions ensuring your business meets all regulatory
                  requirements
                </p>
                <Link
                  href="/services"
                  className="flex items-center text-purple-700 font-medium text-sm lg:text-base hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">PAN India Services</h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  Nationwide service delivery with local expertise, serving businesses across all major cities and
                  regions in India
                </p>
                <Link
                  href="/services"
                  className="flex items-center text-purple-700 font-medium text-sm lg:text-base hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Responsive Layout */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Why Choose Us
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Why Leading Companies Trust{" "}
                  <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                    Emeraude Infotech
                  </span>
                </h2>
              </div>
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-gray-900">Industry Expertise</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Deep understanding of IT, BPO, logistics, fintech, and manufacturing sectors with specialized
                      recruitment strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-gray-900">Quality Talent Pool</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Access to pre-screened, qualified professionals with rigorous vetting processes and skill
                      assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-gray-900">Fast Turnaround</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Quick placement with our streamlined processes, typically delivering candidates within 48-72 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-gray-900">PAN India Presence</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Nationwide service delivery with local market knowledge and dedicated support teams across India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Professional consultation"
                className="relative rounded-3xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <TabsSection />

      {/* Testimonials - Responsive Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Client Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <div className="flex mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-lg leading-relaxed">
                  "Emeraude Infotech transformed our hiring process. Their candidates were exceptional and perfectly
                  aligned with our company culture and technical requirements."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <span className="text-purple-700 font-bold text-sm lg:text-base">SJ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">Sarah Johnson</p>
                    <p className="text-xs lg:text-sm text-gray-500">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <div className="flex mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-lg leading-relaxed">
                  "Outstanding service and professional approach. They understood our complex requirements and delivered
                  exactly what we needed within the promised timeline."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <span className="text-teal-700 font-bold text-sm lg:text-base">MC</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">Michael Chen</p>
                    <p className="text-xs lg:text-sm text-gray-500">HR Director, LogiFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="flex mb-4 lg:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-lg leading-relaxed">
                  "Their IT outsourcing solutions revolutionized our operations. Highly recommend their services to any
                  growing company looking for reliable partners."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                    <span className="text-purple-700 font-bold text-sm lg:text-base">PS</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">Priya Sharma</p>
                    <p className="text-xs lg:text-sm text-gray-500">Founder, FinTech Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                Business Growth?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-purple-100 leading-relaxed">
              Let's discuss how Emeraude Infotech can help you find exceptional talent or provide cutting-edge IT
              solutions for your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center pt-4">
              <CTAButtons showServices={false} />
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-base lg:text-lg px-8 lg:px-10 py-3 lg:py-4 h-auto w-full sm:w-auto font-semibold"
                onClick={() => window.open("tel:+919163739982")}
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Call: +91 9163739982
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
