import {useEffect} from 'react'
import {createBrowserRouter, Outlet, useLocation} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Capabilities from '../pages/Capabilities'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import Careers from '../pages/Careers'
import Repairs from '../pages/Repairs'

const paperBackground = {
  backgroundImage: 'url(/images/hero-paper-tile.png?v=2)',
  backgroundSize: '360px 440px',
}

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'})
  }, [pathname])

  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isPortfolio = pathname === '/portfolio'
  const isServices = pathname === '/capabilities'
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')
  const isBlogIndex = pathname === '/blog'
  const isPortfolioIndex = pathname === '/portfolio'
  const isContact = pathname === '/contact'
  const isCareers = pathname === '/careers'
  const isRepairs = pathname === '/repairs'

  return (
    <div
      className={`min-h-screen flex flex-col ${isHome ? 'bg-cream bg-repeat' : ''}`}
      style={isHome ? paperBackground : undefined}
    >
      <Navbar />
      <main
        className={`flex-grow ${isBlogIndex ? 'flex flex-col' : ''} ${isHome || isAbout || isBlogIndex || isPortfolioIndex || isServices ? '' : 'pt-20'}`}
      >
        <Outlet />
      </main>
      <Footer
        paper={!isAbout && !isPortfolio && !isServices && !isBlog && !isContact && !isCareers && !isRepairs}
        compactTop={isBlogIndex}
      />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/capabilities',
        element: <Capabilities />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:slug',
        element: <BlogPost />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/repairs',
        element: <Repairs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
