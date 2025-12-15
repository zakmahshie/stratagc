import logo from './assets/logo.png'
import mountainBg from './assets/mountain.png'
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'why-stratagc', 'services', 'contact']
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in upper portion of viewport
        threshold: 0
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="StrataGC Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" 
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                StrataGC
              </h1>
            </div>
            
            {/* Hamburger Menu Button */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={toggleMenu}
                className="relative z-50 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-slate-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}>
                <nav className="py-2 px-2">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 ${activeSection === 'hero' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 active:bg-slate-100'}`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 ${activeSection === 'about' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 active:bg-slate-100'}`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('why-stratagc')}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 ${activeSection === 'why-stratagc' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 active:bg-slate-100'}`}
                  >
                    Why StrataGC?
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 ${activeSection === 'services' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 active:bg-slate-100'}`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-50 ${activeSection === 'contact' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50 active:bg-slate-100'}`}
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 hero-mountain-bg" style={{ background: 'linear-gradient(135deg, #0A1F44 0%, #1F2A44 50%, #2A3B5C 100%)', '--mountain-bg-image': `url(${mountainBg})` }}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(46, 125, 143, 0.1)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ background: 'rgba(56, 161, 105, 0.1)' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
          <div className="space-y-8">
            <h2 className="text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                StrataGC
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'var(--font-sans)' }}>
              StrataGC provides fractional General Counsel, mission-oriented legal advisory support, and matter management for growing companies that need embedded legal leadership—without the overhead of a full-time hire.
            </p>
            
            <div className="flex flex-col items-center space-y-6 pt-8">
              <div
                 className="group relative px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl text-white cursor-pointer select-text"
                 style={{
                   background: 'linear-gradient(135deg, var(--blue-professional) 0%, var(--sage-medium) 100%)',
                   boxShadow: '0 10px 30px rgba(46, 125, 143, 0.3)',
                   textDecoration: 'none'
                 }}
                 onMouseEnter={(e) => e.target.style.boxShadow = '0 15px 40px rgba(46, 125, 143, 0.4)'}
                 onMouseLeave={(e) => e.target.style.boxShadow = '0 10px 30px rgba(46, 125, 143, 0.3)'}
                 onClick={(e) => {
                   // Only trigger mailto if no text is selected
                   const selection = window.getSelection();
                   if (selection.toString().length === 0) {
                     window.location.href = 'mailto:contact@stratagc.com';
                   }
                 }}>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="relative z-10 select-text">contact@stratagc.com</span>
                </div>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, var(--sage-light) 0%, var(--blue-professional) 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32" style={{ background: 'var(--grey-warm-lightest)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--grey-warm-lightest) 0%, var(--white-pure) 100%)' }}></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
              About
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--blue-professional) 0%, var(--sage-medium) 100%)' }}></div>
          </div>

          <div className="text-center mb-16">
            <p className="text-xl leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
              Fractional General Counsel, mission-oriented legal advisory support, and matter management for growing companies that need embedded legal leadership—without the overhead of a full-time hire.
            </p>
          </div>

          {/* Main Philosophy */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Our Philosophy</h3>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                StrataGC was founded on the belief that legal should be embedded in strategy—not bolted on as an afterthought. Our founder brings years of executive-level in-house legal experience supporting high-growth companies, government contractors, and founder-led teams.
              </p>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Who We Serve</h3>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                Whether you're a founder needing board-ready legal infrastructure, a C-level executive trying to operationalize compliance, or a federal contractor preparing for your next audit or joint venture, StrataGC becomes your legal layer of strategic advantage.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* What We Do */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>What We Do</h3>
              <div>
                <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                  StrataGC exists for companies that are growing, scaling, or navigating complexity—and who need more than reactive legal support.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                  We provide fractional General Counsel and strategic advisory services that go beyond compliance. Our model integrates legal strategy into the core of your business decision-making.
                </p>
              </div>
            </div>
            
            {/* How We Work */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold mb-8 text-center lg:text-left" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>How We Work</h3>
              <div>
                <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                  At StrataGC, we believe that every layer of your business—operations, finance, people, governance—has legal implications that should be handled with foresight, not hindsight.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                  That's why our approach is embedded, proactive, and aligned with your leadership team. We don't just manage risk—we help you capture value, streamline operations, and prepare for what's next. 
                </p>
              </div>
            </div>
          </div>

          {/* The Strata Concept */}
          <div className="text-center">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>The "Strata" Concept</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl professional-card" style={{ borderLeft: '4px solid var(--blue-professional)' }}>
                  <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--blue-professional)', fontFamily: 'var(--font-serif)' }}>Layered Approach</h4>
                  <p className="leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                    The name "Strata" reflects what we do: we work across the layers of your organization, bringing legal clarity to business structure, contract negotiations, regulatory landscapes, and strategic execution.
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl professional-card" style={{ borderLeft: '4px solid var(--sage-medium)' }}>
                  <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--sage-medium)', fontFamily: 'var(--font-serif)' }}>Strategic Partnership</h4>
                  <p className="leading-relaxed" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>
                    "StrataGC" evokes the word "strategy", which is central to our approach. Our clients aren't looking for outside counsel—they want a partner who thinks like an operator and acts like a leader.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-12">
            <div className="text-2xl font-medium py-12 px-8 inline-block" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-serif)', textDecoration: 'underline overline', textDecorationColor: 'var(--blue-professional)', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
              In business, clarity comes in layers.
            </div>
          </div>
        </div>
      </section>

      {/* Why StrataGC Section */}
      <section id="why-stratagc" className="relative py-32" style={{ background: 'linear-gradient(180deg, #0A1F44 0%, #1F2A44 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(46, 125, 143, 0.15)' }}></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(56, 161, 105, 0.15)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--white-pure)', fontFamily: 'var(--font-serif)' }}>
              Why StrataGC?
            </h2>
            <p className="text-2xl text-slate-300 font-light" style={{ fontFamily: 'var(--font-sans)' }}>Strategic Legal Partnership</p>
            <div className="w-24 h-1 mx-auto rounded-full mt-8" style={{ background: 'linear-gradient(90deg, var(--blue-professional) 0%, var(--sage-medium) 100%)' }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" style={{ background: 'rgba(46, 125, 143, 0.2)' }}></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--blue-professional) 0%, var(--navy-light) 100%)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'var(--font-serif)', color: '#ffffff' }}>Embedded</h3>
                <p className="text-slate-200 text-center leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>We integrate with your team and operate inside your business—not outside it.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" style={{ background: 'rgba(56, 161, 105, 0.2)' }}></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--sage-medium) 0%, var(--sage-light) 100%)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'var(--font-serif)', color: '#ffffff' }}>Strategic</h3>
                <p className="text-slate-200 text-center leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>Legal advice aligned with growth, governance, and operational objectives.</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" style={{ background: 'rgba(47, 133, 90, 0.2)' }}></div>
              <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--sage-deep) 0%, var(--sage-medium) 100%)' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-serif)', color: '#ffffff' }}>Flexible</h3>
                <p className="text-slate-200 text-center leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>Fractional services tailored to your stage, industry, and structure.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-large py-12 text-white custom-underline-overline" style={{ fontFamily: 'var(--font-serif)' }}>
              StrataGC is legal leadership you can build around.
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32" style={{ background: 'var(--grey-warm-light)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--grey-warm-light) 0%, var(--white-pure) 100%)' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
              Services
            </h2>
            <p className="text-2xl font-light mb-4" style={{ color: 'var(--grey-warm-darker)', fontFamily: 'var(--font-sans)' }}>What We Do</p>
            <div className="w-24 h-1 mx-auto rounded-full mt-8" style={{ background: 'linear-gradient(90deg, var(--blue-professional) 0%, var(--sage-medium) 100%)' }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(46, 125, 143, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--blue-professional)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--blue-professional)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Risk Management</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(56, 161, 105, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--sage-medium)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--sage-medium)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Corporate Structure</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(47, 133, 90, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--sage-deep)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--sage-deep)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>HR & Recruiting Practices</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(49, 130, 206, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--navy-light)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--navy-light)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Contract Management</h3>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(44, 82, 130, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--navy-medium)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--navy-medium)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Government Contracting</h3>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(46, 125, 143, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--blue-professional)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--blue-professional)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Intellectual Property</h3>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(56, 161, 105, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--sage-medium)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--sage-medium)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Cybersecurity & Privacy</h3>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(47, 133, 90, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--sage-deep)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--sage-deep)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Insurance</h3>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'rgba(49, 130, 206, 0.1)' }}></div>
              <div className="relative p-6 rounded-2xl professional-card group-hover:transform group-hover:scale-[1.02] transition-all duration-300 flex flex-col justify-center min-h-[100px]" style={{ borderLeft: '4px solid var(--navy-light)' }}>
                <div className="flex items-center mb-0">
                  <div className="w-3 h-3 rounded-full mr-3 group-hover:animate-pulse" style={{ backgroundColor: 'var(--navy-light)' }}></div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>Commercial Real Estate</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-xl custom-underline-overline-dark" style={{ color: 'var(--grey-warm-dark)', fontFamily: 'var(--font-sans)' }}>Fractional General Counsel + Business Advisor, Delivered Where You Need It Most</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id = 'contact' className="relative py-16" style={{ background: 'var(--grey-warm-light)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--grey-warm-light) 0%, var(--white-pure) 100%)' }}></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-serif)' }}>
            Contact Us
          </h2>
          
          <div className="flex justify-center">
            <div
               className="flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 no-underline hover:no-underline border cursor-pointer select-text"
               style={{
                 fontFamily: 'var(--font-sans)',
                 textDecoration: 'none',
                 color: 'var(--color-text)',
                 borderColor: 'var(--blue-professional)',
                 background: 'transparent'
               }}
               onClick={(e) => {
                 // Only trigger mailto if no text is selected
                 const selection = window.getSelection();
                 if (selection.toString().length === 0) {
                   window.location.href = 'mailto:contact@stratagc.com';
                 }
               }}>
              <svg className="w-5 h-5 mr-2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="select-text">contact@stratagc.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20" style={{ background: 'linear-gradient(180deg, #0A1F44 0%, #1F2A44 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A1F44 0%, #1F2A44 100%)' }}></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="StrataGC Logo" className="h-12 w-12 mr-4" />
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                StrataGC
              </span>
            </h3>
          </div>
          <p className="text-xl text-slate-300 mb-8 font-light" style={{ fontFamily: 'var(--font-sans)' }}>
            Fractional General Counsel for Growing Companies
          </p>
          
          
          
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--blue-professional) 0%, var(--sage-medium) 100%)' }}></div>
          <p className="text-slate-400" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2025 StrataGC PLLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
