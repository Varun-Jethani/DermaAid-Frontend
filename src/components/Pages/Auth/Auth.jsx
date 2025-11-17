import { useState } from "react";
import axios from "axios";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [step, setStep] = useState("form");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE = "/api/users";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setMessage("");
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${API_BASE}/register`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (data.success) {
        setMessage("OTP sent to your email. Verify to continue.");
        setStep("otp");
      } else {
        setMessage(data.message || "Registration failed.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerify = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${API_BASE}/verifyOTP`,
        { email: formData.email, otp: formData.otp },
        { withCredentials: true }
      );

      if (data.token) {
        setMessage("Account verified & logged in successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setMessage(data.message || "Invalid OTP.");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setMessage("");
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${API_BASE}/login`,
        { email: formData.email, password: formData.password },
        { withCredentials: true }
      );

      if (data.token) {
        setMessage("Logged in successfully!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (err) {
      if (err.response?.status === 300) {
        setMessage("Email not verified. OTP sent to your email.");
        setStep("otp");
      } else {
        setMessage(err.response?.data?.message || "Login failed.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${API_BASE}/sendOTP`,
        { email: formData.email },
        { withCredentials: true }
      );

      setMessage(data.message || "OTP resent.");
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP resend failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Shield className="w-16 h-16 text-blue-400" />
              <Sparkles className="w-6 h-6 absolute -top-2 -right-2 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            DermaAid
          </h1>
          <p className="text-gray-400">
            {step === "form"
              ? isLogin
                ? "Welcome back!"
                : "Create your account"
              : "Verify your email"}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
          {/* Tab Headers */}
          {step === "form" && (
            <div className="flex gap-2 mb-6 bg-gray-800/50 p-1 rounded-lg">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>
          )}

          {/* Message Display */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg border ${
                message.includes("success") || message.includes("sent")
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              <div className="flex items-center gap-2">
                {message.includes("success") || message.includes("sent") ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Shield className="w-5 h-5" />
                )}
                <p className="text-sm">{message}</p>
              </div>
            </div>
          )}

          {/* FORM STEP */}
          {step === "form" && (
            <div className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  autoComplete="email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  onChange={handleChange}
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                onClick={isLogin ? handleLogin : handleRegister}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{isLogin ? "Login" : "Register"}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {isLogin && (
                <div className="text-center">
                  <a
                    href="#"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>
              )}
            </div>
          )}

          {/* OTP STEP */}
          {step === "otp" && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-gray-400 text-sm">
                  We've sent a verification code to
                  <br />
                  <span className="text-white font-semibold">
                    {formData.email}
                  </span>
                </p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  maxLength="6"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  onChange={handleChange}
                />
              </div>

              <button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 rounded-lg font-semibold shadow-lg shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                onClick={handleOTPVerify}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Verify OTP</span>
                  </>
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-400">
                  Didn't receive the code?
                </p>
                <button
                  onClick={handleResendOTP}
                  disabled={isLoading}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  Resend OTP
                </button>
              </div>

              <button
                onClick={() => {
                  setStep("form");
                  setMessage("");
                }}
                className="w-full text-gray-400 hover:text-white text-sm transition-colors"
              >
                ← Back to {isLogin ? "Login" : "Register"}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Secured by DermaAid Authentication</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
