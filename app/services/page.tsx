"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Search,
  Code,
  Briefcase,
  Clock,
  Shield,
  TrendingUp,
  Headphones,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We deliver world-class staffing, recruitment, and IT solutions serving businesses across India with
            excellence and innovation.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Staffing Solutions */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="p-10 pb-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-purple-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">Permanent & Contract Staffing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Complete staffing solutions for both permanent placements and flexible contract hiring across all
                  industries, ensuring the perfect fit for your business needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Permanent Staffing Solutions</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Contract & Temporary Hiring</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Project-Based Staffing</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Volume Recruitment</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-lg">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Executive Search */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="p-10 pb-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Search className="w-8 h-8 text-teal-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">Executive Search & Bulk Hiring</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Strategic talent acquisition, executive search for leadership roles, and efficient bulk hiring
                  solutions to meet your scaling requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Executive Search</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Leadership Talent Acquisition</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Campus Recruitment</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Bulk Hiring Solutions</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-teal-700 to-purple-600 hover:from-teal-800 hover:to-purple-700 text-white shadow-lg">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* IT Outsourcing */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="p-10 pb-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-purple-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">IT Outsourcing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Complete IT outsourcing solutions and technology consulting services to optimize your business
                  operations and drive digital transformation.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Complete IT Outsourcing</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Technology Consulting</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">Software Development</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full mr-4"></div>
                    <span className="text-lg">IT Support Services</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-700 to-teal-600 hover:from-purple-800 hover:to-teal-700 text-white shadow-lg">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Payroll Compliance */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="p-10 pb-6">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-teal-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">Payroll Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  End-to-end payroll management and compliance solutions ensuring your business meets all regulatory
                  requirements while optimizing operational efficiency.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Payroll Processing</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Compliance Management</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Tax Management</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-700 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-lg">Statutory Compliance</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-teal-700 to-purple-600 hover:from-teal-800 hover:to-purple-700 text-white shadow-lg">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Industry Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specialized Knowledge Across{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                Key Sectors
              </span>
            </h2>
            <p className="text-xl text-gray-600">Deep industry insights driving successful placements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-10 h-10 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Information Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Software development, DevOps, cybersecurity, cloud computing, and emerging technologies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="w-10 h-10 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">BPO & Customer Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call centers, customer support, business process outsourcing, and service excellence
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-10 h-10 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Logistics & Supply Chain</h3>
                <p className="text-gray-600 leading-relaxed">
                  Warehouse management, transportation, distribution, and supply chain optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-10 h-10 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">FinTech & Banking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Financial services, payments, regulatory compliance, and digital banking solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="mb-24 bg-gray-50 rounded-3xl p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of service delivery</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Quick placement and project delivery with our streamlined processes, typically within 48-72 hours
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-10 h-10 text-teal-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rigorous screening and quality checks with comprehensive vetting processes ensure the best outcomes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto">
                <Headphones className="w-10 h-10 text-purple-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dedicated support team available round the clock with personalized attention to your needs
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how our comprehensive services can help accelerate your business growth and success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-gray-100 shadow-xl text-lg px-10 py-4 h-auto"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 h-auto"
                onClick={() => window.open("tel:+919163739982")}
              >
                Call: +91 9163739982
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
