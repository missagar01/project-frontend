"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { CheckSquare, ClipboardList, LogOut, Menu, Database, ChevronDown, ChevronRight, Zap, Settings, Home, HardHat, ChartColumnStacked, LayoutPanelTop, BookmarkCheck } from 'lucide-react'

export default function AdminLayout({ children, darkMode, toggleDarkMode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState({})
  const [username, setUsername] = useState("")
  const [userRole, setUserRole] = useState("")

  // Check authentication on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('user-name')
    const storedRole = localStorage.getItem('role')

    if (!storedUsername) {
      // Redirect to login if not authenticated
      navigate("/login")
      return
    }

    setUsername(storedUsername)
    setUserRole(storedRole || "user")
  }, [navigate])

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user-name')
    localStorage.removeItem('role')
    navigate("/login")
  }

  // Filter dataCategories based on user role
  const startingPlanningItems = [
    { id: "define", name: "Define Object", link: "/dashboard/starting-planning/define-object" },
    { id: "site", name: "Site Survey", link: "/dashboard/starting-planning/site-survey" },
    { id: "design", name: "Design Drawing", link: "/dashboard/starting-planning/design-drawing" },
    { id: "estimate", name: "Estimate Budget", link: "/dashboard/starting-planning/estimate-budget" },
    { id: "scheduling", name: "Scheduling", link: "/dashboard/starting-planning/scheduling" },
    { id: "resource", name: "Resource Planning", link: "/dashboard/starting-planning/resource-planning" },
    { id: "execution", name: "Execution", link: "/dashboard/starting-planning/execution" },
  ]

  const siteWorkItems = [
    { id: "foundation", name: "Foundation", link: "/dashboard/site-work/foundation" },
    { id: "structure", name: "Structure", link: "/dashboard/site-work/structure" },
    { id: "finishing", name: "Finishing", link: "/dashboard/site-work/finishing" },
  ]

  const structureItems = [
    { id: "beams", name: "Beams", link: "/dashboard/structure/beams" },
    { id: "columns", name: "Columns", link: "/dashboard/structure/columns" },
    { id: "slab", name: "Slab", link: "/dashboard/structure/slab" },
    { id: "wall", name: "Wall", link: "/dashboard/structure/wall" },
  ]

  const finishingItems = [
    { id: "door-window", name: "Door Window", link: "/dashboard/finishing/door-window" },
    { id: "flooring", name: "Flooring", link: "/dashboard/finishing/flooring" },
    { id: "painting", name: "Painting", link: "/dashboard/finishing/painting" },
    { id: "plaster", name: "Plaster", link: "/dashboard/finishing/plaster" },
  ]

  // Update the routes array based on user role
  const routes = [
    {
      href: "/dashboard/admin",
      label: "Dashboard",
      icon: Home,
      active: location.pathname === "/dashboard/admin",
      showFor: ["admin", "user"] // Show for both roles
    },
    {
      href: "#",
      label: "Starting Planning",
      icon: HardHat,
      active: location.pathname.includes("/dashboard/starting-planning"),
      submenu: true,
      subItems: startingPlanningItems,
      showFor: ["admin", "user"] // Show for both roles
    },
    {
      href: "#",
      label: "Site Work",
      icon: ChartColumnStacked,
      active: location.pathname.includes("/dashboard/site-work"),
      submenu: true,
      subItems: siteWorkItems,
      showFor: ["admin", "user"] // Show for both roles
    },

    {
      href: "#",
      label: "Structure",
      icon: LayoutPanelTop,
      active: location.pathname.includes("/dashboard/structure"),
      submenu: true,
      subItems: structureItems,
      showFor: ["admin", "user"] // Show for both roles
    },
    {
      href: "#",
      label: "Finishing",
      icon: BookmarkCheck,
      active: location.pathname.includes("/dashboard/finishing"),
      submenu: true,
      subItems: finishingItems,
      showFor: ["admin", "user"] // Show for both roles
    },
    {
      href: "/dashboard/setting",
      label: "Settings",
      icon: Settings,
      active: location.pathname.includes("/dashboard/setting"),

      showFor: ["admin"] // Only show for admin
    },
  ]


  //   const getAccessibleDepartments = () => {
  //     const userRole = localStorage.getItem('role') || 'user'
  //     return dataCategories.filter(cat =>
  //       !cat.showFor || cat.showFor.includes(userRole)
  //     )
  //   }

  // Filter routes based on user role
  const getAccessibleRoutes = () => {
    const userRole = localStorage.getItem('role') || 'user'
    return routes.filter(route =>
      route.showFor.includes(userRole)
    )
  }

  // Expand submenus for routes that match the current location
  useEffect(() => {
    const newOpen = {}
    routes.forEach((r) => {
      if (r.submenu && r.active) {
        newOpen[r.label] = true
      }
    })
    setOpenSubmenus((prev) => ({ ...prev, ...newOpen }))
  }, [location.pathname])

  // Get accessible routes and departments
  const accessibleRoutes = getAccessibleRoutes()
  //   const accessibleDepartments = getAccessibleDepartments()

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-gray-200 bg-white md:flex md:flex-col">
        <div className="flex h-14 items-center border-b border-gray-100 px-6">
          <Link to="/dashboard/admin" className="flex items-center gap-2 font-bold text-gray-900">
            <div className="h-6 w-6 rounded bg-red-600 text-white flex items-center justify-center">
              <span className="text-xs">S</span>
            </div>
            <span>SRM Projects</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {accessibleRoutes.map((route) => (
              <li key={route.label}>
                {route.submenu ? (
                  <div>
                    <button
                      onClick={() => setOpenSubmenus((prev) => ({ ...prev, [route.label]: !prev[route.label] }))}
                      className={`group flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all ${route.active
                        ? "bg-red-50 text-red-700"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <route.icon className={`h-4 w-4 ${route.active ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"}`} />
                        {route.label}
                      </div>
                      {openSubmenus[route.label] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </button>
                    {openSubmenus[route.label] && route.subItems && (
                      <ul className="mt-1 ml-4 space-y-1 border-l border-gray-100 pl-3">
                        {route.subItems.map((category) => (
                          <li key={category.id}>
                            <Link
                              to={category.link}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${location.pathname === category.link
                                ? "bg-red-50 text-red-700 font-medium border-r-2 border-red-600"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={route.href}
                    className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all ${route.active
                      ? "bg-red-50 text-red-700"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    <route.icon className={`h-4 w-4 ${route.active ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"}`} />
                    {route.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">{username ? username.charAt(0).toUpperCase() : 'U'}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {username || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {userRole === "admin" ? "Administrator" : "User"}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {toggleDarkMode && (
                <button
                  onClick={toggleDarkMode}
                  className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
                >
                  {darkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                  <span className="sr-only">{darkMode ? "Light mode" : "Dark mode"}</span>
                </button>
              )}
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                title="Log out"
              >
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute left-4 top-3 z-50 text-gray-600 p-2 rounded-md hover:bg-gray-100"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </button>

      {/* Mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl">
            <div className="flex h-14 items-center border-b border-gray-100 px-6">
              <Link
                to="/dashboard/admin"
                className="flex items-center gap-2 font-bold text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="h-6 w-6 rounded bg-red-600 text-white flex items-center justify-center">
                  <span className="text-xs">S</span>
                </div>
                <span>SRM Projects</span>
              </Link>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1">
                {accessibleRoutes.map((route) => (
                  <li key={route.label}>
                    {route.submenu ? (
                      <div>
                        <button
                          onClick={() => setOpenSubmenus((prev) => ({ ...prev, [route.label]: !prev[route.label] }))}
                          className={`group flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all ${route.active
                            ? "bg-red-50 text-red-700"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <route.icon className={`h-4 w-4 ${route.active ? "text-red-600" : "text-gray-400"}`} />
                            {route.label}
                          </div>
                          {openSubmenus[route.label] ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>
                        {openSubmenus[route.label] && route.subItems && (
                          <ul className="mt-1 ml-4 space-y-1 border-l border-gray-100 pl-3">
                            {route.subItems.map((category) => (
                              <li key={category.id}>
                                <Link
                                  to={category.link}
                                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${location.pathname === category.link
                                    ? "bg-red-50 text-red-700 font-medium border-r-2 border-red-600"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={route.href}
                        className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all ${route.active
                          ? "bg-red-50 text-red-700"
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <route.icon className={`h-4 w-4 ${route.active ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"}`} />
                        {route.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{username ? username.charAt(0).toUpperCase() : 'U'}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {username || "User"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {userRole === "admin" ? "Administrator" : "User"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="sr-only">Log out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
          <div className="flex md:hidden w-8"></div>
          <h1 className="text-2xl font-bold text-gray-900">SRM Projects</h1>
          <div className="w-8"></div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          <div className="mx-auto max-w-7xl animate-in fade-in duration-500">
            {children}
          </div>
        </main>
        <footer className="border-t border-gray-200 bg-white text-center">
          <p className="text-sm text-gray-500">
            Powered by <a href="https://www.botivate.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-red-600 hover:underline">Botivate</a>
          </p>
        </footer>
      </div>

    </div>
  )
}