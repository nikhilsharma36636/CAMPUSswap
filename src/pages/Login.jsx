import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  ShoppingBag, 
  Mail, 
  Lock, 
  LogIn, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'College email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate real auth handshake / offline demo fallback
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Check if admin demo or student demo
      const isAdmin = email.toLowerCase().includes('admin');
      const mockUser = {
        id: isAdmin ? 'usr-admin' : 'usr-student-1',
        name: isAdmin ? 'Campus Administrator' : (email.split('@')[0] || 'Nikhil Sharma'),
        email: email.trim(),
        college: 'NIET (Noida Institute of Engineering & Technology)',
        studentId: isAdmin ? 'ADMIN-NIET-01' : '2301330100084',
        role: isAdmin ? 'admin' : 'student',
        verified: true,
        rating: 4.8,
        totalListings: 3,
        completedTransactions: 5,
        joinedAt: new Date().toISOString()
      };

      const mockToken = 'mock_jwt_token_' + Math.random().toString(36).substring(2);

      localStorage.setItem('campusswap_token', mockToken);
      localStorage.setItem('campusswap_user', JSON.stringify(mockUser));

      toast.success(`Welcome back, ${mockUser.name}!`);
      
      // Dispatch storage event so navbar updates instantly
      window.dispatchEvent(new Event('storage'));

      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      toast.error(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Quick Demo Account Helper
  const fillDemoStudent = () => {
    setEmail('nikhil.cse@niet.co.in');
    setPassword('student123');
    setErrors({});
  };

  const fillDemoAdmin = () => {
    setEmail('admin.verification@niet.co.in');
    setPassword('admin123');
    setErrors({});
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-6">
        
        {/* Card Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-3 group">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Campus<span className="text-indigo-600">Swap</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Sign In to CampusSwap
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Access your campus listings, buyer requests, and reviews.
          </p>
        </div>

        {/* Demo Fill Helper Banner */}
        <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl p-3.5 text-xs text-indigo-900">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Quick Demo Fill (Offline / Hackathon):
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={fillDemoStudent}
              className="flex-1 py-1 px-2.5 bg-white hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg border border-indigo-200 text-center transition-colors"
            >
              Student Account
            </button>
            <button
              type="button"
              onClick={fillDemoAdmin}
              className="flex-1 py-1 px-2.5 bg-white hover:bg-indigo-100 text-indigo-700 font-semibold rounded-lg border border-indigo-200 text-center transition-colors"
            >
              Admin Account
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* College Email Field */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                College Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. nikhil.cse@niet.co.in"
                  className={`w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50/50 rounded-xl border ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                  } focus:outline-none focus:ring-2 transition-colors`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Password
                </label>
                <span className="text-[11px] text-indigo-600 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-2.5 text-sm bg-gray-50/50 rounded-xl border ${
                    errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-indigo-500 focus:ring-indigo-100'
                  } focus:outline-none focus:ring-2 transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm rounded-xl shadow-sm shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>

          {/* Footer of Card */}
          <div className="pt-4 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              New to CampusSwap?{' '}
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Security Reassurance */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Restricted to validated campus students and faculty</span>
        </div>

      </div>
    </div>
  );
}
