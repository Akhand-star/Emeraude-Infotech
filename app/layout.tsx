import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import CareerTab from "@/components/career-tab"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Emeraude Infotech - Premier Staffing & IT Solutions | PAN India Services",
  description:
    "Premier staffing, recruitment, and IT solutions company serving PAN India. Expert services in permanent staffing, contract hiring, executive search, bulk hiring, IT outsourcing, and payroll compliance across all industries.",
  metadataBase: new URL("https://emeraudeinfotech.com"),
  alternates: {
    canonical: "https://emeraudeinfotech.com",
  },
  openGraph: {
    title: "Emeraude Infotech - Premier Staffing & IT Solutions",
    description: "Premier staffing, recruitment, and IT solutions company serving PAN India.",
    url: "https://emeraudeinfotech.com",
    siteName: "Emeraude Infotech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emeraude Infotech - Premier Staffing & IT Solutions",
    description: "Premier staffing, recruitment, and IT solutions company serving PAN India.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CareerTab />
          <StructuredData />
        </ThemeProvider>
      </body>
    </html>
  )
}
