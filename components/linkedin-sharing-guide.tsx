"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Linkedin } from "lucide-react"
import { useState } from "react"

export function LinkedInSharingGuide() {
  const [copiedText, setCopiedText] = useState("")

  const linkedInPosts = [
    {
      type: "Company Launch",
      title: "🚀 Introducing RP Dynamics Ltd",
      content: `🇮🇳 Proud to launch RP Dynamics Ltd - India's next-generation composite manufacturing company!

🎯 What we do:
✅ 70% weight reduction in UAV components
✅ Fire-resistant EV battery enclosures  
✅ Mission-critical defense applications
✅ 3-week end-to-end delivery

🏭 Made in India, engineered for the world.

From concept to production, we're solving India's weight-performance challenges with advanced carbon fiber solutions.

Ready to transform your products? 👇
https://rpdynamics.co.in

#MadeInIndia #CompositeManufacturing #UAV #ElectricVehicles #Defense #Innovation #Manufacturing #Startup`,
      hashtags: "#MadeInIndia #CompositeManufacturing #UAV #ElectricVehicles #Defense",
    },
    {
      type: "Problem-Solution",
      title: "⚠️ Still Fighting Weight, Delays, and Imports?",
      content: `The problem with traditional manufacturing in India:

❌ Heavy aluminum/steel components reduce UAV flight time by 40%
❌ 3-6 month import delays kill project timelines  
❌ Metal conducts heat → battery degradation in Indian climate

The RP Dynamics solution:

✅ 70% weight reduction with carbon fiber composites
✅ 3-week local manufacturing (vs 6-month imports)
✅ Superior thermal insulation for extreme conditions
✅ Made in Hyderabad, delivered across India

Stop compromising on performance. Start with composites.

Download our design guide: https://rpdynamics.co.in

#CompositeManufacturing #MadeInIndia #UAV #EV #Defense #Innovation`,
      hashtags: "#CompositeManufacturing #MadeInIndia #UAV #EV #Defense",
    },
    {
      type: "Industry Focus",
      title: "🛩️ UAV Manufacturers: Your Frame is Your Bottleneck",
      content: `Indian UAV manufacturers face a critical challenge:

Traditional aluminum frames = 
• Heavy weight = Reduced flight time
• Poor thermal properties = Electronics failure
• Import dependency = Project delays

RP Dynamics carbon fiber frames deliver:
• 70% weight reduction → 2x flight time
• Superior thermal management → Reliable electronics  
• 3-week local production → Faster time-to-market

Case study: Reduced 2.1kg aluminum frame to 0.7kg carbon fiber
Result: Flight time increased from 45min to 2+ hours

Ready to revolutionize your UAV performance?

Get a prototype in 3 weeks: https://rpdynamics.co.in

#UAV #Drones #CompositeManufacturing #MadeInIndia #Aerospace #Innovation`,
      hashtags: "#UAV #Drones #CompositeManufacturing #MadeInIndia #Aerospace",
    },
    {
      type: "EV Focus",
      title: "🔋 EV Manufacturers: Thermal Runaway is Preventable",
      content: `EV battery fires are making headlines. Here's why:

Traditional metal enclosures:
❌ Conduct heat rapidly
❌ No thermal barrier protection  
❌ Heavy weight reduces range

RP Dynamics composite enclosures:
✅ Fire-resistant materials
✅ Superior thermal insulation
✅ 70% lighter than metal alternatives
✅ Designed for Indian climate conditions

Protect your batteries. Protect your brand. Protect lives.

Our EV battery solutions: https://rpdynamics.co.in

#ElectricVehicles #BatterySafety #CompositeManufacturing #MadeInIndia #EV #Innovation #Safety`,
      hashtags: "#ElectricVehicles #BatterySafety #CompositeManufacturing #MadeInIndia",
    },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(type)
    setTimeout(() => setCopiedText(""), 2000)
  }

  const shareOnLinkedIn = (content: string) => {
    const encodedContent = encodeURIComponent(content)
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=https://rpdynamics.co.in&text=${encodedContent}`
    window.open(linkedInUrl, "_blank", "width=600,height=600")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 border-orange-500 text-orange-600 px-4 py-2">
          LinkedIn Marketing Kit
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Ready-to-Post LinkedIn Content</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional LinkedIn posts optimized for maximum engagement and lead generation. Copy, customize, and post!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {linkedInPosts.map((post, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="mb-2">
                  {post.type}
                </Badge>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(post.content, post.type)}
                    className="text-xs"
                  >
                    {copiedText === post.type ? "Copied!" : <Copy className="h-3 w-3" />}
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                    onClick={() => shareOnLinkedIn(post.content)}
                  >
                    <Linkedin className="h-3 w-3 mr-1" />
                    Post
                  </Button>
                </div>
              </div>
              <CardTitle className="text-lg">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">{post.content}</pre>
              </div>
              <div className="flex flex-wrap gap-1">
                {post.hashtags.split(" ").map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">LinkedIn Posting Best Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">📅 Timing</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Post between 8-10 AM IST</li>
              <li>• Tuesday-Thursday for best engagement</li>
              <li>• Avoid weekends for B2B content</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">🎯 Engagement</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ask questions to encourage comments</li>
              <li>• Respond to all comments within 2 hours</li>
              <li>• Use 3-5 relevant hashtags maximum</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">📈 Growth Strategy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Post 3-4 times per week consistently</li>
              <li>• Share industry insights and case studies</li>
              <li>• Connect with UAV, EV, and defense professionals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold mb-4">Quick LinkedIn Company Page Setup</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4">
            <h4 className="font-semibold mb-2">1. Create Page</h4>
            <p className="text-sm text-gray-600">Set up RP Dynamics Ltd company page</p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold mb-2">2. Add Logo</h4>
            <p className="text-sm text-gray-600">Upload your RP Dynamics logo</p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold mb-2">3. Banner Image</h4>
            <p className="text-sm text-gray-600">Use the LinkedIn banner from social kit</p>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold mb-2">4. Website Link</h4>
            <p className="text-sm text-gray-600">Add https://rpdynamics.co.in</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
