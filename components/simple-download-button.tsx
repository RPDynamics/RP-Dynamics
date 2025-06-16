"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { trackCTAClick } from "@/lib/gtag"

interface SimpleDownloadButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function SimpleDownloadButton({
  variant = "outline",
  size = "sm",
  className = "",
  children,
}: SimpleDownloadButtonProps) {
  const handleClick = () => {
    trackCTAClick("Design Guide Access")

    // Open the design guide page in a new tab
    // Users can then use their browser's print function to save as PDF
    window.open("/design-guide", "_blank")
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleClick}>
      {children || (
        <>
          <ExternalLink className="mr-2 h-4 w-4" />
          View Design Guide & Case Study
        </>
      )}
    </Button>
  )
}
