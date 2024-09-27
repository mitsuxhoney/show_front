import Header from './components/Header/Header'
import { lazy, Suspense } from 'react'
const Sidebar = lazy(() => import('./components/Sidebar/Sidebar')) 
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom'
import {useState} from 'react'
import { SidebarContext } from './context/SidebarContext';

function Layout() {

  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };
  
  
  return (
    <SidebarContext.Provider value={{isOpen, toggleSidebar}} >
      <div className='h-screen snap-proximity snap-y'>
        <Header />
        <div className='flex'>
          <div className='w-1/4'>
            <Suspense fallback={
              <div></div>
            }>
              <Sidebar />
            </Suspense>
            
          </div>
          <main>
              <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </SidebarContext.Provider>
  )
}

export default Layout;