"use client"

import AdminLayout from "../../components/AdminLayout"
import { FileCode2, Layers, PenTool, Download, CheckCircle, Clock, AlertCircle, FileImage, FolderOpen } from "lucide-react"

function DesignDrawing() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Design & Drawings</h1>
            <p className="text-sm text-gray-500">Central repository for architectural and structural blueprints</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <h4 className="mr-2 h-4 w-4">+</h4>
            Upload New Revision
          </button>
        </div>

        {/* Status Overview Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Sheets</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">142</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-600">
                <Layers className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              <span className="font-medium text-green-600">12 new</span> this week
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Approved</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">86</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 rounded-full bg-green-500" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">In Review</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">14</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Clock className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '25%' }}></div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Revisions Needed</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">3</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <AlertCircle className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 text-xs text-red-600 font-medium">
              Critical Structural Changes
            </div>
          </div>
        </div>

        {/* Drawing Categories */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Architectural Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PenTool className="h-5 w-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">Architectural</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Master Plan Layout", ver: "v3.2", size: "12 MB", date: "2 days ago", status: "Approved", color: "green" },
                { name: "Floor Plan - Tower A", ver: "v2.1", size: "8 MB", date: "1 week ago", status: "Approved", color: "green" },
                { name: "Facade Elevations", ver: "v1.4", size: "15 MB", date: "Yesterday", status: "In Review", color: "amber" },
                { name: "Landscape Detail", ver: "v1.0", size: "22 MB", date: "Just now", status: "Draft", color: "gray" },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <FileImage className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{item.ver}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-${item.color}-50 text-${item.color}-700 ring-1 ring-inset ring-${item.color}-600/20`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Structural Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-slate-600" />
              <h2 className="text-lg font-semibold text-gray-900">Structural</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Foundation Grid", ver: "v4.0", size: "5 MB", date: "1 month ago", status: "Approved", color: "green" },
                { name: "Column Reinforcement", ver: "v2.2", size: "7 MB", date: "3 days ago", status: "Changes Req", color: "red" },
                { name: "Slab Shuttering Plan", ver: "v2.0", size: "9 MB", date: "1 week ago", status: "Approved", color: "green" },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-600">
                      <FileCode2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{item.ver}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-${item.color}-50 text-${item.color}-700 ring-1 ring-inset ring-${item.color}-600/20`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MEP & Others Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-teal-600" />
              <h2 className="text-lg font-semibold text-gray-900">MEP Services</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Electrical Layout", ver: "v1.5", size: "14 MB", date: "2 weeks ago", status: "In Review", color: "amber" },
                { name: "Plumbing Routing", ver: "v1.2", size: "11 MB", date: "2 weeks ago", status: "Approved", color: "green" },
                { name: "HVAC Ducting", ver: "v1.0", size: "18 MB", date: "3 weeks ago", status: "Approved", color: "green" },
                { name: "Fire Safety Plan", ver: "v2.1", size: "6 MB", date: "Today", status: "Pending", color: "gray" },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-teal-300 hover:shadow-md">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      <Download className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{item.ver}</span>
                        <span>•</span>
                        <span>{item.size}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-${item.color}-50 text-${item.color}-700 ring-1 ring-inset ring-${item.color}-600/20`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default DesignDrawing