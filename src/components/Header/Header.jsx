
import { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { SidebarContext } from '../../context/SidebarContext';
import  Navigation from './Navigation';



function Header() {
    const {toggleSidebar} = useContext(SidebarContext)
    const [scrolled, setScrolled] = useState(false);    

    function handleScroll(){
        if (window.scrollY > 0) 
            setScrolled(true)
        else 
            setScrolled(false)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`w-[100vw] z-[100] flex justify-center items-center py-2 ${scrolled ? 'bg-[white] transition-all duration-300 shadow-xl' : 'bg-[#79F4E4] transition-all duration-300 '} fixed top-0 left-0 `}>
        <div className='w-[90%] flex justify-between items-center sm:max-md:w-[70%] md:w-[80%]'>
            
            <Link to="/"
                onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                }}
            >
                <img className='w-[8rem] h-[3.5rem] md:w-36 md:h-16' src="https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&w=640&q=75" alt="Website Logo"  />
            </Link>
            
            <button className={`w-[3.2rem] flex md:hidden mr-4`} onClick={() => {
                toggleSidebar() 
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-[5rem] h-12 font-bold bg-[white] hover:bg-[#E1FFA0] transition-all duration-300 rounded-lg p-4 w-full h-full hover:text-[black] text-black`} fill="none">
                    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            
            <Navigation scrolled={scrolled} />
        </div>
    </header>
  )
}

export default Header