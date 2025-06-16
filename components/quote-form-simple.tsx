"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Copy, CheckCircle } from "lucide-react"

import { trackQuoteRequest } from "@/lib/gtag"

export function QuoteFormSimple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    requirements: "",
  })
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const sendEmail = () => {
    if (!formData.name || !formData.email || !formData.requirements) {
      alert("Please fill in all required fields (Name, Email, and Requirements)")
      return
    }

    // Track the quote request
    trackQuoteRequest(formData)

    const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.company || "Individual"}`)
    const body = encodeURIComponent(`
Hello RP Dynamics Team,

I would like to request a quote for the following project:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType}

Project Requirements:
${formData.requirements}

Please contact me to discuss this project further.

Best regards,
${formData.name}

---
This quote request was submitted via rpdynamics.co.in
    `)

    window.location.href = `mailto:info@rpdynamics.co.in?subject=${subject}&body=${body}`
  }

  const copyToClipboard = () => {
    const emailContent = `
Subject: Quote Request from ${formData.name} - ${formData.company || "Individual"}

Hello RP Dynamics Team,

I would like to request a quote for the following project:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType}

Project Requirements:
${formData.requirements}

Please contact me to discuss this project further.

Best regards,
${formData.name}
    `

    navigator.clipboard.writeText(emailContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isFormValid = formData.name && formData.email && formData.requirements && formData.projectType

  return (
    <div className="space-y-6">
      <div className="space-y-4">
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
          <Select required onValueChange={handleSelectChange} value={formData.projectType}>
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uav">UAV & Drone Components</SelectItem>
              <SelectItem value="ev">EV Battery Solutions</SelectItem>
              <SelectItem value="defense">Defense & Aerospace</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
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
      </div>

      {/* Email Options */}
      <div className="space-y-3 pt-4 border-t">
        <h4 className="font-semibold text-gray-900">Send Your Quote Request:</h4>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            type="button"
            onClick={sendEmail}
            disabled={!isFormValid}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            <Mail className="mr-2 h-4 w-4" />
            Open Email Client
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={copyToClipboard}
            disabled={!isFormValid}
            className="border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            {copied ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Email Text
              </>
            )}
          </Button>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Option 1:</strong> Click "Open Email Client" to automatically create an email with your details
          </p>
          <p>
            <strong>Option 2:</strong> Click "Copy Email Text" and paste it into any email to send to:{" "}
            <strong>info@rpdynamics.co.in</strong>
          </p>
        </div>
      </div>

      {!isFormValid && (
        <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
          Please fill in all required fields: Name, Email, Project Type, and Requirements
        </div>
      )}
    </div>
  )
}
