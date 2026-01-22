"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import AdminDashboard from "./pages/Dashboard"
import Setting from "./pages/Setting"
import "./index.css"

import DefineObject from "./pages/startingPlanning/DefineObject"
import SiteSurvey from "./pages/startingPlanning/SiteSurvey"
import DesignDrawing from "./pages/startingPlanning/DesignDrawing"
import EstimateBudget from "./pages/startingPlanning/EstimateBudget"
import Scheduling from "./pages/startingPlanning/Scheduling"
import ResourcePlanning from "./pages/startingPlanning/ResourcePlanning"
import Execution from "./pages/startingPlanning/Execution"

import FinishingDoorWindow from "./pages/finishing/DoorWindow"
import FinishingFlooring from "./pages/finishing/Flooring"
import FinishingPainting from "./pages/finishing/Painting"
import FinishingPlaster from "./pages/finishing/Plaster"

import SiteWorkFinishing from "./pages/siteWork/Finishing"
import SiteWorkFoundation from "./pages/siteWork/Foundation"
import SiteWorkStructure from "./pages/siteWork/Structure"

import StructureBeams from "./pages/structure/Beams"
import StructureColumns from "./pages/structure/Columns"
import StructureSlab from "./pages/structure/Slab"
import StructureWall from "./pages/structure/Wall"

// Auth wrapper component to protect routes
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const username = localStorage.getItem("user-name")
  const userRole = localStorage.getItem("role")

  // If no user is logged in, redirect to login
  if (!username) {
    return <Navigate to="/login" replace />
  }

  // If this is an admin-only route and user is not admin, redirect to tasks
  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard/admin" replace />
  }

  return children
}

function App() {

  return (
    <Router>
      <Routes>
        {/* Root redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/demo" element={<Demo/>}/> */}

        {/* Dashboard redirect */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/admin" replace />} />

        {/* Admin & User Dashboard route */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/setting"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />

        {/* Starting Planning Routes */}
        <Route
          path="/dashboard/starting-planning/define-object"
          element={
            <ProtectedRoute>
              <DefineObject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/site-survey"
          element={
            <ProtectedRoute>
              <SiteSurvey />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/design-drawing"
          element={
            <ProtectedRoute>
              <DesignDrawing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/estimate-budget"
          element={
            <ProtectedRoute>
              <EstimateBudget />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/scheduling"
          element={
            <ProtectedRoute>
              <Scheduling />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/resource-planning"
          element={
            <ProtectedRoute>
              <ResourcePlanning />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/starting-planning/execution"
          element={
            <ProtectedRoute>
              <Execution />
            </ProtectedRoute>
          }
        />

        {/* Site Work Routes */}
        <Route
          path="/dashboard/site-work/finishing"
          element={
            <ProtectedRoute>
              <SiteWorkFinishing />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/site-work/foundation"
          element={
            <ProtectedRoute>
              <SiteWorkFoundation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/site-work/structure"
          element={
            <ProtectedRoute>
              <SiteWorkStructure />
            </ProtectedRoute>
          }
        />

        {/* Structure Routes */}
        <Route
          path="/dashboard/structure/beams"
          element={
            <ProtectedRoute>
              <StructureBeams />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/structure/columns"
          element={
            <ProtectedRoute>
              <StructureColumns />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/structure/slab"
          element={
            <ProtectedRoute>
              <StructureSlab />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/structure/wall"
          element={
            <ProtectedRoute>
              <StructureWall />
            </ProtectedRoute>
          }
        />

        {/* Finishing Routes */}
        <Route
          path="/dashboard/finishing/door-window"
          element={
            <ProtectedRoute>
              <FinishingDoorWindow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/finishing/flooring"
          element={
            <ProtectedRoute>
              <FinishingFlooring />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/finishing/painting"
          element={
            <ProtectedRoute>
              <FinishingPainting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/finishing/plaster"
          element={
            <ProtectedRoute>
              <FinishingPlaster />
            </ProtectedRoute>
          }
        />

        {/* Backward compatibility redirects */}
        <Route path="/admin/*" element={<Navigate to="/dashboard/admin" replace />} />
        <Route path="/admin/dashboard" element={<Navigate to="/dashboard/admin" replace />} />
        <Route path="/user/*" element={<Navigate to="/dashboard/admin" replace />} />
      </Routes>
    </Router>
  )
}

export default App