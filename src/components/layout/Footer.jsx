import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'
import { SiTiktok, SiYoutube, SiPinterest } from 'react-icons/si'
import { siteConfig } from '../../data/siteConfig'

const footerLinks = {
  company: [
    { path: '/about', label: 'About Us' },
    { path: '/capabilities', label: 'Services' },
    { path: '/repairs', label: 'Tailor & Repairs' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Quote' },
  ],
}

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

export default function Footer({ paper = true, compactTop = false }) {
  return (
    <footer
      className="bg-cream text-black bg-repeat"
      style={paper ? paperBackground : undefined}
    >
      <div
        className={`container-custom pb-12 md:pb-16 ${compactTop ? 'pt-12 md:pt-16' : 'pt-48 md:pt-64'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4 bg-transparent">
              <img
                src="/logo.png"
                alt={siteConfig.companyName}
                className="h-28 md:h-36 w-auto max-w-[400px] md:max-w-[480px] bg-transparent object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-black/80 mb-4">{siteConfig.tagline}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-black font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.businessHours.map(({ days, hours }) => (
                <li key={days}>
                  <span className="font-medium">{days}</span>
                  <br />
                  <span className="text-black/80">{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="lg:col-start-4">
            <h4 className="text-black font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              {siteConfig.social.tiktok && (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                  aria-label="TikTok"
                >
                  <SiTiktok size={20} />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                  aria-label="YouTube"
                >
                  <SiYoutube size={20} />
                </a>
              )}
              {siteConfig.social.pinterest && (
                <a
                  href={siteConfig.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:text-accent transition-colors"
                  aria-label="Pinterest"
                >
                  <SiPinterest size={20} />
                </a>
              )}
            </div>
            <Link to="/contact">
              <button className="w-full bg-accent text-text-on-dark py-2 px-4 rounded-lg font-semibold hover:bg-accent-hover transition-colors">
                Quote
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm text-black/70">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
