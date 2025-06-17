import logo from '/logo.png'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="StrataGC Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                StrataGC
              </h1>
            </div>
            
            {/* Hamburger Menu Button */}
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="relative z-50 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
                <nav className="py-2">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('why-stratagc')}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    Why StrataGC?
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    Services
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/20 to-emerald-950/20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                StrataGC
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Fractional General Counsel, business advisory support, and matter management for growing companies that need embedded legal leadership—without the overhead of a full-time hire.
            </p>
            
            <div className="flex flex-col items-center space-y-6 pt-8">
              <div className="text-2xl font-light bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                In business, clarity comes in layers.
              </div>
              
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full font-medium transition-all duration-300 hover:from-blue-500 hover:to-emerald-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                About
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Philosophy */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Our Philosophy</h3>
              <p className="text-xl text-gray-200 leading-relaxed">
                StrataGC was founded on the belief that legal should be embedded in strategy—not bolted on as an afterthought. Our founder brings years of executive-level in-house legal experience supporting high-growth companies, government contractors, and founder-led teams.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What We Do */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">What We Do</h3>
              <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  StrataGC exists for companies that are growing, scaling, or navigating complexity—and who need more than reactive legal support.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We provide fractional General Counsel and strategic advisory services that go beyond compliance. Our model integrates legal strategy into the core of your business decision-making.
                </p>
              </div>
            </div>
            
            {/* How We Work */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">How We Work</h3>
              <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  At StrataGC, we believe that every layer of your business—operations, finance, people, governance—has legal implications that should be handled with foresight, not hindsight.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  That's why our approach is embedded, proactive, and aligned with your leadership team. We don't just manage risk—we help you capture value, streamline operations, and prepare for what's next.
                </p>
              </div>
            </div>
          </div>

          {/* The Strata Concept */}
          <div className="text-center">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8">The "Strata" Concept</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-blue-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-blue-300 mb-4">Layered Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    The name "Strata" reflects what we do: we work across the layers of your organization, bringing legal clarity to business structure, contract negotiations, regulatory landscapes, and strategic execution.
                  </p>
                </div>
                
                <div className="p-8 bg-gradient-to-br from-emerald-900/30 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-emerald-300 mb-4">Strategic Partnership</h4>
                  <p className="text-gray-300 leading-relaxed">
                    "StrataGC" evokes the word "strategy", which is central to our approach. Our clients aren't looking for outside counsel—they want a partner who thinks like an operator and acts like a leader.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mt-16 text-center">
            <div className="p-8 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Who We Serve</h3>
              <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Whether you're a founder needing board-ready legal infrastructure, a COO trying to operationalize compliance, or a federal contractor preparing for your next audit or joint venture, StrataGC becomes your legal layer of strategic advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why StrataGC Section */}
      <section id="why-stratagc" className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Why StrataGC?
              </span>
            </h2>
            <p className="text-2xl text-gray-400 font-light">More Than Legal Support—A Strategic Legal Partner</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Embedded</h3>
                <p className="text-gray-300 text-center leading-relaxed">We integrate with your team and operate inside your business—not outside it.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Strategic</h3>
                <p className="text-gray-300 text-center leading-relaxed">Legal advice aligned with growth, governance, and operational objectives.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Flexible</h3>
                <p className="text-gray-300 text-center leading-relaxed">Fractional services tailored to your stage, industry, and structure.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl border border-gray-600/30">
              <p className="text-2xl font-light text-white">StrataGC is legal leadership you can build around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-2xl text-gray-400 font-light mb-4">What We Do</p>
            <p className="text-xl text-gray-500">Fractional General Counsel + Business Advisor, Delivered Where You Need It Most</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative col-span-full lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Fractional General Counsel</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">Embedded legal support tailored to your team's cadence</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Contract Strategy & Negotiation</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">Infrastructure that protects and scales</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Compliance & Governance</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">From board frameworks to audit readiness</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Transaction Readiness</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">M&A, financing, and strategic commercial deals</p>
              </div>
            </div>
            
            <div className="group relative md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white">Legal-Business Advisory</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">Strategic insight at the intersection of law, ops, and leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950 to-gray-950"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="StrataGC Logo" className="h-12 w-12 mr-4" />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              StrataGC
            </h3>
          </div>
          <p className="text-xl text-gray-400 mb-8 font-light">
            Fractional General Counsel for Growing Companies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600">
            © 2025 StrataGC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
