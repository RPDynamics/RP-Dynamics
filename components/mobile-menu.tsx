"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Mail, ExternalLink } from "lucide-react"
import { SimpleDownloadButton } from "@/components/simple-download-button"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:info@rpdynamics.co.in"
    toggleMenu()
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/rp-dynamics-ltd", "_blank", "noopener,noreferrer")
    toggleMenu()
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center gap-8 p-8">
            <Link
              href="#solutions"
              className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link
              href="#products"
              className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="#advantages"
              className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              Advantages
            </Link>
            <Link
              href="#vision"
              className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              Vision
            </Link>
            <Link
              href="#contact"
              className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-8 w-full">
              <SimpleDownloadButton
                variant="outline"
                className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
              />
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("open-quote-dialog"))
                  toggleMenu()
                }}
              >
                Get Quote
              </Button>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50"
                  onClick={handleEmailClick}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50"
                  onClick={handleLinkedInClick}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
