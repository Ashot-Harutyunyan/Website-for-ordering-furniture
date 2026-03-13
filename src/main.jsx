import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ThemeProvider from './ctx/ThemeContext.jsx'
import LanguageContext from './ctx/LanguageContext.jsx'
import Home from './components/Home/Home.jsx'
import Catalog from './components/Catalog/Catalog.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import SingleProduct from './components/SingleProduct/SingleProduct.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        // errorElement: <ErrorBoundary/>,
        children: [
            // {
                // errorElement: <ErrorBoundary/>,
                // children: [
                    { index: true,  element: <Home /> },
                    { path: '/product/:id',  element: <SingleProduct /> },
                    { path: '/catalog',  element: <Catalog /> },
                    { path: '/catalog/:id',  element: <SingleProduct /> },
                    { path: '/about',  element: <About /> },
                    { path: '/contact',  element: <Contact /> },
                // ]
            // }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LanguageContext>
          <ThemeProvider>
              <RouterProvider router={router}/>
          </ThemeProvider>
      </LanguageContext>
  </StrictMode>,
)