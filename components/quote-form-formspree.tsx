"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Mail } from "lucide-react"

import { trackQuoteRequest } from "@/lib/gtag"

export function QuoteFormFormspree() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
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
    setError("")
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
    setError("")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          projectType: formData.projectType,
          requirements: formData.requirements,
          subject: `Quote Request from ${formData.name} - ${formData.company}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        trackQuoteRequest(formData)
        setIsSubmitted(true)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Form submission failed. Please try the direct email option below.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest. Our team will contact you within 24 hours to discuss your project requirements.
        </p>
        <div className="space-y-3">
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Request
          </Button>
          <p className="text-sm text-gray-500">
            If you don't hear from us within 24 hours, please email us directly at{" "}
            <a href="mailto:info@rpdynamics.co.in" className="text-orange-600 hover:text-orange-700">
              info@rpdynamics.co.in
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select required onValueChange={handleSelectChange} value={formData.projectType} disabled={isSubmitting}>
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
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          disabled={
            isSubmitting || !formData.name || !formData.email || !formData.requirements || !formData.projectType
          }
        >
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
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
            disabled={!formData.name || !formData.email || !formData.requirements}
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
