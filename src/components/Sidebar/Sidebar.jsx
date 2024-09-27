
import { useContext, useState } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import {Link} from 'react-router-dom'
import { Transition } from '@headlessui/react';

const Sidebar = () => {

    const {isOpen, toggleSidebar} = useContext(SidebarContext);
    const [subContentVisible, setSubContentVisible] = useState(false);
    const toggleSubContent = () => {
      setSubContentVisible(!subContentVisible);
    };
  

  return (
    <>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 lg:hidden transition-opacity z-[1100] ${
          isOpen ? 'block' : 'hidden' 
        }`} 
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[100%] lg:hidden bg-white z-[1200] overflow-y-auto transition-transform duration-500 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full' 
        }`}
      >
        <div className="p-4">
          {/* Sidebar content */}
          <div className='flex justify-between items-center relative'>
            <Link to="/mern-pro1-intern/"
              onClick={toggleSidebar}
            >
              <img className='w-[8rem] h-[3.5rem] md:w-36 md:h-16 text-lg font-semibold mb-4' src="https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&w=640&q=75" alt="" />
            </Link>
            <span className='absolute top-3 right-3 rounded-full bg-[#79F4E4] p-1 hover:bg-[#E1FFA0] transition-all duration-300' 
                onClick={toggleSidebar} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6' color="#000000" fill="none">
                    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
            
          </div>
          
          <ul className='space-y-2'>
            <li className={`hover:bg-gray-300 rounded-3xl transition-all duration-300 w-full`}
            onClick={() => {
              toggleSidebar();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }} 
            >
                <Link to='/mern-pro1-intern/' className='block rounded-3xl p-2'>Home</Link>
            </li>
            <li className={`rounded-3xl`}
            >
                <div className="flex items-center justify-between px-4 pl-0" onClick={toggleSubContent}>
                  <p className='p-2'>
                      Services
                  </p>
                  <svg className={`w-6 h-6 ${subContentVisible ? "transform rotate-180 transition-all duration-300" : "transform rotate-0 transition-all duration-300"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`M19 9l-7 7-7-7`}
                    />
                  </svg>
                </div>
                
                <Transition
                  show={subContentVisible}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-out duration-200 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  
                    <ul className={`ml-0 mt-4 space-y-2 rounded-lg px-3`}>
                      
                      <li className='hover:bg-gray-300 transition-all duration-300 rounded-lg cursor-pointer'
                        onClick={()=> {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/mern-pro1-intern/services/fintech" className='block px-2 py-1'>FinTech Development</Link>
                      </li>
                      {/* <li className='hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/services/ecommerce" className='block p-2'>E-commerce Development</Link>
                      </li>
                      <li className='hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/services/kyc" className='block p-2'>KYC Validation</Link>
                      </li>
                      <li className='hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/services/api" className='block p-2'>API Development</Link>
                      </li>
                      <li className='hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/services/regtech" className='block p-2'>Regtech Solutions</Link>
                      </li>
                      <li className='hover:bg-gray-300 transition-all duration-200 rounded-lg cursor-pointer'
                        onClick={() => {
                          toggleSidebar();
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <Link to="/services/financial" className='block p-2'>Financial Literacy & Education</Link>
                      </li> */}
                    
                    </ul>
                  
                </Transition>
                  
              
            </li>
            <li className="hover:bg-gray-300 rounded-3xl = transition-all duration-300"
                onClick={() => {
                  toggleSidebar();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }} 
            >
              <Link to="/mern-pro1-intern/about" className='block p-2'>About</Link>
            </li>
            <li className=" hover:bg-gray-300 rounded-3xl transition-all duration-300"
                onClick={() => {
                  toggleSidebar();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }} 
            >
                <Link to="/mern-pro1-intern/contact" className='block p-2'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Button to toggle sidebar */}
      
    </>
  );
};

export default Sidebar;