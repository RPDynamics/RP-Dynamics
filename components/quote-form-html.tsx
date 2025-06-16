"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

import { trackQuoteRequest } from "@/lib/gtag"

export function QuoteFormHTML() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    requirements: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    // Track the quote request before form submission
    trackQuoteRequest(formData)
    // Form will submit normally to Formspree
  }

  const sendDirectEmail = () => {
    const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.company || "Individual"}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType}

Requirements:
${formData.requirements}

---
This quote request was submitted via rpdynamics.co.in
    `)

    window.location.href = `mailto:info@rpdynamics.co.in?subject=${subject}&body=${body}`
  }

  const isFormValid = formData.name && formData.email && formData.requirements && formData.projectType

  return (
    <div className="space-y-6">
      {/* HTML Form with Formspree */}
      <form action="https://formspree.io/f/meokkrop" method="POST" onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden fields for Formspree */}
        <input type="hidden" name="_subject" value="New Quote Request from RP Dynamics Website" />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input type="hidden" name="_next" value="https://rpdynamics.co.in/thank-you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <select
            name="projectType"
            required
            value={formData.projectType}
            onChange={(e) => handleSelectChange(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select project type</option>
            <option value="uav">UAV & Drone Components</option>
            <option value="ev">EV Battery Solutions</option>
            <option value="defense">Defense & Aerospace</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requirements">Project Requirements *</Label>
          <Textarea
            id="requirements"
            name="requirements"
            placeholder="Please describe your project requirements, quantities, and timeline..."
            required
            className="min-h-[120px]"
            value={formData.requirements}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          disabled={!isFormValid}
        >
          Submit Quote Request
        </Button>
      </form>

      {/* Backup Email Option */}
      <div className="border-t pt-4">
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600">Having trouble with the form?</p>
          <Button
            type="button"
            variant="outline"
            onClick={sendDirectEmail}
            className="border-orange-500 text-orange-600 hover:bg-orange-50"
            disabled={!isFormValid}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send via Email Instead
          </Button>
          <p className="text-xs text-gray-500">This will open your email client with the form data pre-filled</p>
        </div>
      </div>
    </div>
  )
}
