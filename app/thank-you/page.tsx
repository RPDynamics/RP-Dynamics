import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Quote Request!</h1>

        <p className="text-gray-600 mb-6">
          We've received your project details and our engineering team will contact you within 24 hours to discuss your
          requirements.
        </p>

        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            <p>
              <strong>What happens next?</strong>
            </p>
            <ul className="text-left mt-2 space-y-1">
              <li>• Technical feasibility review</li>
              <li>• Custom quote preparation</li>
              <li>• Direct contact within 24 hours</li>
            </ul>
          </div>

          <Link href="/">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Return to Homepage
            </Button>
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Questions? Email us directly at{" "}
          <a href="mailto:info@rpdynamics.co.in" className="text-orange-600 hover:text-orange-700">
            info@rpdynamics.co.in
          </a>
        </p>
      </div>
    </div>
  )
}
