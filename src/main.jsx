import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from './ctx/ThemeContext.jsx'
import LanguageContext from './ctx/LanguageContext.jsx'
import Home from './components/Home/Home.jsx'
import Catalog from './components/Catalog/Catalog.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import SingleProduct from './components/SingleProduct/SingleProduct.jsx'
import FiltersContext from "./ctx/FiltersContext.jsx"
import ErrorBoundary from './components/Errors/ErrorBoundary/ErrorBoundary.jsx'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            onError: (error) => console.error('Query error:', error)
        },
        mutations: {
            onError: (error) => console.error('Mutation error:', error)
        }
    }
})

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                errorElement: <ErrorBoundary/>,
                children: [
                    { index: true,  element: <Home /> },
                    { path: '/product/:id',  element: <SingleProduct /> },
                    { path: '/catalog',  element: <Catalog /> },
                    { path: '/about',  element: <About /> },
                    { path: '/contact',  element: <Contact /> },
                ]
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <LanguageContext>
              <ThemeProvider>
                  <FiltersContext>
                      <RouterProvider router={router}/>
                  </FiltersContext>
              </ThemeProvider>
          </LanguageContext>
      </QueryClientProvider>
  </StrictMode>,
)