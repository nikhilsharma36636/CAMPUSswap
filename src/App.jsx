import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import { ShoppingBag, ArrowLeft, Construction } from 'lucide-react';

// Phase 1 Placeholder for upcoming pages so internal links are testable
function PhasePlaceholder({ title, description, nextPhase }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto mb-4">
        <ShoppingBag className="w-8 h-8" />
      </div>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 mb-3">
        CampusSwap Architecture Ready
      </span>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">{description}</p>
      
      <div className="bg-white p-6 rounded-2xl border border-gray-200 max-w-md mx-auto shadow-sm space-y-3 text-left text-xs text-gray-600">
        <p className="font-bold text-gray-900 flex items-center gap-1.5">
          <Construction className="w-4 h-4 text-amber-500" />
          Scheduled in {nextPhase}:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>Full controller & state integration</li>
          <li>Local offline mock data and verified campus records</li>
          <li>Interactive filters, requests, and peer ratings</li>
        </ul>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Campus Home
        </Link>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          Test Registration
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Public & Student Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Marketplace route placeholder for Phase 1 */}
          <Route 
            path="/marketplace" 
            element={
              <PhasePlaceholder 
                title="Campus Marketplace" 
                description="Browse active student listings across books, calculators, drawing kits, cycles, and lab supplies."
                nextPhase="Phase 3 (Marketplace Engine & Filters)"
              />
            } 
          />

          {/* Dashboard route placeholder for Phase 1 */}
          <Route 
            path="/dashboard" 
            element={
              <PhasePlaceholder 
                title="Student Dashboard" 
                description="Manage your published listings, incoming swap requests, and completed peer handovers."
                nextPhase="Phase 2 (AuthContext & Dashboard)"
              />
            } 
          />

          {/* Profile route placeholder for Phase 1 */}
          <Route 
            path="/profile" 
            element={
              <PhasePlaceholder 
                title="Student Profile & ID Verification" 
                description="View your verified campus badge, student roll number, college affiliation, and peer star ratings."
                nextPhase="Phase 2 (Profile & Verification)"
              />
            } 
          />

          {/* Create Listing placeholder */}
          <Route 
            path="/create-listing" 
            element={
              <PhasePlaceholder 
                title="Sell or Exchange an Item" 
                description="Post your engineering drawing set, textbooks, or cycles directly to peers in your college."
                nextPhase="Phase 3 (Create & Edit Listing)"
              />
            } 
          />

          {/* Admin placeholder */}
          <Route 
            path="/admin" 
            element={
              <PhasePlaceholder 
                title="CampusSwap Admin Portal" 
                description="Approve student registrations, inspect reported listings, and monitor campus safety."
                nextPhase="Phase 5 (Admin Dashboard & Approvals)"
              />
            } 
          />
        </Route>

        {/* Fallback Catch-all Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
