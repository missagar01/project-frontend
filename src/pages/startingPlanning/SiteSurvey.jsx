"use client"

import AdminLayout from "../../components/AdminLayout"
import { MapPin, Mountain, TreePine, Droplets, Ruler, Sun } from "lucide-react"

function SiteSurvey() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Site Survey</h1>
            <p className="text-sm text-gray-500">Comprehensive site analysis and environmental data</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Survey Complete
            </span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-500">Ref: SRV-2024-001</span>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Total Area */}
          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50/50 blur-xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Ruler className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Plot Area</p>
                  <h3 className="text-2xl font-bold text-gray-900">45,000 <span className="text-sm font-normal text-gray-500">sq.ft</span></h3>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-blue-700">
                <span className="font-medium">Dimensions:</span> 150ft x 300ft
              </div>
            </div>
          </div>

          {/* Card 2: Soil Type */}
          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-50/50 blur-xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                  <Mountain className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Soil Condition</p>
                  <h3 className="text-2xl font-bold text-gray-900">Silty Sand</h3>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-amber-700">
                <span className="font-medium">Bearing Capacity:</span> 180 kN/m²
              </div>
            </div>
          </div>

          {/* Card 3: Water Table */}
          <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-cyan-50/50 blur-xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Water Table</p>
                  <h3 className="text-2xl font-bold text-gray-900 text-cyan-700">12.5 <span className="text-sm font-normal text-gray-500">meters</span></h3>
                </div>
              </div>
              <div>
                <div className="mt-4 flex items-center gap-2 text-xs text-cyan-700">
                  <span className="font-medium">Quality:</span> B+ (Potable with treatment)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Location Details */}
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <h3 className="font-semibold text-gray-900">Location Coordinates</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Latitude</span>
                  <p className="text-lg font-medium text-gray-900">28.4595° N</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Longitude</span>
                  <p className="text-lg font-medium text-gray-900">77.0266° E</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Elevation</span>
                  <p className="text-lg font-medium text-gray-900">216m MSL</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Zone</span>
                  <p className="text-lg font-medium text-gray-900">Seismic Zone IV</p>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Factors */}
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Environmental Data</h3>
              </div>
            </div>
            <div className="divide-y divide-gray-50">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                    <Sun className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Average Temperature</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">32°C (Summer Peak)</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <TreePine className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Vegetation Density</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Moderate (15 Trees)</span>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Droplets className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Rainfall Average</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">797mm / Year</span>
              </div>
            </div>
          </div>

          {/* Detailed Report Block */}
          <div className="col-span-1 md:col-span-2 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Surveyor's Remarks</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                The site is predominantly flat with a gentle slope towards the south-east corner, which enables natural drainage. Existing boundary walls on the North and West sides are structured but require reinforcement. The soil bearing capacity is sufficient for the proposed high-rise structure with pile foundations recommended. No major underground utilities were detected during the GPR scan, but surface clearance is required for the 15 existing trees concentrated in the central zone.
              </p>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default SiteSurvey