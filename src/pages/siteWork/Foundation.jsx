"use client"

import AdminLayout from "../../components/AdminLayout"
import { Shovel, HardHat, LandPlot, AlertTriangle, Cuboid, Ruler, BoxSelect, Drill } from "lucide-react"

function Foundation() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Foundation Works</h1>
            <p className="text-sm text-gray-500">Excavation, footing, and plinth beam tracking</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <LandPlot className="mr-2 h-4 w-4" />
              Soil Report
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700">
              Update Progress
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Excavation</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">85%</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Shovel className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-amber-700">
              <span className="font-medium">1200 / 1400</span> Cu.m Moved
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Concrete Poured</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">450 <span className="text-sm font-normal text-gray-500">m³</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
                <Cuboid className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              Footings Completed: 18/24
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Steel Tied</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">12 <span className="text-sm font-normal text-gray-500">Tons</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Drill className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-blue-600">
              Reinforcement for Plinth Ready
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Safety Incidents</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">0</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <HardHat className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
              Deep Excavation Safety Active
            </div>
          </div>
        </div>

        {/* Detailed Stages */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* Stage 1: Excavation & Layout */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BoxSelect className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Box Excavation</h3>
              </div>
              <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-medium">Nearing Completion</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">PCC Bedding</span>
                  <span className="text-xs text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Anti-Termite Treatment</span>
                  <span className="text-xs text-gray-500">100%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2: Footing & Columns */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Cuboid className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">RCC Footings</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">In Progress</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Iso-Footing Casting</span>
                  <span className="text-xs text-gray-500">75%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Pedestal Column Start</span>
                  <span className="text-xs text-gray-500">40%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3: Plinth Work */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Plinth Level</h3>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">Not Started</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg border border-orange-100 mb-4">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div className="text-sm text-orange-800">
                  <p className="font-medium">Site Clearance Pending</p>
                  <p className="text-xs">Debris removal required in Sector 4</p>
                </div>
              </div>
              <button className="w-full py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                View Plinth Drawings
              </button>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default Foundation