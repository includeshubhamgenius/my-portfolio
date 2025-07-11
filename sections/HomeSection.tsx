'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TooltipBubble from '@/components/TooltipBubble'

export default function HomeSection() {
  const [showUXLaws, setShowUXLaws] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentTagline, setCurrentTagline] = useState(0)

  const taglines = [
    "Design isn't just about how it looks—",
    "it's about how it works."
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Animate tagline text
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleToggleUXLaws = () => {
    setShowUXLaws(!showUXLaws)
  }

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <Navbar />

      <section className="flex-1 flex items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative w-32 h-32 mx-auto mb-6 group">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img 
                    src="/images/MyProfile.jpg" 
                    alt="Shubham Verma" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">SV</div>'
                    }}
                  />
                </div>
              </div>
              {showUXLaws && (
                <TooltipBubble 
                  content="Visual Hierarchy: Profile photo creates focal point and builds trust (Recognition over Recall)"
                  position="top"
                />
              )}
            </div>
          </div>

          {/* Main Heading */}
          <div className={`mb-6 transform transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Shubham
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              A frontend dev who designs with purpose
            </p>
          </div>

          {/* Animated Tagline */}
          <div className={`mb-12 transform transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="h-16 flex items-center justify-center">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic font-light max-w-2xl leading-relaxed">
                <span className="inline-block transition-all duration-500 ease-in-out">
                  {taglines[currentTagline]}
                </span>
              </p>
            </div>
          </div>

          {/* Interactive Cards */}
          <div className={`mb-12 transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Card 1 - Projects */}
              <div className="group relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Interactive web apps built with React, Next.js, and modern UX principles
                  </p>
                </div>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Fitts's Law: Larger touch targets and hover states improve usability"
                    position="top"
                  />
                )}
              </div>

              {/* Card 2 - Skills */}
              <div className="group relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-3xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    UI/UX with Apple HIG, Figma prototyping, and accessibility-first approach
                  </p>
                </div>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Gestalt Principles: Consistent spacing and alignment create visual harmony"
                    position="top"
                  />
                )}
              </div>

              {/* Card 3 - Experience */}
              <div className="group relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-3xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">UX Laws</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Applying psychology and UX principles to create intuitive interfaces
                  </p>
                </div>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Hick's Law: Simplified choices reduce cognitive load and decision time"
                    position="top"
                  />
                )}
              </div>
            </div>
          </div>

          {/* UX Laws Toggle */}
          <div className={`mb-8 transform transition-all duration-1000 ease-out delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">Show UX Laws</span>
              <div className="relative">
                <button
                  onClick={handleToggleUXLaws}
                  className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                    showUXLaws 
                      ? 'bg-blue-500 shadow-lg shadow-blue-500/30' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    showUXLaws ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Affordance: Toggle design clearly indicates interactivity and current state"
                    position="top"
                  />
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transform transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  View My Work
                </button>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Von Restorff Effect: High contrast CTA stands out and draws attention"
                    position="top"
                  />
                )}
              </div>
              
              <div className="relative">
                <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-105">
                  Get In Touch
                </button>
                {showUXLaws && (
                  <TooltipBubble 
                    content="Progressive Disclosure: Secondary action uses subtle styling to maintain hierarchy"
                    position="top"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}