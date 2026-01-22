"use client"

import AdminLayout from "../../components/AdminLayout"
import { Component, Construction, Ruler, Box, ArrowUpRight, AlertTriangle, Cuboid, Layers } from "lucide-react"

function Structure() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Structure Progress</h1>
            <p className="text-sm text-gray-500">Columns, beams, and slab construction tracking</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Ruler className="mr-2 h-4 w-4" />
              View Drawings
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Log New Casting
            </button>
          </div>
        </div>

        {/* Structure Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Structure Complete</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">35%</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Construction className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-indigo-600">
              4th Floor Slab in Progress
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Columns Cast</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">48<span className="text-gray-400 text-lg font-normal">/120</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Cuboid className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-blue-600">
              12 Columns ready for curing
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Beams Ready</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">32<span className="text-gray-400 text-lg font-normal">/145</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Component className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-amber-600">
              Reinforcement checks pending for 8
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Slab Cycles</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">3 <span className="text-sm font-normal text-gray-500">Floors</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
                <Layers className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              Avg. Cycle Time: 12 Days
            </div>
          </div>
        </div>

        {/* Detailed Structure Status */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Section 1: Columns */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Cuboid className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Columns</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">Active</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Reinforcement Binding</span>
                  <span className="text-xs text-gray-500">45%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Shuttering</span>
                  <span className="text-xs text-gray-500">30%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-xs text-gray-500">Curing Status: <span className="font-medium text-green-600">12 Columns Active</span></p>
              </div>
            </div>
          </div>

          {/* Section 2: Beams & Slabs */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Beams & Slabs</h3>
              </div>
              <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-medium">Critical Path</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Formwork (Slab 4)</span>
                  <span className="text-xs text-gray-500">80%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Electrical Conduiting</span>
                  <span className="text-xs text-gray-500">10%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-indigo-300 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-xs text-gray-500">Target Casting Date: <span className="font-medium text-gray-900">Sept 15, 2026</span></p>
              </div>
            </div>
          </div>

          {/* Section 3: Material & Quality */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Material & Quality</h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Cube Test (7 Days)</span>
                </div>
                <span className="text-xs font-semibold text-green-700">Passed (28MPa)</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50 border border-amber-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">Steel (12mm) Stock</span>
                </div>
                <span className="text-xs font-semibold text-amber-700">Low Stock</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <p className="text-xs text-amber-600 font-medium">Re-order Steel immediately for Slab 5</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default Structure