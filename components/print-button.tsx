"use client"

import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // This will trigger the browser's print dialog with "Save as PDF" option
    window.print()
  }

  return (
    <div className="fixed top-4 right-4 z-50 no-print flex gap-2">
      <Button
        onClick={handlePrint}
        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg"
      >
        <Printer className="mr-2 h-4 w-4" />
        Print Guide
      </Button>
      <Button
        onClick={handleDownloadPDF}
        variant="outline"
        className="border-orange-500 text-orange-600 hover:bg-orange-50 shadow-lg"
      >
        <Download className="mr-2 h-4 w-4" />
        Save as PDF
      </Button>
    </div>
  )
}
