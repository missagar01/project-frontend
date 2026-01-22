"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Building2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../redux/slice/loginSlice"
import { LoginCredentialsApi } from "../redux/api/loginApi"

const LoginPage = () => {
  const navigate = useNavigate()
  const { isLoggedIn, userData } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [masterData, setMasterData] = useState({
    userCredentials: {}, // Object where keys are usernames and values are passwords
    userRoles: {} // Object where keys are usernames and values are roles
  })
  const [formData, setFormData] = useState({
    username: "admin",
    password: "admin123",
  })
  const [toast, setToast] = useState({ show: false, message: "", type: "" })


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoginLoading(true)

    const trimmedUsername = String(formData.username || "").trim()
    const enteredPassword = String(formData.password || "")

    // Default local admin credentials
    if (trimmedUsername === "admin" && enteredPassword === "admin123") {
      localStorage.setItem('user-name', 'admin')
      localStorage.setItem('role', 'admin')
      setIsLoginLoading(false)
      navigate("/dashboard/admin")
      showToast("Login successful. Welcome, admin!", "success")
      return
    }

    // Fallback to existing login flow (API / Redux) if not default admin
    dispatch(loginUser(formData))
    setIsLoginLoading(false)
  }

  useEffect(() => {
    if (isLoggedIn && userData) {
      localStorage.setItem('user-name', userData.user_name);
      localStorage.setItem('role', userData.role);
      navigate("/dashboard/admin")
    }
  }, [isLoggedIn, userData, navigate]);












  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const showToast = (message, type) => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" })
    }, 5000) // Toast duration
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-10">
          <div className="text-4xl font-extrabold tracking-tight">SRM Projects</div>
          <p className="mt-4 text-indigo-100 text-center max-w-xs">Manage and show all civil projects and Current Status</p>
          <div className="mt-8 w-48 h-48 rounded-xl bg-white/10 flex items-center justify-center">
            <Building2 className="w-20 h-20 text-white opacity-90" strokeWidth={1.5} />
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
            {/* <p className="text-sm text-gray-500 mt-1">Sign in to continue to <span className="font-semibold">SRM Projects</span></p> */}
            <p className="text-sm text-gray-500 mt-2">Default credentials: <span className="font-semibold">admin / admin123</span></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="admin"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <div className="mt-2 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-key"></i>
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="admin123"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                Remember me
              </label>
              <a className="text-sm text-indigo-600 hover:underline" href="#">Forgot?</a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold disabled:opacity-60"
                disabled={isLoginLoading || isDataLoading}
              >
                {isLoginLoading ? "Logging in..." : isDataLoading ? "Loading..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <span>Need an account? </span>
            <a href="#" className="text-indigo-600 font-medium hover:underline">Contact admin</a>
          </div>

          {/* Toast Notification */}
          {toast.show && (
            <div className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${toast.type === "success"
              ? "bg-green-100 text-green-800 border-l-4 border-green-500"
              : "bg-red-100 text-red-800 border-l-4 border-red-500"
              }`}>
              {toast.message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage