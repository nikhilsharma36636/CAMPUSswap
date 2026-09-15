import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Star, 
  CheckCircle2, 
  PlusCircle, 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Cpu, 
  Armchair, 
  Bike, 
  Home, 
  Package, 
  Send, 
  Search, 
  Sparkles,
  Users,
  Clock,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { 
  CATEGORIES, 
  DEMO_FEATURED_LISTINGS, 
  TRUST_PILLARS, 
  HOW_IT_WORKS_STEPS,
  COLLEGES 
} from '../utils/constants';
import { formatPrice } from '../utils/formatPrice';

export default function Landing() {
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState('NIET');
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/marketplace');
    }
  };

  // Map category icon strings to Lucide components
  const renderCategoryIcon = (iconName) => {
    const props = { className: "w-6 h-6 text-indigo-600 transition-transform group-hover:scale-110" };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Armchair': return <Armchair {...props} />;
      case 'Bike': return <Bike {...props} />;
      case 'Home': return <Home {...props} />;
      default: return <Package {...props} />;
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-indigo-50/60 via-white to-gray-50 pt-12 pb-16 md:pt-20 md:pb-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold border border-indigo-200/80">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                <span>Exclusively for Verified College Students</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
                Buy, Sell & Exchange <br className="hidden sm:inline" />
                <span className="text-indigo-600">Inside Your Campus</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                CampusSwap connects students with trusted buyers and sellers from their own college community. Trade drawing kits, scientific calculators, books, and cycles with zero shipping fees.
              </p>

              {/* Instant Search Form */}
              <form onSubmit={handleHeroSearch} className="max-w-xl">
                <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white p-2 rounded-2xl shadow-md border border-gray-200">
                  <div className="flex-1 flex items-center px-3 gap-2">
                    <Search className="w-5 h-5 text-gray-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search books, calculators, drawing kits, cycles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/marketplace"
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-base shadow-sm shadow-indigo-200 transition-all hover:shadow hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Explore Marketplace
                </Link>

                <Link
                  to="/create-listing"
                  className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl text-base border border-gray-300 shadow-sm transition-all hover:border-gray-400 inline-flex items-center gap-2"
                >
                  <PlusCircle className="w-5 h-5 text-emerald-600" />
                  Sell an Item
                </Link>
              </div>

              {/* Verified College Quick Chips */}
              <div className="pt-2 flex items-center flex-wrap gap-2 text-xs text-gray-500">
                <span className="font-semibold text-gray-700 flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  Popular Campuses:
                </span>
                {['NIET Greater Noida', 'GL Bajaj', 'Galgotias', 'Bennett'].map((college) => (
                  <button
                    key={college}
                    type="button"
                    onClick={() => navigate('/marketplace')}
                    className="px-2.5 py-1 rounded-full bg-white border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                  >
                    {college}
                  </button>
                ))}
              </div>

            </div>

            {/* Hero Right: Marketplace CSS Illustration Card */}
            <div className="lg:col-span-5 relative">
              
              {/* Background Glow accent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>

              {/* Interactive Showcase Card */}
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-6 space-y-5">
                
                {/* Header of the mock card */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      NS
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-gray-900">Nikhil Sharma</span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5 mr-0.5" />
                          Verified
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">CSE 2nd Year • NIET Campus</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    Live Listing
                  </span>
                </div>

                {/* Listing Mock Details */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
                        Lab Equipment
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mt-0.5">
                        Engineering Drawing Kit
                      </h3>
                    </div>
                    <span className="text-xl font-extrabold text-indigo-700">
                      ₹350
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-white px-2 py-1 rounded-md border border-gray-200 text-gray-700 font-medium">
                      Condition: <strong className="text-gray-900">Good</strong>
                    </span>
                    <span className="bg-white px-2 py-1 rounded-md border border-gray-200 text-gray-700 font-medium">
                      Type: <strong className="text-gray-900">Direct Sale</strong>
                    </span>
                  </div>

                  {/* Pickup spot & Distance badge */}
                  <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                    <div className="flex items-center gap-1.5 font-medium text-gray-700">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>NIET Main Gate</span>
                    </div>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      1.2 km away
                    </span>
                  </div>
                </div>

                {/* Peer trust score bar */}
                <div className="flex items-center justify-between text-xs px-1">
                  <div className="flex items-center gap-1 text-amber-500 font-semibold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-gray-900">4.7</span>
                    <span className="text-gray-400 font-normal">(18 peer ratings)</span>
                  </div>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    Available now
                  </span>
                </div>

                {/* Simulated action button */}
                <div className="pt-2">
                  <Link
                    to="/marketplace"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <span>Request to Buy Item</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Handover in public
                  </span>
                  <span>•</span>
                  <span>Cash on Handover / UPI</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section id="trust" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Built for Campus Trust
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              Why Students Prefer CampusSwap
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50/70 hover:bg-indigo-50/40 rounded-2xl p-6 border border-gray-200 transition-all hover:border-indigo-200"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 shadow-sm shadow-indigo-200">
                  {pillar.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                  {pillar.icon === 'MapPin' && <MapPin className="w-6 h-6" />}
                  {pillar.icon === 'MessageSquareCheck' && <CheckCircle2 className="w-6 h-6" />}
                  {pillar.icon === 'Star' && <Star className="w-6 h-6" />}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Browse By Department & Needs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                Explore Marketplace Categories
              </h2>
            </div>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/marketplace?category=${cat.id}`}
                className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    {renderCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                    {cat.count} items
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
              How CampusSwap Works
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Buy from someone in your lecture hall. Sell to someone on your floor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-start bg-gray-50/60 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    Step {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                    {step.icon === 'GraduationCap' && <GraduationCap className="w-5 h-5" />}
                    {step.icon === 'ShoppingBag' && <ShoppingBag className="w-5 h-5" />}
                    {step.icon === 'Send' && <Send className="w-5 h-5" />}
                    {step.icon === 'MapPin' && <MapPin className="w-5 h-5" />}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED LISTINGS SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Fresh From Your Peers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                Featured Campus Listings
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Available right now at NIET Greater Noida and neighboring campus gates
              </p>
            </div>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-300 hover:border-gray-400 text-gray-800 shadow-sm"
            >
              <span>Explore All {DEMO_FEATURED_LISTINGS.length * 4}+ Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_FEATURED_LISTINGS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top / Visual Banner */}
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {item.category}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      item.listingType === 'Exchange' 
                        ? 'bg-purple-50 text-purple-700 border border-purple-200' 
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.listingType}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-gray-900">
                      {formatPrice(item.price)}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Condition: <span className="text-gray-700 font-semibold">{item.condition}</span>
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Pickup Location & Distance */}
                <div className="px-5 py-2.5 bg-gray-50/70 border-t border-b border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-700 font-medium truncate">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="truncate">{item.pickupLocation}</span>
                  </div>
                  <span className="text-emerald-700 font-semibold shrink-0">
                    {item.distance}
                  </span>
                </div>

                {/* Card Footer: Seller & Button */}
                <div className="p-5 pt-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                      {item.sellerName[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-gray-900 truncate max-w-[90px]">
                          {item.sellerName}
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-500 font-medium">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span className="text-gray-700">{item.sellerRating}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/marketplace?item=${item.id}`}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section id="about" className="py-16 bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-700/60 text-indigo-200 text-xs font-medium border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Recycle & Recover Expenses
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Have Something You No Longer Need?
            </h2>

            <p className="text-indigo-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Don't leave your engineering drafters, semester notes, or hostel study table collecting dust. Pass them on to juniors at your campus in minutes.
            </p>

            <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/register"
                className="px-7 py-3.5 bg-white hover:bg-gray-100 text-indigo-900 font-bold rounded-xl text-base shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5 text-emerald-600" />
                Sell on CampusSwap
              </Link>
              <Link
                to="/marketplace"
                className="px-7 py-3.5 bg-indigo-700/80 hover:bg-indigo-700 text-white font-semibold rounded-xl text-base border border-indigo-500/40 transition-all inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse Items
              </Link>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-indigo-700/50 max-w-xl mx-auto text-center">
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-indigo-300">College Verified</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">₹0</p>
                <p className="text-xs text-indigo-300">Commission / Fees</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">0 min</p>
                <p className="text-xs text-indigo-300">Shipping Delay</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
