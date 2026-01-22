"use client"

import AdminLayout from "../../components/AdminLayout"
import { PaintBucket, Layers, Brush, CheckCircle2, AlertCircle, Ruler, Percent, Hammer } from "lucide-react"

function Finishing() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Finishing Works</h1>
            <p className="text-sm text-gray-500">Interior and exterior finishing status tracking</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Material Request
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Update Status
            </button>
          </div>
        </div>

        {/* Overall Progress Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Overall Completion</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">45%</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Percent className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 rounded-full bg-indigo-600" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Units Ready</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">12<span className="text-gray-400 text-lg font-normal">/40</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
              3 Units Handed Over
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Quality Issues</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">8</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <AlertCircle className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-red-600">
              Paint defects in Block A
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Teams</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">5</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Hammer className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-orange-600">
              Flooring & Painting Priority
            </div>
          </div>
        </div>

        {/* Detailed Status Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Section 1: Flooring */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">Flooring</h3>
              </div>
              <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full font-medium">In Progress</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Tiling (Common Areas)</span>
                  <span className="text-xs text-gray-500">60%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Wooden Flooring (Master Beds)</span>
                  <span className="text-xs text-gray-500">20%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-xs text-gray-500">Material Stock: <span className="font-medium text-green-600">Adequate</span></p>
              </div>
            </div>
          </div>

          {/* Section 2: Painting */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <PaintBucket className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Painting</h3>
              </div>
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">Started</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Primer Coat</span>
                  <span className="text-xs text-gray-500">80%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Final Coat (Internal)</span>
                  <span className="text-xs text-gray-500">10%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-xs text-gray-500">Next Step: <span className="font-medium text-gray-700">Select Exterior Texture</span></p>
              </div>
            </div>
          </div>

          {/* Section 3: Doors & Windows */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Doors & Windows</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">Delays</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Frame Installation</span>
                  <span className="text-xs text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Shutter Fixing</span>
                  <span className="text-xs text-gray-500">5%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <p className="text-xs text-red-600 font-medium">Hardware delivery delayed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default Finishing