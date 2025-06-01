// Google Analytics and Google Ads tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export const GA_TRACKING_ID = "AW-17138037958"

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters: any = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, parameters)
  }
}

// Track conversions
export const trackConversion = (conversionLabel: string, value = 1.0) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/${conversionLabel}`,
      value: value,
      currency: "INR",
    })
  }
}

// Track specific business events
export const trackQuoteRequest = (formData: any) => {
  event("quote_request", {
    event_category: "Lead Generation",
    event_label: "Quote Request Form",
    project_type: formData.projectType,
    company: formData.company,
  })

  trackConversion("quote_conversion", 1.0)
}

export const trackGuideDownload = (formData: any) => {
  event("guide_download", {
    event_category: "Lead Generation",
    event_label: "Design Guide Download",
    company: formData.company,
  })

  trackConversion("download_conversion", 0.5)
}

export const trackEmailClick = () => {
  event("email_click", {
    event_category: "Contact",
    event_label: "Email Button Click",
  })
}

export const trackLinkedInClick = () => {
  event("linkedin_click", {
    event_category: "Social",
    event_label: "LinkedIn Button Click",
  })
}

export const trackCTAClick = (ctaType: string) => {
  event("cta_click", {
    event_category: "Engagement",
    event_label: ctaType,
  })
}
