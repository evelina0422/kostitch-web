import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Menu, X} from 'lucide-react'
import {motion, AnimatePresence} from 'framer-motion'
import Button from '../ui/Button'
import {siteConfig} from '../../data/siteConfig'
import logo from '../../assets/logo.svg'

const navLinks = [
  {path: '/', label: 'Home'},
  {path: '/capabilities', label: 'Capabilities'},
  {path: '/industries', label: 'Industries'},
  {path: '/portfolio', label: 'Portfolio'},
  {path: '/process', label: 'Process'},
  {path: '/about', label: 'About'},
  {path: '/contact', label: 'Contact'},
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark shadow-md' : 'bg-dark/95 backdrop-blur-sm'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt={siteConfig.companyName} className="h-[54px] w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-text-on-dark hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm">Request a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-on-dark"
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
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className="lg:hidden bg-dark border-t border-border-line"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-text-on-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block">
                <Button size="sm" className="w-full">Request a Quote</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
