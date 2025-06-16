"use client"
import { PrintButton } from "@/components/print-button"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DesignGuide() {
  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <>
      {/* Download Instructions Banner */}
      <div className="no-print bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 text-center sticky top-0 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            <span className="font-semibold">Ready to download? Click the button to save as PDF →</span>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleDownloadPDF} className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              <Download className="mr-2 h-4 w-4" />
              Save as PDF
            </Button>
            <Link href="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <PrintButton />

      {/* PDF-specific styles */}
      <style jsx global>{`
        @media print {
          body {
            font-size: 12px !important;
            line-height: 1.4 !important;
            color: black !important;
            background: white !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .page-break {
            page-break-before: always;
          }
          
          .avoid-break {
            page-break-inside: avoid;
          }
          
          h1, h2, h3 {
            page-break-after: avoid;
          }
          
          .grid {
            display: block !important;
          }
          
          .grid > div {
            margin-bottom: 1rem;
            break-inside: avoid;
          }
          
          .border {
            border: 1px solid #ccc !important;
          }
          
          .bg-gradient-to-r {
            background: #ea580c !important;
            color: white !important;
          }
          
          .text-orange-600 {
            color: #ea580c !important;
          }
          
          .text-green-600 {
            color: #16a34a !important;
          }
          
          .text-red-600 {
            color: #dc2626 !important;
          }
          
          .bg-orange-50 {
            background: #fff7ed !important;
          }
          
          .bg-blue-50 {
            background: #eff6ff !important;
          }
          
          .shadow-xl {
            box-shadow: none !important;
          }
        }
        
        @page {
          margin: 0.75in;
          size: A4;
        }
      `}</style>

      <div className="min-h-screen bg-white text-black" style={{ fontSize: "11px", lineHeight: "1.3" }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-orange-500 avoid-break">
          <div className="flex items-center gap-4">
            <div className="w-48 h-12 bg-gray-200 rounded flex items-center justify-center text-sm font-bold">
              RP DYNAMICS LTD
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-orange-600">Composite Design Guide & Specifications</h1>
            <p className="text-gray-600">Advanced Carbon Fiber Solutions for UAVs, Defense & EVs</p>
            <p className="text-xs text-gray-500 mt-1">Version 1.0 | December 2024 | www.rpdynamics.co.in</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Introduction Section */}
          <div className="avoid-break">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Why Choose Carbon Fiber Composites?</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Traditional aluminum and steel components are holding back India's next-generation UAVs, defense
                    systems, and electric vehicles. RP Dynamics' advanced carbon fiber composites deliver{" "}
                    <strong>70% weight reduction</strong>, superior thermal management, and rapid local manufacturing -
                    transforming performance while reducing costs.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-orange-50 p-3 rounded-lg border">
                    <div className="text-2xl font-bold text-orange-600">70%</div>
                    <div className="text-xs text-gray-600">Weight Reduction</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border">
                    <div className="text-2xl font-bold text-orange-600">3 Weeks</div>
                    <div className="text-xs text-gray-600">End-to-End Delivery</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border">
                    <div className="text-2xl font-bold text-orange-600">200°C</div>
                    <div className="text-xs text-gray-600">Thermal Resistance</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Material Comparison</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b pb-1">
                    <span>Property</span>
                    <span className="font-semibold">Carbon Fiber vs Aluminum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weight</span>
                    <span className="text-green-600 font-semibold">70% Lighter</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strength</span>
                    <span className="text-green-600 font-semibold">5x Stronger</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thermal Conductivity</span>
                    <span className="text-green-600 font-semibold">90% Lower</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corrosion Resistance</span>
                    <span className="text-green-600 font-semibold">Superior</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lead Time</span>
                    <span className="text-green-600 font-semibold">3 Weeks vs 3-6 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Section */}
          <div className="page-break">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications & Design Parameters</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Material Properties */}
              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  Material Properties
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Density:</span>
                    <span>1.6 g/cm³ (vs 2.7 g/cm³ aluminum)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Tensile Strength:</span>
                    <span>3,500-5,000 MPa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Elastic Modulus:</span>
                    <span>230-400 GPa</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Fiber Volume:</span>
                    <span>55-65%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Void Content:</span>
                    <span>{"<2%"}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Surface Finish:</span>
                    <span>Ra 0.8-1.6 μm</span>
                  </div>
                </div>
              </div>

              {/* Thermal Properties */}
              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  Thermal Properties
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Operating Range:</span>
                    <span>-40°C to +200°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Glass Transition:</span>
                    <span>120-180°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Thermal Conductivity:</span>
                    <span>0.5-1.0 W/m·K</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">CTE (Longitudinal):</span>
                    <span>-0.5 to 0.0 μm/m·°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">CTE (Transverse):</span>
                    <span>25-30 μm/m·°C</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Fire Rating:</span>
                    <span>UL94 V-0 (with additives)</span>
                  </div>
                </div>
              </div>

              {/* Manufacturing Tolerances */}
              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  Manufacturing Tolerances
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Dimensional Accuracy:</span>
                    <span>±0.1mm (±0.004")</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Wall Thickness:</span>
                    <span>0.5-10mm (±0.05mm)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Angular Tolerance:</span>
                    <span>±0.5°</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Flatness:</span>
                    <span>0.1mm per 100mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Hole Diameter:</span>
                    <span>±0.05mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Edge Quality:</span>
                    <span>Smooth, burr-free</span>
                  </div>
                </div>
              </div>

              {/* Quality Standards */}
              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  Quality Standards & Testing
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">ISO Certification:</span>
                    <span>ISO 9001:2015</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Aerospace Standard:</span>
                    <span>AS9100D compliant</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">NDT Testing:</span>
                    <span>Ultrasonic, X-ray</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Mechanical Testing:</span>
                    <span>ASTM D3039, D7078</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Environmental:</span>
                    <span>ASTM D5229, D570</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Documentation:</span>
                    <span>Full traceability & COC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Process & Timeline */}
          <div className="page-break">
            <div className="grid grid-cols-2 gap-6">
              <div className="avoid-break">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Design Process & Timeline</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Consultation & Design Development (Day 1-5)</div>
                      <div className="text-xs text-gray-600">
                        Technical feasibility assessment, material selection, initial design drafts.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Tooling & Setup (Day 6-12)</div>
                      <div className="text-xs text-gray-600">
                        Mold creation, equipment calibration, material procurement.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Production & Delivery (Day 13-21)</div>
                      <div className="text-xs text-gray-600">
                        Manufacturing, quality checks, packaging, and shipment.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Post-Delivery Support</div>
                      <div className="text-xs text-gray-600">Ongoing support and maintenance.</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs mt-3 text-gray-600 bg-blue-50 p-2 rounded border">
                  <strong>Fast Track Option:</strong> If design and tooling are already completed, production and
                  delivery can be achieved in 15 days.
                </div>
              </div>

              {/* Design Guidelines */}
              <div className="avoid-break">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Design Guidelines & Best Practices</h2>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-sm text-gray-800">Fiber Orientation</h4>
                    <p className="text-xs text-gray-600">
                      • 0°/90° for maximum stiffness
                      <br />• ±45° for torsional loads
                      <br />• Quasi-isotropic for balanced properties
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-sm text-gray-800">Wall Thickness</h4>
                    <p className="text-xs text-gray-600">
                      • Minimum: 0.5mm (cosmetic parts)
                      <br />• Standard: 1.0-3.0mm (structural)
                      <br />• Heavy duty: 3.0-10mm (high load)
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-sm text-gray-800">Corner Radii</h4>
                    <p className="text-xs text-gray-600">
                      • Internal: Minimum 2mm radius
                      <br />• External: Minimum 1mm radius
                      <br />• Sharp corners cause stress concentration
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-sm text-gray-800">Draft Angles</h4>
                    <p className="text-xs text-gray-600">
                      • Minimum 1° for easy demolding
                      <br />• 2-3° recommended for complex shapes
                      <br />• Deep cavities may require more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="page-break">
            <div className="bg-gray-50 p-4 rounded-lg border avoid-break">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Case Study: UAV Frame Optimization</h2>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                  <p className="text-xs text-gray-700">
                    Leading UAV manufacturer needed to reduce drone weight by 50% while maintaining structural integrity
                    for extended flight missions in harsh Indian climate conditions. Original aluminum frame was 2.1kg.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">RP Dynamics Solution</h4>
                  <p className="text-xs text-gray-700">
                    Designed custom carbon fiber frame with integrated thermal management. Used [0/±45/90]s layup with
                    honeycomb core in critical areas. Optimized fiber orientation for maximum strength-to-weight ratio.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Technical Specifications</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Material: T700/M21 prepreg</li>
                    <li>• Layup: [0/±45/90]s, 8 plies</li>
                    <li>• Core: Nomex honeycomb 6mm</li>
                    <li>• Finish: UV-resistant clear coat</li>
                    <li>• Weight: 0.7kg (67% reduction)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Results Achieved</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 65% weight reduction (2.1kg → 0.7kg)</li>
                    <li>• Flight time: 45min → 2+ hours</li>
                    <li>• 40% better thermal performance</li>
                    <li>• 15-day delivery vs 4-month import</li>
                    <li>• 30% cost reduction vs imported parts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Application Examples */}
          <div className="page-break">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Examples & Use Cases</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-2">UAV & Drone Applications</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Quadcopter frames (200g-2kg payload)</li>
                  <li>• Fixed-wing fuselage sections</li>
                  <li>• Gimbal mounts & camera housings</li>
                  <li>• Propeller guards & landing gear</li>
                  <li>• Battery compartments</li>
                  <li>• Antenna radomes</li>
                  <li>• Payload bay doors</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-2">EV Battery Solutions</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Battery pack enclosures (12V-800V)</li>
                  <li>• Thermal barrier panels</li>
                  <li>• Fire suppression housings</li>
                  <li>• Cooling duct assemblies</li>
                  <li>• High-voltage cable trays</li>
                  <li>• BMS mounting brackets</li>
                  <li>• Structural battery integration</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 avoid-break">
                <h3 className="font-bold text-gray-900 mb-2">Defense & Aerospace</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Radar-transparent panels</li>
                  <li>• Electronic warfare housings</li>
                  <li>• Missile fin assemblies</li>
                  <li>• Satellite structural components</li>
                  <li>• Ballistic protection panels</li>
                  <li>• Communication equipment cases</li>
                  <li>• Stealth coating substrates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-2 border-orange-500 pt-4 page-break">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-xs text-gray-700 mb-3">
                  Contact our engineering team for a free consultation and custom quote for your project. We provide
                  complete design support from concept to production.
                </p>
                <div className="space-y-1 text-xs">
                  <div>
                    <strong>Email:</strong> info@rpdynamics.co.in
                  </div>
                  <div>
                    <strong>Website:</strong> www.rpdynamics.co.in
                  </div>
                  <div>
                    <strong>Address:</strong> Hyderabad, Telangana, India
                  </div>
                  <div>
                    <strong>Engineering Support:</strong> 24/7 technical assistance
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Design File Requirements</h3>
                <div className="text-xs text-gray-700 space-y-1">
                  <div>
                    <strong>CAD Formats:</strong> STEP, IGES, STL, Solidworks
                  </div>
                  <div>
                    <strong>2D Drawings:</strong> PDF, DWG, DXF
                  </div>
                  <div>
                    <strong>Specifications:</strong> Material requirements, tolerances
                  </div>
                  <div>
                    <strong>Load Cases:</strong> Operating conditions, safety factors
                  </div>
                  <div>
                    <strong>Quantities:</strong> Prototype, pilot, production volumes
                  </div>
                  <div>
                    <strong>Timeline:</strong> Project milestones, delivery requirements
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                © 2024 RP Dynamics Ltd. All rights reserved. | CIN: U25209KA2023PTC123456 |
                <span className="text-orange-600 font-semibold"> Download more resources at www.rpdynamics.co.in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
