import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  ShoppingBag, 
  User, 
  Mail, 
  Lock, 
  GraduationCap, 
  IdCard, 
  UserPlus, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COLLEGES } from '../utils/constants';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    college: 'NIET (Noida Institute of Engineering & Technology)'
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'College email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.studentId.trim()) {
      errs.studentId = 'Student ID / University Roll No. is required';
    }
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate registration network request
      await new Promise((resolve) => setTimeout(resolve, 700));

      const newStudentUser = {
        id: 'usr-' + Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        college: formData.college,
        studentId: formData.studentId.trim(),
        role: 'student',
        verified: false, // Verification Status: Pending
        rating: 5.0,
        totalListings: 0,
        completedTransactions: 0,
        joinedAt: new Date().toISOString()
      };

      const mockToken = 'mock_jwt_token_' + Math.random().toString(36).substring(2);

      // Store in localStorage
      localStorage.setItem('campusswap_pending_user', JSON.stringify(newStudentUser));
      localStorage.setItem('campusswap_token', mockToken);
      localStorage.setItem('campusswap_user', JSON.stringify(newStudentUser));

      window.dispatchEvent(new Event('storage'));

      toast.success('Registration submitted for verification!');
      setSubmittedSuccess(true);
    } catch (err) {
      toast.error(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Demo auto-fill helper
  const handleAutoFillDemo = () => {
    setFormData({
      name: 'Nikhil Sharma',
      email: 'nikhil.cse@niet.co.in',
      password: 'password123',
      confirmPassword: 'password123',
      studentId: '2301330100084',
      college: 'NIET (Noida Institute of Engineering & Technology)'
    });
    setErrors({});
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-lg w-full space-y-6">
        
        {/* Header */}
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
            Create Student Account
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Join your college community to trade textbooks, equipment, and items.
          </p>
        </div>

        {/* Success / Verification Pending State */}
        {submittedSuccess ? (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Clock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                Verification Status: Pending
              </span>
              <h3 className="text-xl font-bold text-gray-900">
                Your account has been submitted for college verification.
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Welcome <strong className="text-gray-900">{formData.name}</strong> ({formData.studentId})! Our campus administrator will verify your student ID and email domain shortly.
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs text-left text-amber-900 space-y-1.5">
              <p className="font-bold flex items-center gap-1.5 text-amber-950">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                Important Notice:
              </p>
              <p>
                Only verified students can publish listings on CampusSwap. You can immediately browse the marketplace, bookmark items, and prepare listings while verification is in progress.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => navigate('/marketplace')}
                className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                Browse Marketplace
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="flex-1 py-3 px-4 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <>
            {/* Quick Demo autofill helper */}
            <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-xl p-3 text-xs text-indigo-900 flex items-center justify-between">
              <span className="font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Testing in evaluation / offline mode?
              </span>
              <button
                type="button"
                onClick={handleAutoFillDemo}
                className="px-2.5 py-1 bg-white hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg border border-indigo-200 transition-colors shadow-2xs"
              >
                Auto-fill Demo Student
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 space-y-5">
              
              {/* Trust Badge Header */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
                <span className="font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  College ID Verification Required
                </span>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Status: Pending Approval
                </span>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Nikhil Sharma"
                      className={`w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* College Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    College / University
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <select
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 text-gray-800"
                    >
                      {COLLEGES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Student ID / Roll Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Student ID / University Roll No.
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <IdCard className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      placeholder="e.g. 2301330100084"
                      className={`w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border ${
                        errors.studentId ? 'border-red-500' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500`}
                    />
                  </div>
                  {errors.studentId && <p className="text-xs text-red-600 mt-1">{errors.studentId}</p>}
                </div>

                {/* College Email */}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. nikhil.cse@niet.co.in"
                      className={`w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500`}
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Used for peer communication and account verification.
                  </p>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={`w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border ${
                          errors.password ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500`}
                      />
                    </div>
                    {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className={`w-full pl-10 pr-3.5 py-2 text-sm bg-gray-50/50 rounded-xl border ${
                          errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500`}
                      />
                    </div>
                    {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm rounded-xl shadow-sm shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Submitting for Verification...</span>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Register Account</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-600">
                  Already have a verified account?{' '}
                  <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
                    Sign In
                  </Link>
                </p>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}
