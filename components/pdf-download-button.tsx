"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { trackCTAClick } from "@/lib/gtag"

interface PDFDownloadButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function PDFDownloadButton({
  variant = "outline",
  size = "sm",
  className = "",
  children,
}: PDFDownloadButtonProps) {
  const handleDownload = () => {
    trackCTAClick("PDF Download Button")

    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/rp-dynamics-design-guide.pdf"
    link.download = "RP-Dynamics-Composite-Design-Guide.pdf"
    link.target = "_blank"

    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleDownload}>
      {children || (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Guide & Case Study
        </>
      )}
    </Button>
  )
}
