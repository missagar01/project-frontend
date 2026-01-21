"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../redux/slice/loginSlice"
import { LoginCredentialsApi } from "../redux/api/loginApi"

const LoginPage = () => {
  const navigate = useNavigate()
    const { isLoggedIn,userData } = useSelector((state) => state.login);
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
 // Function to check if a role is any variation of "inactive"
  // const isInactiveRole = (role) => {
  //   if (!role) return false;

  //   // Convert to lowercase
  //   const normalizedRole = String(role).toLowerCase().trim();

  //   // Check for different variations of "inactive" status
  //   return normalizedRole === "inactive" ||
  //     normalizedRole === "in active" ||
  //     normalizedRole === "inactiv" ||
  //     normalizedRole === "in activ";
  // }


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




 




 


  // Fetch master data on component mount
  // useEffect(() => {
  //   const fetchMasterData = async () => {
  //     const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzXzqnKmbeXw3i6kySQcBOwxHQA7y8WBFfEe69MPbCR-jux0Zte7-TeSKi8P4CIFkhE/exec"

  //     try {
  //       setIsDataLoading(true)

  //       // Get the spreadsheet ID from your Apps Script
  //       const SPREADSHEET_ID = "1pjNOV1ogLtiMm-Ow9_UVbsd3oN52jA5FdLGLgKwqlcw"

  //       // Construct the URL to read the sheet data directly
  //       const sheetUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=master`

  //       const response = await fetch(sheetUrl)
  //       const text = await response.text()

  //       // Parse the Google Sheets JSON response
  //       const jsonString = text.substring(47).slice(0, -2) // Remove Google's wrapper
  //       const data = JSON.parse(jsonString)

  //       // Create userCredentials and userRoles objects from the sheet data
  //       const userCredentials = {}
  //       const userRoles = {}

  //       // Process the data rows (skip header row if it exists)
  //       if (data.table && data.table.rows) {
  //         console.log("Raw sheet data:", data.table.rows);

  //         // Start from index 1 to skip header row (adjust if needed)
  //         for (let i = 1; i < data.table.rows.length; i++) {
  //           const row = data.table.rows[i]

  //           // Extract data from columns C, D, E (indices 2, 3, 4)
  //           const username = row.c[2] ? String(row.c[2].v || '').trim().toLowerCase() : '';
  //           const password = row.c[3] ? String(row.c[3].v || '').trim() : '';
  //           const role = row.c[4] ? String(row.c[4].v || '').trim() : 'user';

  //           console.log(`Processing row ${i}: username=${username}, password=${password}, role=${role}`);

  //           // Only process if we have both username and password
  //           if (username && password && password.trim() !== '') {
  //             // Check if the role is any kind of inactive status
  //             if (isInactiveRole(role)) {
  //               console.log(`Skipping inactive user: ${username} with role: ${role}`);
  //               continue; // Skip this user
  //             }

  //             // Store normalized role for comparison
  //             const normalizedRole = role.toLowerCase();

  //             // Store in our maps
  //             userCredentials[username] = password;
  //             userRoles[username] = normalizedRole;

  //             console.log(`Added credential for: ${username}, Role: ${normalizedRole}`);
  //           }
  //         }
  //       }

  //       setMasterData({ userCredentials, userRoles })
  //       console.log("Loaded credentials from master sheet:", Object.keys(userCredentials).length)
  //       console.log("Credentials map:", userCredentials)
  //       console.log("Roles map:", userRoles)

  //       // Debug - check admin roles specifically
  //       const adminUsers = Object.entries(userRoles)
  //         .filter(([, role]) => role === 'admin')
  //         .map(([username]) => username);
  //       console.log("Admin users found:", adminUsers);

  //     } catch (error) {
  //       console.error("Error Fetching Master Data:", error)

  //       // Fallback: Try the alternative method using your Apps Script
  //       try {
  //         console.log("Trying alternative method...");
  //         const fallbackResponse = await fetch(SCRIPT_URL, {
  //           method: 'GET'
  //         })

  //         if (fallbackResponse.ok) {
  //           console.log("Apps Script is accessible, but getMasterData action needs to be implemented");
  //           showToast("Unable to load user data. Please contact administrator.", "error")
  //         }
  //       } catch (fallbackError) {
  //         console.error("Fallback also failed:", fallbackError);
  //       }

  //       showToast(`Network error: ${error.message}. Please try again later.`, "error")
  //     } finally {
  //       setIsDataLoading(false)
  //     }
  //   }

  //   fetchMasterData()
  // }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsLoginLoading(true)

  //   try {
  //     const trimmedUsername = formData.username.trim().toLowerCase()
  //     const trimmedPassword = formData.password.trim()

  //     console.log("Login Attempt Details:")
  //     console.log("Entered Username:", trimmedUsername)
  //     console.log("Entered Password:", trimmedPassword) // For debugging (remove in production)
  //     console.log("Available Credentials Count:", Object.keys(masterData.userCredentials).length)
  //     console.log("Current userCredentials:", masterData.userCredentials)
  //     console.log("Current userRoles:", masterData.userRoles)

  //     // Check if the username exists in our credentials map
  //     if (trimmedUsername in masterData.userCredentials) {
  //       const correctPassword = masterData.userCredentials[trimmedUsername]
  //       const userRole = masterData.userRoles[trimmedUsername]

  //       console.log("Found user in credentials map")
  //       console.log("Expected Password:", correctPassword)
  //       console.log("Password Match:", correctPassword === trimmedPassword)
  //       console.log("User Role:", userRole)

  //       // Check if password matches
  //       if (correctPassword === trimmedPassword) {
  //         // Store user info in sessionStorage
  //         sessionStorage.setItem('username', trimmedUsername)

  //         // Check if user is admin - explicitly compare with the string "admin"
  //         const isAdmin = userRole === "admin";
  //         console.log(`User ${trimmedUsername} is admin: ${isAdmin}`);

  //         // Set role based on the fetched role
  //         sessionStorage.setItem('role', isAdmin ? 'admin' : 'user')

  //         // For admin users, we don't want to restrict by department
  //         if (isAdmin) {
  //           sessionStorage.setItem('department', 'all') // Admin sees all departments
  //           sessionStorage.setItem('isAdmin', 'true') // Additional flag to ensure admin permissions
  //           console.log("ADMIN LOGIN - Setting full access permissions");
  //         } else {
  //           sessionStorage.setItem('department', trimmedUsername)
  //           sessionStorage.setItem('isAdmin', 'false')
  //           console.log("USER LOGIN - Setting restricted access");
  //         }

  //         // Navigate to dashboard
  //         navigate("/dashboard/admin")

  //         showToast(`Login successful. Welcome, ${trimmedUsername}!`, "success")
  //         return
  //       } else {
  //         showToast("Username or password is incorrect. Please try again.", "error")
  //       }
  //     } else {
  //       showToast("Username or password is incorrect. Please try again.", "error")
  //     }

  //     // If we got here, login failed
  //     console.error("Login Failed", {
  //       usernameExists: trimmedUsername in masterData.userCredentials,
  //       passwordMatch: (trimmedUsername in masterData.userCredentials) ?
  //         "Password did not match" : 'Username not found',
  //       userRole: masterData.userRoles[trimmedUsername] || 'No role'
  //     })
  //   } catch (error) {
  //     console.error("Login Error:", error)
  //     showToast(`Login failed: ${error.message}. Please try again.`, "error")
  //   } finally {
  //     setIsLoginLoading(false)
  //   }
  // }

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-white opacity-90">
              <path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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