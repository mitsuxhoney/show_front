/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import ReactDOM from 'react-dom/client'
import './main.css'
import './index.css'
import { lazy, Suspense } from'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const Layout = lazy( () => import('./Layout') )
const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Ecommerce = lazy(() => import('./pages/Services/Ecommerce'))
const Api = lazy(() => import('./pages/Services/Api'))
const FinancialLiteracy = lazy(() => import('./pages/Services/FinancialLiteracy'))
const Kyc = lazy(() => import('./pages/Services/Kyc'))
const Regtech = lazy(() => import('./pages/Services/Regtech'))
const Fintech = lazy(() => import('./pages/Services/Fintech'))


const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route element={<Suspense fallback = {
      <div></div>
      } ><Layout /></Suspense>} >
      <Route path="/" element={<Suspense fallback = {
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
      </div>
    } ><Home /></Suspense>}  />
      <Route path="/about" element={
      <Suspense fallback = {
        <div className="flex items-center justify-center h-screen w-screen">
          <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
              </div>
          </div>
        </div>
      } ><About /></Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Contact /></Suspense>
      } />  
      <Route path="/services/fintech" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Fintech /></Suspense>
      } />
      {/* <Route path="/services/api" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Api /></Suspense>
      } />
      <Route path="/services/financial" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><FinancialLiteracy /></Suspense>
      } />
      <Route path="/services/kyc" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Kyc /></Suspense>
      } />
      <Route path="/services/regtech" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Regtech /></Suspense>
      } />
      <Route path="/services/ecommerce" element={
        <Suspense fallback = {
          <div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                </div>
            </div>
          </div>
        } ><Ecommerce /></Suspense>
      } /> */}
    </Route>
    <Route path="/*" element={
      <Suspense fallback = {
        <div className="flex items-center justify-center h-screen w-screen">
          <div className="relative">
              <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
              <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
              </div>
          </div>
        </div>
      } ><NotFound /></Suspense>
    } />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <RouterProvider router={router} />
    </>
)

