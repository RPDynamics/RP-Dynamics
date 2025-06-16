import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center justify-center">
          <img
            src="/images/rp-dynamics-logo.png"
            alt="RP Dynamics Ltd Logo"
            className="h-8 sm:h-10 w-auto brightness-0"
          />
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600">Last Updated: June 2, 2024</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">1. Introduction</h2>
          <p>
            RP Dynamics Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal
            data. This privacy policy will inform you about how we look after your personal data when you visit our
            website at
            <Link href="https://rpdynamics.co.in" className="text-orange-600 hover:text-orange-700">
              {" "}
              rpdynamics.co.in{" "}
            </Link>
            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped
            together as follows:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>
              <strong>Identity Data</strong> includes first name, last name, company name, and title.
            </li>
            <li>
              <strong>Contact Data</strong> includes email address, telephone numbers, and business address.
            </li>
            <li>
              <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time
              zone setting and location, browser plug-in types and versions, operating system and platform, and other
              technology on the devices you use to access this website.
            </li>
            <li>
              <strong>Usage Data</strong> includes information about how you use our website and services.
            </li>
            <li>
              <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from
              us and our third parties and your communication preferences.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3. How We Collect Your Personal Data</h2>
          <p>We use different methods to collect data from and about you including through:</p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>
              <strong>Direct interactions.</strong> You may give us your Identity and Contact Data by filling in forms
              or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide
              when you:
            </li>
            <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
              <li>Request a quote or information about our products or services;</li>
              <li>Download our design guides or case studies;</li>
              <li>Subscribe to our publications;</li>
              <li>Request marketing to be sent to you;</li>
              <li>Provide us with feedback or contact us.</li>
            </ul>
            <li>
              <strong>Automated technologies or interactions.</strong> As you interact with our website, we may
              automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this
              personal data by using cookies, server logs and other similar technologies.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
            in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>
              Where it is necessary for our legitimate interests (or those of a third party) and your interests and
              fundamental rights do not override those interests.
            </li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          <p>
            Generally, we do not rely on consent as a legal basis for processing your personal data although we will get
            your consent before sending third party direct marketing communications to you via email or text message.
            You have the right to withdraw consent to marketing at any time by contacting us.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">5. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally
            lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your
            personal data to those employees, agents, contractors and other third parties who have a business need to
            know. They will only process your personal data on our instructions and they are subject to a duty of
            confidentiality.
          </p>
          <p>
            We have put in place procedures to deal with any suspected personal data breach and will notify you and any
            applicable regulator of a breach where we are legally required to do so.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">6. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
            collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
            reporting requirements. We may retain your personal data for a longer period in the event of a complaint or
            if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">7. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data,
            including the right to:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          <p>If you wish to exercise any of the rights set out above, please contact us at info@rpdynamics.co.in.</p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">8. Cookies</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
            cookies. If you disable or refuse cookies, please note that some parts of this website may become
            inaccessible or not function properly.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">9. Third-Party Links</h2>
          <p>
            This website may include links to third-party websites, plug-ins and applications. Clicking on those links
            or enabling those connections may allow third parties to collect or share data about you. We do not control
            these third-party websites and are not responsible for their privacy statements. When you leave our website,
            we encourage you to read the privacy policy of every website you visit.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">10. Changes to the Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">11. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
          <p className="mt-4">
            <strong>RP Dynamics Ltd</strong>
            <br />
            Email: info@rpdynamics.co.in
            <br />
            Address: Hyderabad, Telangana, India
          </p>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2024 RP Dynamics Ltd. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-orange-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
