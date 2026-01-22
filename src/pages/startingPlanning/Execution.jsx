"use client"

import AdminLayout from "../../components/AdminLayout"
import { HardHat, Activity, AlertTriangle, Siren, Camera, ArrowUpRight, CheckCircle2 } from "lucide-react"

function Execution() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Execution Phase</h1>
            <p className="text-sm text-gray-500">Live site monitoring and daily progress tracking</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Site Active
            </span>
            <button className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800">
              + New Daily Report
            </button>
          </div>
        </div>

        {/* Site Vital Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Daily Progress</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">2.5%</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Activity className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              <span className="font-medium">Above Target (2.0%)</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Manpower</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">245</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <HardHat className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-blue-600">
              Total Personnel on Site
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Open Issues</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">3</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-orange-600">
              1 Critical Blocker (Material)
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Safety Score</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">98<span className="text-lg text-gray-400 font-normal">/100</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <Siren className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
              Zero Incidents (30 Days)
            </div>
          </div>
        </div>

        {/* Main Content Areas */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Ongoing Activities Feed */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm md:col-span-2">
            <div className="border-b border-gray-100 px-6 py-4">
              <h3 className="font-semibold text-gray-900">Live Site Activity</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {/* Activity Item 1 */}
              <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-gray-500">10:30 AM</span>
                  <div className="h-full w-0.5 bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">Concrete Pouring - Block B</h4>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">In Progress</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Slab casting for 4th floor initiated. Mix truck #4 arrived.</p>
                </div>
              </div>

              {/* Activity Item 2 */}
              <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-gray-500">09:15 AM</span>
                  <div className="h-full w-0.5 bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">Safety Induction</h4>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">Completed</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Daily toolbox talk completed for 45 new laborers. Topics: Height Safety.</p>
                </div>
              </div>

              {/* Activity Item 3 */}
              <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-gray-500">08:00 AM</span>
                  <div className="h-full w-0.5  bg-transparent"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">Site Opening & Attendance</h4>
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">Completed</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Biometric attendance logged. 245/250 workers present.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Quality & Reports */}
          <div className="space-y-6">

            {/* Quality Check Card */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">Quality Checklist</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Pre-pour Inspection</span>
                  </div>
                  <span className="text-xs font-semibold text-green-700">Pass</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                    <span className="text-sm font-medium text-gray-500">Curing Check (Day 3)</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500">Pending</span>
                </div>
              </div>
            </div>

            {/* Site Gallery (Mock) */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Site Gallery</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <Camera className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4 grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">Photo 1</div>
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">Photo 2</div>
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">Photo 3</div>
                <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">+12 More</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Execution