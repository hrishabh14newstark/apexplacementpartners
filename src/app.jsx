import React, { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Send, 
  Menu, 
  X, 
  Award, 
  Compass, 
  Layers, 
  Code, 
  FileText, 
  Search, 
  Network, 
  FolderCheck, 
  Bell 
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  // The 10 Pillars Data
  const pillars = [
    { title: "Soft Skill Training", icon: <Users className="w-6 h-6 text-blue-500" /> },
    { title: "Structured Roadmaps", icon: <Compass className="w-6 h-6 text-indigo-500" /> },
    { title: "Career Guidance", icon: <Sparkles className="w-6 h-6 text-cyan-500" /> },
    { title: "Courses & Curriculum", icon: <BookOpen className="w-6 h-6 text-emerald-500" /> },
    { title: "Software Training", icon: <Code className="w-6 h-6 text-purple-500" /> },
    { title: "Resume Building", icon: <FileText className="w-6 h-6 text-amber-500" /> },
    { title: "Job Search Strategy", icon: <Search className="w-6 h-6 text-rose-500" /> },
    { title: "Networking", icon: <Network className="w-6 h-6 text-blue-600" /> },
    { title: "Study Resources", icon: <FolderCheck className="w-6 h-6 text-teal-500" /> },
    { title: "Notifications & Support", icon: <Bell className="w-6 h-6 text-orange-500" /> }
  ];

  // Who We Serve Data
  const targetAudience = [
    "Class 10 Students",
    "Class 12 Students",
    "ITI Students",
    "Diploma Students",
    "Bachelor's Students",
    "Master's Students"
  ];

  // Why Choose Apex Data
  const features = [
    {
      title: "Industry Ready Skills",
      desc: "Learn practical, market-relevant skills that top employers actively demand.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Personalized Roadmaps",
      desc: "Clear step-by-step career direction customized for every student's goals.",
      icon: <Compass className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Placement Support",
      desc: "Comprehensive job search strategies, networking, and rigorous interview prep.",
      icon: <GraduationCap className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Mentor Network",
      desc: "Direct access to experienced industry professionals and successful alumni.",
      icon: <Users className="w-8 h-8 text-purple-600" />
    }
  ];

  // Business Model Data
  const businessModels = [
    "Student Subscriptions",
    "Premium Mentorship",
    "Institution Partnerships",
    "Certification Programs",
    "Recruiter Partnerships",
    "CSR & Sponsorships"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
              <Award className="w-7 h-7 text-white" />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
              APEX Placement Partners
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-slate-300">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#pillars" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#students" className="hover:text-blue-400 transition-colors">Students</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>

          <div className="hidden md:block">
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 border-b border-slate-700 px-6 py-4 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">About</a>
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Services</a>
            <a href="#students" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Students</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-blue-400 font-medium">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> Equalizing Career Opportunities Across India
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight mb-6">
            Bridging the Gap Between Tier 2/3/4 India and <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Tier 1 Opportunity</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Empowering students from Class 10, Class 12, ITI, Diploma, Bachelor's and Master's with structured career guidance, technical training, and placement support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Apex
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Apex</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-12 text-slate-300 text-lg leading-relaxed space-y-6 shadow-xl backdrop-blur-sm">
            <p>
              <strong className="text-white">Apex Placement Partners</strong> is a career-readiness and education reform ecosystem designed to help students from Tier 2, Tier 3, and Tier 4 cities compete equally with Tier 1 students.
            </p>
            <p>
              We provide end-to-end roadmaps, 1-on-1 mentorship, industry-standard technical training, soft skills enhancement, networking opportunities, resume building, and placement support — all consolidated under one accessible platform.
            </p>
          </div>
        </div>
      </section>

      {/* Our 10 Pillars */}
      <section id="pillars" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our 10 Pillars</h2>
            <p className="text-slate-400">A comprehensive suite of support crafted for complete student career success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 group shadow-md"
              >
                <div className="p-3 bg-slate-900 rounded-lg w-fit mx-auto mb-4 border border-slate-800 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="students" className="py-20 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-slate-400">Tailored pathways designed for every learning milestone.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-slate-900 to-slate-800/80 border border-slate-800 p-6 rounded-xl flex items-center gap-4 hover:border-slate-700 transition-all shadow-md"
              >
                <div className="bg-blue-600/10 p-3 rounded-lg text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold text-slate-200">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Apex? */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Apex?</h2>
            <p className="text-slate-400">The key advantages driving student placement outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start shadow-lg"
              >
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Business Model</h2>
            <p className="text-slate-400">Sustainable revenue and collaboration streams creating mutual value.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessModels.map((model, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-indigo-500/40 transition-all shadow-md group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-slate-200">{model}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-slate-400 mb-10">Ready to transform your future? Reach out to us today.</p>

          <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl shadow-2xl text-left space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe" 
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                rows="4" 
                required 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can Apex help you?" 
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-lg text-sm">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been received. We'll get back to you soon.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800/80 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Apex Placement Partners. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
