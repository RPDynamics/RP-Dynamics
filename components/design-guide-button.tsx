"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { trackCTAClick } from "@/lib/gtag"

interface DesignGuideButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children?: React.ReactNode
}

export function DesignGuideButton({
  variant = "outline",
  size = "sm",
  className = "",
  children,
}: DesignGuideButtonProps) {
  const handleClick = () => {
    trackCTAClick("Design Guide Access")

    // Open the design guide page with instructions
    const newWindow = window.open("/design-guide", "_blank")

    // Add a small delay then show print dialog
    if (newWindow) {
      setTimeout(() => {
        newWindow.focus()
        // The print button on the design guide page will handle the PDF creation
      }, 1000)
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleClick}>
      {children || (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Design Guide & Case Study
        </>
      )}
    </Button>
  )
}
