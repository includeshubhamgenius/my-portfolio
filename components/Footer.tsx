'use client'

import TooltipBubble from './TooltipBubble'

interface FooterProps {
  showUXLaws?: boolean
}

export default function Footer({ showUXLaws = false }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shubham-verma',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shubhamverma',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:shubham@example.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      )
    }
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Shubham Verma
              </h3>
              {showUXLaws && (
                <TooltipBubble 
                  lawName="Brand Consistency"
                  description="Maintaining visual identity across all touchpoints"
                />
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Frontend Developer crafting intuitive digital experiences with modern web technologies and UX principles.
            </p>
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500">
              <span>Made with</span>
              <svg className="w-3 h-3 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>and Next.js</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="relative">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {showUXLaws && (
                <TooltipBubble 
                  lawName="Information Architecture"
                  description="Organized navigation aids user wayfinding"
                />
              )}
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="relative">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 hover:scale-110"
                    aria-label={`Connect on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              {showUXLaws && (
                <TooltipBubble 
                  lawName="Fitts's Law"
                  description="Larger touch targets with hover states improve usability"
                />
              )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Open to new opportunities</p>
              <p className="text-blue-600 dark:text-blue-400">shubham@example.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="relative">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                © {currentYear} Shubham Verma. All rights reserved.
              </p>
              {showUXLaws && (
                <TooltipBubble 
                  lawName="Legal Compliance"
                  description="Copyright notice provides legal protection and professionalism"
                />
              )}
            </div>

            {/* Status Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="relative">
                <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available for work</span>
                </div>
                {showUXLaws && (
                  <TooltipBubble 
                    lawName="Status Visibility"
                    description="Clear availability status helps potential employers"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <div className="relative inline-block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z"/>
              </svg>
              <span>Back to top</span>
            </button>
            {showUXLaws && (
              <TooltipBubble 
                lawName="Progressive Enhancement"
                description="Smooth scroll improves user experience over page jumps"
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}