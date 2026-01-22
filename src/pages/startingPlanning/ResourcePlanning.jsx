"use client"

import AdminLayout from "../../components/AdminLayout"
import { Users, Truck, Package, AlertTriangle, Zap, Hammer, HardHat, TrendingUp, CircleDollarSign } from "lucide-react"

function ResourcePlanning() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Resource Planning</h1>
            <p className="text-sm text-gray-500">Allocation and management of manpower, machinery, and materials</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Generate Report
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              + Allocate Resource
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Workforce</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">245</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-blue-600">
              <span className="font-medium">92%</span> Attendance Today
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Machinery</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">18<span className="text-gray-400 text-lg font-normal">/22</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <Truck className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-orange-600">
              4 Units in Maintenance
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Material Stock</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">Healthy</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Package className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-emerald-600">
              Stock sufficient for 15 days
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Daily Cost</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">₹8.5L</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <CircleDollarSign className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-purple-600">
              Within Budget Limits
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Section 1: Labor Allocation */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <HardHat className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Labor Allocation</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">Shift A: 08:00 - 17:00</span>
            </div>
            <div className="p-6 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Masons (Grade A)</span>
                  <span className="text-sm text-gray-500">45/50</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Helpers & Unskilled</span>
                  <span className="text-sm text-gray-500">120/120</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Carpenters</span>
                  <span className="text-sm text-gray-500">18/25</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Bar Benders</span>
                  <span className="text-sm text-gray-500">30/30</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Critical Alerts / Shortages */}
          <div className="rounded-xl border border-red-100 bg-red-50/30 p-6 shadow-sm lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <h3 className="font-semibold text-red-900">Critical Shortages</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                <h4 className="text-sm font-medium text-gray-900">Electricians (Specialized)</h4>
                <p className="text-xs text-gray-500 mt-1">Shortage of 5 skilled electricians for Tower B wiring.</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-semibold text-red-600">High Priority</span>
                  <button className="text-xs text-blue-600 hover:underline">Request Hiring</button>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                <h4 className="text-sm font-medium text-gray-900">JCB Excavator</h4>
                <p className="text-xs text-gray-500 mt-1">Unit #4 breakdown. Replacement needed for Sector 2.</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-semibold text-orange-600">Medium Priority</span>
                  <button className="text-xs text-blue-600 hover:underline">Contact Vendor</button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Material Inventory Status */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-3">
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Material Inventory Status</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Cement (Bags)</span>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded">Adequate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
                <p className="text-xs text-gray-500 mt-1">Daily consumption: ~150 bags</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Steel (Tonnes)</span>
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Low</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">45.0</p>
                <p className="text-xs text-gray-500 mt-1">Re-order level: 40.0 Tonnes</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Sand (Cu.ft)</span>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded">Adequate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">5,000</p>
                <p className="text-xs text-gray-500 mt-1">Next delivery: Tomorrow</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Bricks (Nos)</span>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded">Adequate</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">25k</p>
                <p className="text-xs text-gray-500 mt-1">Full stack available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default ResourcePlanning