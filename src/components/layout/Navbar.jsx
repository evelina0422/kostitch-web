import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'

const navLinks = [
  { path: '/capabilities', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/process', label: 'Process' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About Us' },
  { path: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update background on scroll
      setIsScrolled(currentScrollY > 20)

      // Determine scroll direction and visibility
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsVisible(false)
      }

      // Always show navbar at the top
      if (currentScrollY < 10) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const isAbout = location.pathname === '/about'
  const isBlogIndex = location.pathname === '/blog'
  const hasHeroNav = isAbout || isBlogIndex
  const showSolidNav = hasHeroNav ? isOpen : isScrolled || isOpen
  const lightText = !showSolidNav && hasHeroNav

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidNav ? 'bg-[#f8f6f1] shadow-md' : 'bg-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-28">
          <Link to="/" className="flex items-center bg-transparent">
            <img src="/logo.png" alt={siteConfig.companyName} className="h-16 w-auto bg-transparent object-contain lg:h-[104px]" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors ${location.pathname === link.path
                  ? 'text-accent'
                  : lightText
                    ? 'text-white hover:text-accent'
                    : 'text-text-on-light hover:text-accent'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${lightText ? 'text-white' : 'text-text-on-light'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f8f6f1] border-t border-border-line"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium ${location.pathname === link.path
                    ? 'text-accent'
                    : 'text-text-on-light'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block">
                <Button size="sm" className="w-full">Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
