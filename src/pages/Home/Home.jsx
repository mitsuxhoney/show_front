
import { useEffect } from 'react';
import { CarouselSize } from '@/components/demo/Carousel1.jsx';

function Home() {
  
  useEffect( () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {

            if(entry.target.id === "top-img"){
              entry.target.classList.remove("xl:opacity-0")
              entry.target.classList.add("scale-[1.6]")
              entry.target.classList.add("xl:opacity-1")
            }
            else{
              entry.target.classList.remove("opacity-0")
              entry.target.classList.remove("mt-28")
              entry.target.classList.add("opacity-1")
            }
            
          }  
      })
    },{
      threshold: 1
    }
  )
    const components = document.querySelectorAll("[data-animate]")
    components.forEach( component => {
      observer.observe(component);
    })
  }, [])

  
  return (
    <>
      <div className="mt-14 py-20 xl:pt-40 xl:pb-52 bg-[#79F4E4] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[90%] flex flex-col items-start gap-10 sm:max-md:w-[70%] md:w-[80%] relative">    
          <img data-animate id="top-img" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/banner/v1/img-2.png" className='hidden xl:flex w-48 absolute right-[16%] bottom-[-40%] xl:opacity-0 transition-all duration-1000' alt="" />    
          <h1 className="text-[26px] font-medium min-w-[90%] sm:max-md:text-[2rem] md:text-[42px] lg:text-[54px] lg:font-semibold lg:max-w-[50%]">Crafting Digital Excellence in Software, Fin-Tech, and Beyond.</h1>
          <p className="text-[16px] font-medium max-w-[90%] sm:max-md:text-[1.2rem] sm:max-md:max-w-full md:text-[20px]">
            Our mission at Xettle is to transform the software development and financial industries. We provide a wide range of services that address various demands in various industries, thanks to our team of seasoned professionals and dedication to innovation.
          </p>
          <div className="flex flex-col gap-4 sm:max-md:flex sm:max-md:flex-row sm:max-md:w-full  md:flex md:flex-row">
            <div className="flex justify-center bg-[#242528] rounded-md px-10 py-4 gap-4 sm:max-md:w-[50%] sm:max-md:px-4 sm:max-md:py-4 sm:max-md:text-[1rem]">
              <span className="text-white">Sign up</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-white"  fill="none">
                <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex justify-center bg-[white] rounded-md px-10 py-4 gap-4 sm:max-md:w-[50%] sm:max-md:px-4 sm:max-md:py-4 sm:max-md:text-[1rem]">
              <span>Sign up</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-black"  fill="none">
                <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#242528] text-white w-[100vw] flex flex-col justify-center items-center ">
        <div className="w-[90%] flex flex-col items-start gap-10 sm:max-md:w-[70%] md:w-[80%]">
          <h2 className="text-[20px] font-medium min-w-[90%] sm:max-md:text-[2rem] md:text-[40px] lg:font-semibold">Designed For Financial Inclusion,
            Transparency.
          </h2>
          <p className="text-[16px]">Next generation money</p>
          <div className="flex flex-col w-full">
            <div data-animate className={`flex flex-col border-[0.25px] border-[rgb(43,44,48)] mt-28 p-4 transition-all duration-500 cursor-default hover:bg-[#131217] hover:border-[#2b2c30] hover:border-l-[12px] opacity-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-16 lg:w-full `}>
              <div className="flex flex-col gap-2">
                <h3 className="text-[34px] font-medium lg:text-[2.9rem] lg:max-w-[500px] text-[#E1FFA0]">Built For Global Payments</h3>
                <p className="text-[#737375] lg:max-w-[500px]">Provide people across the globe easy access to financial services worldwide. Send money globally for near.</p>
              </div>
              <img className="w-56" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/core-feature/v1/list-card-1.png" alt="" />
            </div>
            <div data-animate className="flex flex-col border-[0.25px] border-gray-700 mt-28 p-4 hover:bg-[#131217] transition-all duration-500 cursor-default hover:border-[#2b2c30] hover:border-l-[12px] opacity-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-16">
              <div className="flex flex-col gap-2">
                <h3 className="text-[34px] font-medium lg:text-[2.9rem] lg:max-w-[500px] text-[#E1FFA0]">Corporate Settlement</h3>
                <p className="text-[#737375] lg:max-w-[500px]">Provide people across the globe easy access to financial services worldwide. Send money globally for near.</p>
              </div>
              <img className="w-56" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/core-feature/v1/list-card-2.png" alt="" />
            </div>
            <div data-animate className="flex flex-col border-[0.25px] border-gray-700 mt-28 p-4 transition-all duration-500 cursor-default hover:bg-[#131217] hover:border-[#2b2c30] hover:border-l-[12px] opacity-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-16">
              <div className="flex flex-col gap-2">
                <h3 className="text-[34px] font-medium lg:text-[2.9rem] lg:max-w-[500px] text-[#E1FFA0]">Local Business</h3>
                <p className="text-[#737375] lg:max-w-[500px]">Provide people across the globe easy access to financial services worldwide. Send money globally for near.</p>
              </div>
              <img className="w-56" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/core-feature/v1/list-card-3.png" alt="" />
            </div>
            <div data-animate className="flex flex-col border-[0.25px] border-gray-700 mt-28 p-4 transition-all duration-500 cursor-default hover:bg-[#131217] hover:border-[#2b2c30] hover:border-l-[12px] opacity-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-16">
              <div className="flex flex-col gap-2">
                <h3 className="text-[34px] font-medium lg:text-[2.9rem] lg:max-w-[500px] text-[#E1FFA0]">Internet Of Money</h3>
                <p className="text-[#737375] lg:max-w-[500px]">Provide people across the globe easy access to financial services worldwide. Send money globally for near.</p>
              </div>
              <img className="w-56" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/core-feature/v1/list-card-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#79F4E4] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] flex items-center justify-center gap-5 sm:max-md:w-[70%] md:w-[80%]">
            <CarouselSize />  
        </div> 
      </div>
      <div className="py-20 bg-white text-[#242528] w-[100vw] flex flex-col justify-center items-center ">
        <div className="w-[90%] flex flex-col items-start gap-10 sm:max-md:w-[70%] md:w-[80%]">
          <div className='flex flex-col gap-6 lg:flex lg:flex-row lg:justify-between w-full'>
            <div className='flex justify-start items-center gap-2'>
              <div className='rounded-full bg-[#79F4E4] w-4 h-4'></div>
              <h2>NEXT GENERATION MONEY</h2>
            </div>
            <button className='bg-[#79F4E4] flex justify-center items-center rounded-2xl w-36 px-6 py-1 font-medium transition-all duration-300 hover:text-[white] hover:bg-[#242528]'>VIEW ALL</button>
          </div>
          <div className='mt-4 border-t-none h-[0.06rem] w-[100%] bg-gray-400 mx-auto md:mt-6 lg:mt-8'></div>
          <div className='flex flex-col gap-10 w-full md:flex md:gap-11 md:flex-row md:flex-wrap lg:pl-6 lg:gap-13 xl:gap-6'>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform duration-500 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29.5%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform group-hover:transition-transform duration-300 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29.5%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform group-hover:transition-transform duration-300 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29.5%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform group-hover:transition-transform duration-300 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29.5%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform group-hover:transition-transform duration-300 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
            <div data-animate className='flex flex-col w-full gap-2 group relative p-4 mt-28 md:w-[46%] lg:w-[29.5%] xl:w-[31%] opacity-0 transition-all duration-500'>
              <img className='object-cover rounded-t-lg group-hover:scale-[1.03] h-auto group-hover:transform group-hover:transition-transform duration-300 group-hover:transtion-all group-hover:duration-300' src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/recent-blogs/v1/recent-blog-img-1.jpg" alt="" />
              <div className='flex flex-col gap-2 p-6'>
                <p className='text-[#81859E]'>Published On October 4, 2022</p>
                <h2 className='text-[1.4rem] lg:text-[19.3px] font-medium transition-all duration-300 hover:text-[#E1FFA0]'>Introducing Our Blockchain-Based Payment Platform</h2>
              </div> 
              <button className='group relative flex justify-start gap-2 items-center px-6 py-4 my-[-25px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-8 h-8 p-1 rounded-full bg-[#1A1B1D] text-white group-hover:bg-[#79F4E4] group-hover:transform-90 group-hover:rotate-45 group-hover:transition-all group-hover:duration-300' color="#000000" fill="none">
                  <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Read More</span>            
              </button>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home