export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emeraude Infotech Private Limited",
    url: "https://emeraudeinfotech.com",
    logo: "https://emeraudeinfotech.com/logo.png",
    description: "Premier staffing, recruitment, and IT solutions company serving PAN India",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Karnataka",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9163739982",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    founder: [
      {
        "@type": "Person",
        name: "Akhand Kumar Singh",
      },
      {
        "@type": "Person",
        name: "Puja Bhatt",
      },
    ],
    sameAs: ["https://www.linkedin.com/company/emeraude-infotech", "https://twitter.com/emeraudeinfotech"],
    services: [
      "Permanent Staffing",
      "Contract Staffing",
      "Executive Search",
      "Bulk Hiring",
      "IT Outsourcing",
      "Payroll Compliance",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
