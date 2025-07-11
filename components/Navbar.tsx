'use client'

import { useState, useEffect } from 'react'
import TooltipBubble from './TooltipBubble'

interface NavbarProps {
  showUXLaws?: boolean
}

export default function Navbar({ showUXLaws = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="relative">
            <a href="#home" className="group">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300">
                Shubham Verma
              </h1>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            {showUXLaws && (
              <TooltipBubble 
                content="Recognition over Recall: Brand name always visible for easy navigation back to home"
                position="bottom"
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative">
                <a
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-all duration-300 hover:scale-105 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </a>
                {showUXLaws && index === 0 && (
                  <TooltipBubble 
                    content="Fitts's Law: Larger touch targets with padding improve click accuracy"
                    position="bottom"
                  />
                )}
              </div>
            ))}
            
            {/* Resume Download Button */}
            <div className="relative">
              <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                Resume
              </button>
              {showUXLaws && (
                <TooltipBubble 
                  content="Von Restorff Effect: High contrast CTA stands out from navigation links"
                  position="bottom"
                />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
            {showUXLaws && (
              <TooltipBubble 
                content="Affordance: Hamburger menu universally recognized as mobile navigation trigger"
                position="bottom"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}