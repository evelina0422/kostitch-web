import {createBrowserRouter, Outlet} from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Capabilities from '../pages/Capabilities'
import Industries from '../pages/Industries'
import Portfolio from '../pages/Portfolio'
import Process from '../pages/Process'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
        path: '/industries',
        element: <Industries />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/process',
        element: <Process />,
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
