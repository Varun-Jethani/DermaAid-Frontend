import React from "react";
import { Heart, Code, Lightbulb, Target, Users, Zap } from "lucide-react";

const Us = () => {
  const team = [
    {
      name: "Team Member 1",
      role: "Full Stack Developer",
      description:
        "Passionate about building scalable solutions and creating seamless user experiences.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Team Member 2",
      role: "AI/ML Engineer",
      description:
        "Specializes in machine learning algorithms and bringing intelligent features to life.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Team Member 3",
      role: "UI/UX Developer",
      description:
        "Crafting beautiful interfaces and ensuring every pixel serves a purpose.",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient-Centered",
      description:
        "Every decision we make puts skin health and user wellbeing first",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Driven",
      description:
        "Constantly pushing boundaries with cutting-edge AI technology",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accuracy Focused",
      description: "Committed to delivering reliable, medically-sound results",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Efficient",
      description: "Providing instant analysis without compromising on quality",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Users className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Meet the Team</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the Future of
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dermatological Care
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of three developers on a mission to
            democratize access to quality skin care through the power of
            artificial intelligence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                DermaAid began as a university project, born from a simple
                observation: millions of people struggle with skin conditions
                but lack easy access to professional dermatological advice.
              </p>
              <p className="text-lg">
                As a team of three developers with diverse expertise in
                full-stack development, machine learning, and user experience
                design, we realized we could combine our skills to create
                something meaningful. We spent countless nights researching,
                coding, and refining our AI models to ensure they meet
                medical-grade standards.
              </p>
              <p className="text-lg">
                Today, DermaAid represents our commitment to making skin care
                accessible, affordable, and intelligent. We're not just building
                an app – we're creating a platform that empowers people to take
                control of their skin health with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Three developers, one vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:transform hover:scale-105">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div
                      className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-4xl font-bold group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black border border-white/20 rounded-full px-4 py-1">
                      <Code className="w-4 h-4 inline text-pink-400" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <div
                      className={`inline-block bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-semibold mb-4`}
                    >
                      {member.role}
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                1000+
              </div>
              <div className="text-gray-400">Hours Coded</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400">Users Helped</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Join Our Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            We're always looking for feedback, partnerships, and ways to improve
            DermaAid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105">
              Get in Touch
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Try DermaAid
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold">DermaAid</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 DermaAid. Built with ❤️ by three developers.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Us;
