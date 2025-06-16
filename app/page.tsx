"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Plane,
  Battery,
  Shield,
  Zap,
  Clock,
  Weight,
  MapPin,
  Download,
  CheckCircle,
  Target,
  Users,
  Award,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QuoteFormHTML as QuoteForm } from "@/components/quote-form-html"
import { DownloadGuideForm } from "@/components/download-guide-modal"
import { PDFDownloadButton } from "@/components/pdf-download-button"
import { useState, useEffect } from "react"
import { MobileMenu } from "@/components/mobile-menu"
import { trackEmailClick, trackLinkedInClick, trackCTAClick } from "@/lib/gtag"

export default function RPDynamicsLanding() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false)

  useEffect(() => {
    const handleOpenQuoteDialog = () => {
      console.log("Quote dialog event triggered")
      setQuoteDialogOpen(true)
    }

    const handleOpenDownloadDialog = () => {
      console.log("Download dialog event triggered")
      setDownloadDialogOpen(true)
    }

    window.addEventListener("open-quote-dialog", handleOpenQuoteDialog)
    window.addEventListener("open-download-dialog", handleOpenDownloadDialog)

    return () => {
      window.removeEventListener("open-quote-dialog", handleOpenQuoteDialog)
      window.removeEventListener("open-download-dialog", handleOpenDownloadDialog)
    }
  }, [])

  const handleQuoteClick = () => {
    console.log("Quote button clicked")
    trackCTAClick("Get Quote Button")
    setQuoteDialogOpen(true)
  }

  const handleEmailClick = () => {
    trackEmailClick()
    window.location.href = "mailto:info@rpdynamics.co.in"
  }

  const handleLinkedInClick = () => {
    trackLinkedInClick()
    window.open("https://www.linkedin.com/company/rp-dynamics-ltd", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Quote Request Dialog */}
      <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Request a Custom Quote</DialogTitle>
            <p className="text-center text-gray-600 mb-4">
              Tell us about your project, and our engineering team will prepare a detailed quote within 24 hours.
            </p>
          </DialogHeader>
          <QuoteForm />
        </DialogContent>
      </Dialog>

      {/* Download Guide Dialog */}
      <Dialog open={downloadDialogOpen} onOpenChange={setDownloadDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Download Design Guide</DialogTitle>
            <p className="text-center text-gray-600 mb-4">
              Complete the form below to access our comprehensive composite design guide.
            </p>
          </DialogHeader>
          <DownloadGuideForm />
        </DialogContent>
      </Dialog>

      {/* Header */}
      <header className="px-2 sm:px-4 lg:px-6 h-16 sm:h-20 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/rp-dynamics-logo.png"
            alt="RP Dynamics Ltd Logo"
            width={160}
            height={36}
            className="h-8 sm:h-10 w-auto brightness-0"
          />
        </Link>
        <nav className="ml-auto hidden md:flex gap-8">
          <Link
            href="#solutions"
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#products"
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#advantages"
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors"
          >
            Advantages
          </Link>
          <Link href="#vision" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors">
            Vision
          </Link>
          <Link href="#contact" className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors">
            Contact
          </Link>
        </nav>
        <MobileMenu />
        <div className="ml-2 sm:ml-8 hidden sm:flex gap-3">
          <PDFDownloadButton
            variant="outline"
            size="sm"
            className="border-orange-500 text-orange-600 hover:bg-orange-50"
          />
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
            onClick={handleQuoteClick}
          >
            Get Quote
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                      🇮🇳 Made in India Excellence
                    </Badge>
                    <div className="h-px bg-gradient-to-r from-orange-500 to-transparent flex-1"></div>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl/none">
                    <span className="text-red-400 text-xl sm:text-3xl xl:text-5xl">⚠️</span> Still Fighting Weight,
                    Delays, and Imports?
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-orange-400 leading-tight">
                    We Build High-Performance Housings That Fly, Drive, and Protect — Made Right Here in India.
                  </h2>
                  <p className="max-w-[600px] text-gray-300 text-base sm:text-xl md:text-2xl leading-relaxed">
                    From mission-ready UAV frames to fire-resistant EV battery enclosures, RP Dynamics delivers
                    engineered parts that meet India's next-gen demands.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4 shadow-xl w-full sm:w-auto"
                    onClick={handleQuoteClick}
                  >
                    <span className="mr-2">👉</span>
                    Get a Prototype in 3 Weeks
                  </Button>
                  <PDFDownloadButton
                    variant="outline"
                    size="lg"
                    className="text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Design Guide
                  </PDFDownloadButton>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-4 sm:pt-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      70%
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium">Weight Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium">Weeks to Prototype</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      200°C
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium">Thermal Resistance</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <div className="relative w-full max-w-[400px] aspect-square mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-3xl opacity-30"></div>
                  <Image
                    src="/images/hero-composite-manufacturing.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    alt="Advanced carbon fiber composite manufacturing showing lightweight materials and precision engineering for UAV, EV, and defense applications"
                    className="relative z-10 rounded-2xl object-cover shadow-2xl border border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
        </section>

        {/* Problem → Solution Section */}
        <section id="solutions" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-orange-500 text-orange-600 px-4 py-2">
                The Challenge & Our Solution
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Why Indian Innovators Choose RP Dynamics
              </h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-xl">
                Traditional manufacturing creates bottlenecks. We eliminate them with advanced composite solutions.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Problem Side */}
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-red-700 flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                      ⚠️
                    </div>
                    Traditional Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Weight className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-700 text-lg">Heavy Metal Components</h4>
                      <p className="text-red-600">
                        Aluminum and steel parts reduce UAV flight time by 40% and limit EV range significantly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-700 text-lg">Import Delays & Dependencies</h4>
                      <p className="text-red-600">
                        3-6 month lead times, customs hassles, and supply chain vulnerabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-700 text-lg">Thermal Limitations</h4>
                      <p className="text-red-600">
                        Metal conducts heat, causing battery degradation and system failures in Indian climate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solution Side */}
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-green-700 flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                      ✅
                    </div>
                    RP Dynamics Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Weight className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-700 text-lg">Ultra-Lightweight Composites</h4>
                      <p className="text-green-600">
                        70% weight reduction increases UAV flight time by 2x and extends EV range dramatically
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-700 text-lg">3-Week End-to-End Delivery</h4>
                      <p className="text-green-600">
                        Complete design, tooling, and production in 3 weeks - or 15 days if design/tooling ready
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-700 text-lg">Superior Thermal Management</h4>
                      <p className="text-green-600">
                        Advanced insulation properties protect electronics and batteries in extreme conditions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-orange-500 text-orange-600 px-4 py-2">
                Our Product Portfolio
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Engineered for Performance</h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-xl">
                From concept to production, we deliver mission-critical composite components for India's most demanding
                applications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">UAV & Drone Systems</CardTitle>
                  <CardDescription className="text-base">
                    Next-generation lightweight components for commercial and defense UAVs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Carbon fiber frames & structural housings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Gimbal mounts & camera enclosures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Payload compartments & sensor housings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom aerodynamic components
                    </li>
                  </ul>
                  <div className="mt-6">
                    <div className="w-full h-40 bg-gradient-to-br from-slate-800 via-gray-700 to-slate-900 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold mb-2">Carbon Fiber UAV</div>
                          <div className="text-sm opacity-80">Lightweight • Durable • Precision</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                          <Plane className="h-4 w-4 text-blue-300" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Battery className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">EV Battery Solutions</CardTitle>
                  <CardDescription className="text-base">
                    Thermal-resistant, lightweight protection for next-gen electric vehicles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Advanced battery pack enclosures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Thermal management systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Fire-resistant safety compartments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Structural battery integration
                    </li>
                  </ul>
                  <div className="mt-6">
                    <div className="w-full h-40 bg-gradient-to-br from-slate-800 via-gray-700 to-slate-900 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold mb-2">EV Battery Enclosure</div>
                          <div className="text-sm opacity-80">Fire-Resistant • Thermal Protection</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                          <Battery className="h-4 w-4 text-green-300" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Defense & Aerospace</CardTitle>
                  <CardDescription className="text-base">
                    Mission-critical components for defense and aerospace applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Radar-transparent composite panels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Ballistic protection systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Aerospace structural elements
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Electronic warfare housings
                    </li>
                  </ul>
                  <div className="mt-6">
                    <div className="w-full h-40 bg-gradient-to-br from-slate-800 via-gray-700 to-slate-900 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold mb-2">Defense Components</div>
                          <div className="text-sm opacity-80">Mission-Critical • Radar-Transparent</div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center">
                          <Shield className="h-4 w-4 text-red-300" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section
          id="advantages"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-gray-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2">
                Competitive Advantages
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                The{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Make in India
                </span>{" "}
                Edge
              </h2>
              <p className="max-w-3xl mx-auto text-gray-300 text-xl">
                World-class composite technology meets Indian manufacturing excellence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-6 group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Made in India</h3>
                <p className="text-gray-300">
                  Local production eliminates import delays, reduces costs, and supports the Indian manufacturing
                  ecosystem.
                </p>
              </div>

              <div className="text-center space-y-6 group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Thermal Excellence</h3>
                <p className="text-gray-300">
                  Superior thermal insulation perfect for India's extreme climate and high-performance applications.
                </p>
              </div>

              <div className="text-center space-y-6 group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Weight className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">70% Lighter</h3>
                <p className="text-gray-300">
                  Dramatic weight reduction compared to traditional materials improves performance and efficiency.
                </p>
              </div>

              <div className="text-center space-y-6 group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Fast Turnaround</h3>
                <p className="text-gray-300">3-week complete process or 15-day production when design/tooling ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement Section */}
        <section
          id="vision"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-orange-600 via-red-600 to-red-700"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="space-y-8">
                <Badge variant="outline" className="border-orange-200 text-orange-100 px-4 py-2">
                  Our Vision
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-8">
                  To become India's most trusted partner in performance-critical components — from design to delivery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">Design</div>
                    <p className="text-orange-100">
                      Innovative engineering solutions tailored to your specific performance requirements
                    </p>
                  </div>
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">Develop</div>
                    <p className="text-orange-100">Rapid prototyping and rigorous testing to perfect every component</p>
                  </div>
                  <div className="text-center text-white space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold">Deliver</div>
                    <p className="text-orange-100">Reliable manufacturing and on-time delivery you can count on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-orange-500 text-orange-600 px-4 py-2">
                Get in Touch
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Connect with RP Dynamics</h2>
              <p className="max-w-3xl mx-auto text-gray-600 text-xl">
                Ready to discuss your project? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-gray-600">Send us your project details</p>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50"
                    onClick={handleEmailClick}
                  >
                    info@rpdynamics.co.in
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                  <p className="text-gray-600">Connect with us professionally</p>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-600 hover:bg-orange-50"
                    onClick={handleLinkedInClick}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Follow Us
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 md:col-span-2 lg:col-span-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Visit Us</h3>
                  <p className="text-gray-600">Hyderabad, Telangana, India</p>
                  <div className="text-sm text-gray-500">Manufacturing Excellence Hub</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                  Ready to Transform Your Products?
                </h2>
                <p className="max-w-3xl text-orange-100 text-xl md:text-2xl">
                  Join the lightweight revolution. Download our comprehensive design guide or get a custom quote for
                  your next breakthrough project.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl"
                  onClick={handleQuoteClick}
                >
                  <span className="mr-3">👉</span>
                  Get a Prototype in 3 Weeks
                </Button>
                <PDFDownloadButton
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 transition-all"
                >
                  <Download className="mr-3 h-6 w-6" />
                  Download Our Composite Design Guide & Case Study
                </PDFDownloadButton>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-center">
                <div className="text-white space-y-2">
                  <div className="text-3xl font-bold">✓ Free Consultation</div>
                  <div className="text-orange-100">Complete technical feasibility assessment</div>
                </div>
                <div className="text-white space-y-2">
                  <div className="text-3xl font-bold">📧 Direct Contact</div>
                  <div className="text-orange-100">info@rpdynamics.co.in</div>
                </div>
                <div className="text-white space-y-2">
                  <div className="text-3xl font-bold">🇮🇳 Made in India</div>
                  <div className="text-orange-100">Supporting local manufacturing excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
