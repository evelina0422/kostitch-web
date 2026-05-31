import {createBrowserRouter, Outlet, useLocation} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Capabilities from '../pages/Capabilities'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isPortfolio = pathname === '/portfolio'
  const isServices = pathname === '/capabilities'

  return (
    <div className={`min-h-screen flex flex-col ${isHome ? 'bg-cream' : ''}`}>
      <Navbar />
      <main className={`flex-grow ${isHome || isAbout ? '' : 'pt-20'}${isHome ? ' bg-cream' : ''}`}>
        <Outlet />
      </main>
      <Footer paper={!isAbout && !isPortfolio && !isServices} />
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
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
