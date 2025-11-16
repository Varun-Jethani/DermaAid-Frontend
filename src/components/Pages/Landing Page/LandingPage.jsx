import React, { useState, useEffect } from "react";
import {
  Heart,
  Shield,
  Users,
  Sparkles,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Background from "./Background";

const DermaAidLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="h-screen w-full absolute">
          <Background />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">
              AI-Powered Skin Care Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Skin's
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Personal Guardian
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Advanced dermatological care powered by artificial intelligence. Get
            instant skin analysis, personalized recommendations, and expert
            guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                DermaAid?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cutting-edge technology meets personalized care for your skin
              health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "AI-Powered Analysis",
                description:
                  "Advanced machine learning algorithms analyze your skin condition with medical-grade precision in seconds.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Privacy First",
                description:
                  "Your data is encrypted and secure. We never share your information without your explicit consent.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Support",
                description:
                  "Connect with certified dermatologists and get professional advice tailored to your unique needs.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Skin Care?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of users who trust DermaAid for their skin health
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DermaAidLanding;
