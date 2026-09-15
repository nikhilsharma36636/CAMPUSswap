import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShieldCheck, 
  MapPin, 
  Heart, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                Campus<span className="text-indigo-600">Swap</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              The trusted peer-to-peer campus marketplace designed exclusively for college students to buy, sell, and exchange academic essentials and dorm items safely.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-md w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified Student Network</span>
            </div>
          </div>

          {/* Col 2: Marketplace Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/marketplace?category=lab-equipment" className="hover:text-indigo-600 transition-colors">
                  Engineering Drawing & Lab Kits
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=calculators" className="hover:text-indigo-600 transition-colors">
                  Scientific Calculators
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=books" className="hover:text-indigo-600 transition-colors">
                  Semester Textbooks & Notes
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=cycles" className="hover:text-indigo-600 transition-colors">
                  Campus Cycles
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=electronics" className="hover:text-indigo-600 transition-colors">
                  Arduino & Electronics
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=pg-items" className="hover:text-indigo-600 transition-colors">
                  PG & Hostel Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Trust & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
              Campus Safety & Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/marketplace" className="hover:text-indigo-600 transition-colors">
                  Browse All Listings
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">
                  How CampusSwap Works
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-indigo-600 transition-colors">
                  Student Verification Rules
                </a>
              </li>
              <li>
                <Link to="/register" className="hover:text-indigo-600 transition-colors">
                  Register as a Seller
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center text-xs text-gray-500 gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  Designated meetups: Library, Canteen, Main Gates
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Chapters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              Supported Campuses
            </h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                <span className="font-medium text-gray-700">NIET Greater Noida</span>
                <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-bold">Active Hub</span>
              </p>
              <p className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                <span className="text-gray-600">GL Bajaj Institute</span>
                <span className="text-[10px] text-gray-400">Available</span>
              </p>
              <p className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                <span className="text-gray-600">Galgotias College</span>
                <span className="text-[10px] text-gray-400">Available</span>
              </p>
              <p className="flex items-center justify-between text-xs py-1">
                <span className="text-gray-600">Bennett & AKGEC</span>
                <span className="text-[10px] text-gray-400">Available</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and offline compliance */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} CampusSwap. Made for college students by college engineers.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Offline Ready • Localhost Connected
            </span>
            <span className="text-gray-300">|</span>
            <span>Zero Data Trackers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
