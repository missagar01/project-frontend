"use client"

import AdminLayout from "../../components/AdminLayout"
import { Calendar, Clock, BarChart3, AlertCircle, ArrowRight, CheckCircle2, MoreHorizontal, Flag } from "lucide-react"

function Scheduling() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Project Schedule</h1>
            <p className="text-sm text-gray-500">Timeline management and milestone tracking</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar View
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Export Timeline
            </button>
          </div>
        </div>

        {/* Timeline Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Duration</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">18 <span className="text-sm font-normal text-gray-500">Months</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Clock className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              <span className="font-medium text-gray-900">Jan 2026</span> - <span className="font-medium text-gray-900">June 2027</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Progress</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">12%</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <BarChart3 className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 rounded-full bg-blue-600" style={{ width: '12%' }}></div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">5 <span className="text-sm font-normal text-gray-500">Milestones</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Flag className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-amber-700">
              <span className="font-medium">Next:</span> Excavation Complete
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Delays</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">0 <span className="text-sm font-normal text-gray-500">Days</span></h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
              On Track
            </div>
          </div>
        </div>

        {/* Main Timeline / Gantt Area */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4 flex flex-row items-center justify-between">
            <h3 className="font-semibold text-gray-900">Phase 1: Foundation & Structure</h3>
            <span className="text-xs font-medium text-gray-500">Q1 2026 - Q2 2026</span>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Timeline Item 1 */}
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-3">
                  <h4 className="font-medium text-sm text-gray-900">Site Clearing & Excavation</h4>
                  <p className="text-xs text-gray-500">Jan 10 - Feb 15</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="relative h-8 w-full bg-gray-100 rounded-md overflow-hidden">
                    {/* Progress Bar (Visual Gantt Bar) */}
                    <div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-md flex items-center px-3" style={{ width: '60%' }}>
                      <span className="text-[10px] font-semibold text-white">In Progress (60%)</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Active</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-3">
                  <h4 className="font-medium text-sm text-gray-900">Foundation Pouring</h4>
                  <p className="text-xs text-gray-500">Feb 16 - Mar 01</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="relative h-8 w-full bg-gray-100 rounded-md overflow-hidden">
                    <div className="absolute top-0 left-[35%] h-full bg-gray-300 rounded-md border border-gray-400 border-dashed" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Scheduled</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-12 md:col-span-3">
                  <h4 className="font-medium text-sm text-gray-900">Plinth Beam Construction</h4>
                  <p className="text-xs text-gray-500">Mar 02 - Mar 20</p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="relative h-8 w-full bg-gray-100 rounded-md overflow-hidden">
                    <div className="absolute top-0 left-[50%] h-full bg-gray-300 rounded-md border border-gray-400 border-dashed" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-2 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Scheduled</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center justify-center mx-auto">
              View Full Gantt Chart <ArrowRight className="ml-1 h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Milestone List */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Critical Milestones</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Excavation Completion</h4>
                  <p className="text-xs text-gray-500">Feb 15, 2026 • 24 Days Remaining</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Basement Slab Casting</h4>
                  <p className="text-xs text-gray-500">Mar 30, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-orange-900">Action Required</h3>
            </div>
            <p className="text-sm text-orange-800 mb-4">
              Material delivery for "Reinforcement Steel" is pending confirmation. Delay may impact "Foundation Pouring" start date.
            </p>
            <button className="text-xs font-medium bg-white border border-orange-200 text-orange-700 px-3 py-1.5 rounded-md hover:bg-orange-50">
              Check Material Status
            </button>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}

export default Scheduling