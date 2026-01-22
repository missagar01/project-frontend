"use client"

import AdminLayout from "../../components/AdminLayout"
import { DollarSign, PieChart, TrendingUp, AlertTriangle, Wallet, CreditCard, ArrowDownRight, ArrowUpRight, Coins } from "lucide-react"

function EstimateBudget() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Budget Estimation</h1>
            <p className="text-sm text-gray-500">Financial planning and cost tracking dashboard</p>
          </div>
          <div className="flex gap-2">
            <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Export Report
            </button>
            <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
              + Add Expense
            </button>
          </div>
        </div>

        {/* Financial Overview Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Budget</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">₹4.5 Cr</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Wallet className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-emerald-700">
              <span className="font-medium bg-emerald-100 px-1.5 py-0.5 rounded">Approved</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Utilized Amount</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">₹1.2 Cr</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <CreditCard className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              <span className="text-blue-600 font-medium">26%</span> of total budget
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Projected Cost</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">₹4.8 Cr</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-red-600">
              <ArrowUpRight className="h-3 w-3" />
              <span>Exceeding by ₹30L</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Remaining</p>
                <h3 className="mt-1 text-2xl font-bold text-emerald-700">₹3.3 Cr</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Coins className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
              Available for Phase 2 & 3
            </div>
          </div>
        </div>

        {/* Breakdown Section */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Main Chart/Breakdown Area */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Cost Breakdown by Category</h3>
              <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">View Detailed Sheet</button>
            </div>
            <div className="p-6 space-y-6">
              {/* Item 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Material Cost (Steel, Cement, Aggregates)</span>
                  <span className="text-gray-500">₹65L / ₹1.5 Cr</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Labor & Workforce</span>
                  <span className="text-gray-500">₹30L / ₹80L</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '37%' }}></div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Machinery & Equipment</span>
                  <span className="text-gray-500">₹15L / ₹50L</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Legal & Permissions</span>
                  <span className="text-red-600 font-medium">₹25L / ₹20L (Over Budget)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts / Quick Stats */}
          <div className="space-y-6">
            {/* Alert Card */}
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-4">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div>
                  <h4 className="font-medium text-red-900">Budget Overrun Alert</h4>
                  <p className="mt-1 text-sm text-red-700">Legal expenses have exceeded the allocated budget by 25%. Immediate review required.</p>
                  <button className="mt-3 text-sm font-semibold text-red-800 hover:underline">Review Legal Expenses &rarr;</button>
                </div>
              </div>
            </div>

            {/* Recent Transactions Mini-Table */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-4">
                <h3 className="font-semibold text-gray-900">Recent Outflows</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { to: "Ultratech Cement Ltd", date: "Today, 10:30 AM", amount: "₹4,50,000" },
                  { to: "JCB Crane Services", date: "Yesterday", amount: "₹85,000" },
                  { to: "Site Labor Payment", date: "Jan 18, 2026", amount: "₹1,20,000" },
                  { to: "Shree Steel Traders", date: "Jan 15, 2026", amount: "₹8,00,000" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.to}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">-{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 text-center">
                <button className="text-sm font-medium text-gray-600 hover:text-emerald-600">View All Transactions</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

export default EstimateBudget