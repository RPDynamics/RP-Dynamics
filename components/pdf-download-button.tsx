"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Download, AlertCircle } from "lucide-react"
import { trackCTAClick } from "@/lib/gtag"
import { useState } from "react"

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
  const [isDownloading, setIsDownloading] = useState(false)
  const [error, setError] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    setError(false)

    try {
      trackCTAClick("PDF Download Button")

      // First, try to fetch the PDF to check if it exists
      const response = await fetch("/rp-dynamics-design-guide.pdf")

      if (!response.ok) {
        throw new Error("PDF not found")
      }

      // Create a blob from the response
      const blob = await response.blob()

      // Create a download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "RP-Dynamics-Composite-Design-Guide.pdf"
      link.target = "_blank"

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up the URL object
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      setError(true)

      // Fallback: Open the design guide page
      window.open("/design-guide", "_blank")
    } finally {
      setIsDownloading(false)
    }
  }

  if (error) {
    return (
      <Button
        variant={variant}
        size={size}
        className={`${className} border-orange-500 text-orange-600`}
        onClick={() => window.open("/design-guide", "_blank")}
      >
        <AlertCircle className="mr-2 h-4 w-4" />
        View Design Guide
      </Button>
    )
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleDownload} disabled={isDownloading}>
      {children || (
        <>
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? "Downloading..." : "Download Guide & Case Study"}
        </>
      )}
    </Button>
  )
}
