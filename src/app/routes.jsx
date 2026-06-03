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

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isPortfolio = pathname === '/portfolio'
  const isServices = pathname === '/capabilities'
  const isBlog = pathname === '/blog' || pathname.startsWith('/blog/')
  const isBlogIndex = pathname === '/blog'
  const isPortfolioIndex = pathname === '/portfolio'
  const isContact = pathname === '/contact'
  const isCareers = pathname === '/careers'

  return (
    <div className={`min-h-screen flex flex-col ${isHome ? 'bg-cream' : ''}`}>
      <Navbar />
      <main className={`flex-grow ${isHome || isAbout || isBlogIndex || isPortfolioIndex ? '' : 'pt-20'}${isHome ? ' bg-cream' : ''}`}>
        <Outlet />
      </main>
      <Footer paper={!isAbout && !isPortfolio && !isServices && !isBlog && !isContact && !isCareers} />
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
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
