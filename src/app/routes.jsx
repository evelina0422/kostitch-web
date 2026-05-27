import {createBrowserRouter, Outlet} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Capabilities from '../pages/Capabilities'
import Portfolio from '../pages/Portfolio'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8">
        <Outlet />
      </main>
      <Footer />
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
