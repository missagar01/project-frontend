"use client"

import AdminLayout from "../../components/AdminLayout"
import { Building2, Target, Briefcase, MapPin, CheckCircle2, Layers, Hammer, Zap, PaintBucket, ArrowUpRight } from "lucide-react"

function DefineObject() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Define Object</h1>
            <p className="text-sm text-gray-500">Project specifications and strategic goals</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/20">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-600"></span>
              Planning Phase
            </span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-500 lowercase">id: prj-2026-xh5</span>
          </div>
        </div>

        {/* Top Section: Project Identity & Objectives */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Project Definition Card */}
          <div className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 md:col-span-1">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-violet-50/50 blur-3xl"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600 ring-1 ring-violet-100">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">Project Identity</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Project Name</label>
                  <p className="mt-1 text-lg font-bold text-gray-900 leading-tight">Skyline Residential Complex</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Layers className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">Type</span>
                    <span className="text-sm font-medium text-gray-700">High-rise Residential • Grade A</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <MapPin className="h-4 w-4 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-medium text-gray-700">Sector 45, Gurugram, India</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer accent */}
            <div className="bg-violet-50/50 px-6 py-3 border-t border-violet-100/50 flex items-center justify-between">
              <span className="text-xs font-medium text-violet-700">View Master Plan</span>
              <ArrowUpRight className="h-3 w-3 text-violet-500" />
            </div>
          </div>

          {/* Core Objectives Card */}
          <div className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 md:col-span-2">
            <div className="absolute top-0 right-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-rose-50/50 blur-3xl"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-gray-900">Strategic Objectives</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Complete Phase 1 construction by Q4 2026",
                  "Achieve IGBC Gold Rating for sustainability",
                  "Zero-accident safety record (HSE Compliance)",
                  "Budget adherence within 5% variance",
                  "Smart-home integration in 100% premium units",
                  "90% Occupancy targeted pre-handover"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100/50 transition-colors hover:bg-gray-50 hover:border-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scope of Work Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Briefcase className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900">Scope of Work Breakdown</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Civil Works */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                <Hammer className="h-5 w-5" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">Civil & Structural</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Complete execution of excavation, foundation, RCC superstructure, and masonry works for Towers A, B, & C.
              </p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-xs text-gray-400 font-medium">45% Volume</span>
            </div>

            {/* MEP Services */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">MEP Services</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Installation of HV/LV electrical systems, HVAC plant, firefighting infrastructure, and plumbing grid.
              </p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <span className="text-xs text-gray-400 font-medium">30% Volume</span>
            </div>

            {/* Finishing */}
            <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                <PaintBucket className="h-5 w-5" />
              </div>
              <h4 className="mb-2 font-semibold text-gray-900">Finishing & Interiors</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Premium flooring, wall treatments, facade glazing, woodwork, and landscaping of common areas.
              </p>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <span className="text-xs text-gray-400 font-medium">25% Volume</span>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}

export default DefineObject