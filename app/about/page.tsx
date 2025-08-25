import { Card, CardContent } from "@/components/ui/card"
import { Target, Globe, Award, Users, CheckCircle, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 relative">
      {/* Responsive background pattern overlay */}
      <div className="fixed inset-0 opacity-3 sm:opacity-4 lg:opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BA15D75D6-CC38-4C1B-8A44-DBEB888F3CD3%7D-dS8R0EH7ImtBTX8Q7dljHgA7z04qNu.png")`,
            backgroundSize: "60px 60px", // Smaller on mobile
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Additional mobile-optimized pattern layer */}
      <div className="fixed inset-0 opacity-2 sm:opacity-3 lg:opacity-4 pointer-events-none sm:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BA15D75D6-CC38-4C1B-8A44-DBEB888F3CD3%7D-dS8R0EH7ImtBTX8Q7dljHgA7z04qNu.png")`,
            backgroundSize: "40px 40px", // Even smaller for mobile
            backgroundRepeat: "repeat",
            backgroundPosition: "10px 10px", // Offset for mobile
          }}
        />
      </div>

      {/* Tablet-specific pattern */}
      <div className="fixed inset-0 opacity-3 pointer-events-none hidden sm:block lg:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BA15D75D6-CC38-4C1B-8A44-DBEB888F3CD3%7D-dS8R0EH7ImtBTX8Q7dljHgA7z04qNu.png")`,
            backgroundSize: "80px 80px", // Medium size for tablets
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Desktop pattern */}
      <div className="fixed inset-0 opacity-4 pointer-events-none hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BA15D75D6-CC38-4C1B-8A44-DBEB888F3CD3%7D-dS8R0EH7ImtBTX8Q7dljHgA7z04qNu.png")`,
            backgroundSize: "120px 120px", // Full size for desktop
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Responsive */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100/90 backdrop-blur-sm text-purple-700 rounded-full text-sm font-medium mb-4 lg:mb-6">
            <Award className="w-4 h-4 mr-2" />
            About Emeraude Infotech
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8">
            Bridging Talent with{" "}
            <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">
              Opportunity Across India
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Emeraude Infotech, we redefine the landscape of staffing and IT solutions by connecting exceptional
            talent with future-focused companies. With a PAN India presence, we empower businesses to grow by sourcing
            the right people—and help professionals find roles where they can truly thrive.
          </p>
        </div>

        {/* Company Story - Responsive Layout */}
        <section className="mb-16 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-teal-100/90 backdrop-blur-sm text-teal-700 rounded-full text-sm font-medium mb-4">
                  <Globe className="w-4 h-4 mr-2" />
                  Our Story
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Built on Vision. Driven by Impact.
                </h2>
              </div>
              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
                <p>
                  Emeraude Infotech Private Limited was founded with a vision to transform the staffing and IT solutions
                  landscape in India. We recognized the urgent need for smarter, more reliable recruitment and
                  technology services that truly understand the evolving needs of modern businesses.
                </p>
                <p>
                  With strong business acumen and an entrepreneurial mindset, our company has grown to become a trusted
                  partner for startups, SMEs, and large enterprises across India. We deliver customized, results-driven
                  solutions that help businesses build exceptional teams and optimize their operations.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Our team at work"
                className="relative rounded-3xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision - Responsive Grid */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg lg:text-xl text-gray-600">Driving transformation through innovative solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                  <Target className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Mission</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  To bridge the gap between exceptional talent and forward-thinking organizations by delivering holistic
                  staffing and recruitment solutions that fuel business growth and empower careers across India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mb-4 lg:mb-6">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Our Vision</h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  To become India's most trusted partner in staffing and IT solutions—recognized for our innovation,
                  quality, and commitment to building long-term partnerships that transform businesses and careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Stats - Responsive */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white rounded-3xl p-8 lg:p-16 mb-16 lg:mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-lg lg:text-xl text-purple-100">Delivering measurable success across the country</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                  180+
                </div>
                <p className="text-purple-200 text-base lg:text-lg">Successful Placements</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                  22+
                </div>
                <p className="text-purple-200 text-base lg:text-lg">Satisfied Clients</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                  98%
                </div>
                <p className="text-purple-200 text-base lg:text-lg">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Responsive Grid */}
        <section className="mb-16 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-700 to-teal-600 bg-clip-text text-transparent">Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-4 lg:p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Nationwide presence with local expertise
                </h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-4 lg:p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Deep understanding of hiring market trends
                </h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-4 lg:p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Agile, client-focused service delivery
                </h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-4 lg:p-6 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-teal-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Strong candidate network across diverse industries
                </h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-4 lg:p-6 sm:col-span-2 lg:col-span-1 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Award className="w-6 h-6 lg:w-8 lg:h-8 text-purple-700" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">
                  Commitment to quality, transparency, and long-term results
                </h3>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section - Responsive */}
        <section className="text-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Let's Build the{" "}
              <span className="bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent">
                Future Together
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Whether you're a company looking to build a high-performing team or a professional ready for your next
              challenge, Emeraude Infotech is your trusted partner in growth.
            </p>
            <div className="pt-4">
              <p className="text-base lg:text-lg text-purple-200 mb-6">
                📩 Contact us today to explore how we can work together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
