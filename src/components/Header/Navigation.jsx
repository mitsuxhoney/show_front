/* eslint-disable react/prop-types */
import { NavLink  } from 'react-router-dom'
import { useState } from 'react'
function Navigation({scrolled}) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const openServicesDropdown = () => {
    setIsServicesDropdownOpen(true);
  }

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  }


  return (
    <nav className='hidden md:flex'>
        <ul className='w-full relative flex justify-between gap-14 text-[1rem] md:gap-10 lg:gap-12'>
            <li className={`cursor-pointer group relative rounded-lg py-[0.4rem] ${scrolled ? 'hover:bg-[#79F4E4]' : 'hover:bg-white'} transition-all duration-200`} onMouseEnter={openServicesDropdown} onMouseLeave={closeServicesDropdown}>
                <div className={`px-2 ${scrolled ? "hover:bg-[#79F4E4] rounded-lg" : "hover:bg-white rounded-lg"}`} >
                    Services
                </div>
                {
                    isServicesDropdownOpen && (
                        <div className={`absolute top-[91.4%] left-[-150px] lg:left-[-250px] mt-[0.30rem] w-[30rem] lg:w-[40rem] rounded-md shadow-lg ${scrolled ? "bg-gray-200" : "bg-white" } ring-1 ring-black ring-opacity-5`}>
                            <div className="py-2 px-2 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {/* Dropdown content for Services */}
                                <NavLink to="/services/fintech" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                      }}
                                >
                                    Fintech Software Development
                                </NavLink>
                                {/* <NavLink to="/services/ecommerce" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                      }}
                                >
                                    E-commerce Development
                                </NavLink>
                                <NavLink to="/services/api" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                    }}
                                >
                                    API Development
                                </NavLink>
                                <NavLink to="/services/kyc" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                    }}
                                >
                                    KYC & Validation
                                </NavLink>
                                <NavLink to="/services/regtech" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                    }}
                                >
                                    RegTech Solutions
                                </NavLink>
                                <NavLink to="/services/financial" className={`block px-4 py-2 text-sm text-gray-700 ${scrolled ? "hover:bg-gray-100" : "hover:bg-gray-200"}`} role="menuitem"
                                    onClick={() => {
                                        window.scrollTo({
                                          top: 0,
                                          behavior: 'smooth'
                                        });
                                    }}
                                >
                                    Financial Literacy & Education
                                </NavLink>  */}
                            </div>
                        </div>
                    )
                }
            </li>
            <li className={`rounded-lg py-[0.4rem] ${scrolled ? 'hover:bg-[#79F4E4]' : 'hover:bg-white'} transition-all duration-200`}
                onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                }}
            >
                <NavLink to="/about" className={({isActive}) => `p-2 ${isActive ? scrolled ? "bg-[#79F4E4] rounded-lg" : "bg-white rounded-lg" : "none" }`}>
                    About
                </NavLink>
            </li>
            <li className={`rounded-lg py-[0.4rem] ${scrolled ? 'hover:bg-[#79F4E4]' : 'hover:bg-white'} transition-all duration-200`}
                onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                }}
            >
                <NavLink to="/contact" className={({isActive}) => `p-2 ${isActive ? scrolled ? "bg-[#79F4E4] rounded-lg" : "bg-white rounded-lg" : "none" }`}>
                    Contact Us
                </NavLink> 
            </li> 
        </ul>
    </nav>
  )
}

export default Navigation