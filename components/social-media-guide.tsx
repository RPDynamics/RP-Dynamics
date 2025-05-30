"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Copy } from "lucide-react"
import Image from "next/image"

export function SocialMediaGuide() {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      dimensions: "1584 x 396",
      image: "/images/social/linkedin-banner.png",
      description: "Professional banner for company page",
      usage: "Company page cover photo",
    },
    {
      name: "Facebook",
      dimensions: "1200 x 630",
      image: "/images/social/facebook-cover.png",
      description: "Cover photo for business page",
      usage: "Page cover and post sharing",
    },
    {
      name: "Twitter",
      dimensions: "1500 x 500",
      image: "/images/social/twitter-header.png",
      description: "Header image for profile",
      usage: "Profile header background",
    },
    {
      name: "Instagram",
      dimensions: "1080 x 1080",
      image: "/images/social/instagram-post.png",
      description: "Square post format",
      usage: "Feed posts and stories",
    },
    {
      name: "YouTube",
      dimensions: "1280 x 720",
      image: "/images/social/youtube-thumbnail.png",
      description: "Video thumbnail template",
      usage: "Video thumbnails and channel art",
    },
    {
      name: "WhatsApp",
      dimensions: "640 x 640",
      image: "/images/social/whatsapp-profile.png",
      description: "Business profile picture",
      usage: "Profile photo and status",
    },
    {
      name: "Pinterest",
      dimensions: "1000 x 1500",
      image: "/images/social/pinterest-pin.png",
      description: "Vertical pin format",
      usage: "Board pins and rich pins",
    },
    {
      name: "Open Graph",
      dimensions: "1200 x 630",
      image: "/images/social/og-default.png",
      description: "Default sharing image",
      usage: "Website link previews",
    },
  ]

  const handleDownload = (imagePath: string, filename: string) => {
    const link = document.createElement("a")
    link.href = imagePath
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopyLink = (imagePath: string) => {
    const fullUrl = `${window.location.origin}${imagePath}`
    navigator.clipboard.writeText(fullUrl)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-600 px-4 py-2">
          Social Media Assets
        </Badge>
        <h1 className="text-4xl font-bold mb-4">RP Dynamics Social Media Kit</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional images optimized for all major social media platforms. Download and use these assets to maintain
          consistent branding across your digital presence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {socialPlatforms.map((platform) => (
          <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={platform.image || "/placeholder.svg"}
                  alt={`${platform.name} optimized image for RP Dynamics`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-lg">{platform.name}</CardTitle>
              <CardDescription>
                <div className="space-y-1">
                  <div className="text-sm font-medium">{platform.dimensions} pixels</div>
                  <div className="text-xs text-gray-500">{platform.description}</div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-600">
                <strong>Usage:</strong> {platform.usage}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleDownload(platform.image, `rp-dynamics-${platform.name.toLowerCase()}.png`)}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleCopyLink(platform.image)} className="px-3">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Brand Consistency</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use orange-red gradient colors (#ea580c to #dc2626)</li>
              <li>• Maintain RP Dynamics logo visibility</li>
              <li>• Keep "Made in India" messaging prominent</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Platform Optimization</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• LinkedIn: Professional, B2B focused content</li>
              <li>• Instagram: Visual storytelling, behind-scenes</li>
              <li>• Twitter: Industry news, quick updates</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Content Strategy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Highlight UAV, EV, and Defense applications</li>
              <li>• Showcase manufacturing excellence</li>
              <li>• Emphasize 70% weight reduction benefits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
