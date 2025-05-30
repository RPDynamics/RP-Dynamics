"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Download } from "lucide-react"
import { DialogTitle } from "@/components/ui/dialog"

export function DownloadGuideForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Download form submitted:", formData)
    // Show success message
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Design Guide & Case Study Ready!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our composite design guide and case studies.
        </p>
        <Button
          onClick={() => window.open("/design-guide", "_blank")}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Design Guide & Case Study
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <DialogTitle className="text-2xl font-bold text-center mb-2">Download Design Guide & Case Study</DialogTitle>
      <p className="text-center text-gray-600 mb-4">
        Complete the form below to access our comprehensive composite design guide and detailed case studies.
      </p>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@company.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
      >
        Get Design Guide & Case Study
      </Button>
    </form>
  )
}
