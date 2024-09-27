import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

function About() {
  const [values, setValues] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
    value6: false
  })
  useEffect( () => {
    const observer1 = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
          if(entry.isIntersecting){
            let count = 0;
            if(entry.target.id === "year-founded"){
              
              const myInterval = setInterval( () => {
                if( count === 2020 ){
                  clearInterval(myInterval);
                }
                count += 4;
                entry.target.innerHTML = count;
              },2.5)
            observer1.unobserve(entry.target)
            }
            else if(entry.target.id === "monthly-users"){
              const myInterval = setInterval( () => {
                if( count === 29 ){
                  clearInterval(myInterval);
                }
                count += 1;
                entry.target.innerHTML = count + "M";
              },50)
              observer1.unobserve(entry.target)
            }

            else if(entry.target.id === "successful-transactions"){
              const myInterval = setInterval( () => {
                if( count === 98 ){
                  clearInterval(myInterval);
                }
                count += 1;
                entry.target.innerHTML = count + "%";
              },15)
              observer1.unobserve(entry.target)
            }

            else if(entry.target.id === "years-experience"){
              const myInterval = setInterval( () => {
                if( count === 19 ){
                  clearInterval(myInterval);
                }
                count += 1;
                entry.target.innerHTML = count + "+";
              },55)
              observer1.unobserve(entry.target)
            }
              
            else {
              entry.target.classList.remove('opacity-0')
              entry.target.classList.remove('mt-64')
              entry.target.classList.add('opacity-1')
            }
          }
          
      })
    },
    {
      threshold:0.59
    } 
  )

    const animate = document.querySelectorAll('[data-animate]')
    animate.forEach( (component1) => {
      observer1.observe(component1)
    })
    return () => {
      observer1.disconnect();
    };
  }, [])
  return (
  <div className="scroll-smooth">
    <div className="snap-start mt-14 py-20 xl:py-40 bg-[#79F4E4] w-[100vw] flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col items-center text-[2rem] tracking-widest gap-5 sm:max-md:w-[70%] md:w-[80%] ">
        About Us
      </div>
    </div>
    <div className="snap-start py-20 bg-[white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
      <div className="w-[90%] flex flex-col items-center font-medium gap-5 sm:max-md:w-[70%] md:w-[80%] xl:w-[90%]">
        <div className="flex flex-col text-[#242528] gap-4">
          <h2 className="text-[2.1rem] md:text-[3.5rem]">Your Go To Financial Department. Your Go To Financial Department.</h2>
          <div className="flex flex-col gap-6 xl:flex-row">
            <div className="xl:w-[50%]">
              <img data-animate className="ml-0 max-h-[100dvh] max-w-[100dvw] w-full transition-all duration-1000 opacity-0 mt-64 ease-linear rounded-[2.5rem] xl:h-[580px]" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/about-us/paly-video-img.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-6 xl:w-[50%]">
              <p data-animate className="text-[1.1rem] transition-all duration-1000 opacity-0 mt-64 ease-linear text-[#76797C] xl:w-[100%]">Sodales mauris quam faucibus scelerisque risus malesuada nulla. Cursus enim quis elementum feugiat ut. Phasellus aviverra facilisis eu purus. Et risus magna dis nisl nulla sed diam.</p>
              <div className="flex flex-col gap-6 flex-wrap lg:flex-row lg:gap-4">
                <div data-animate className="flex flex-col gap-0 items-center justify-center transition-all ease-linear duration-1000 mt-64 opacity-0 rounded-2xl bg-[#F1F3F3] p-10 py-20 lg:w-[49%] lg:p-24 xl:w-[48%] xl:p-14">
                  <div data-animate id="year-founded" className="text-[4rem] xl:text-[3.5rem]"></div>
                  <p className="text-[#76797C] text-[1.05rem] xl:text-[1.05rem]">Year Founded</p>
                </div>
                <div data-animate className="flex flex-col items-center justify-center transition-all ease-linear duration-1000 mt-64 opacity-0 rounded-2xl bg-[#F1F3F3] p-10 py-20 lg:w-[49%] lg:p-24 xl:w-[48%] xl:p-14"> 
                  <h2 data-animate id="monthly-users" className="text-[4rem] xl:text-[3.5rem]"></h2>
                  <p className="text-[#76797C] text-[1.1rem]">Monthly Users</p>
                </div>
                <div data-animate className="flex flex-col items-center justify-center transition-all duration-1000 ease-linear mt-64 opacity-0 rounded-2xl bg-[#F1F3F3] p-10 py-20 lg:w-[100%] lg:p-24 xl:p-14">
                  <h2 data-animate id="successful-transactions" className="text-[4rem] xl:text-[3.5rem]">99.9%</h2>
                  <p className="text-[#76797C] text-[1.1rem]">Successful Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
   
    <div className="snap-start py-20 bg-[#242528] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
      <div className="w-[90%] text-[#FFFFFF] flex flex-col items-center font-medium gap-5 sm:max-md:w-[70%] md:w-[80%] lg:w-[90%]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p>OUR MISSION</p>
            <h2 className="text-[1.6rem] md:text-[2.5rem] lg:text-[3rem]">We founded Finflow to empower tech people to make better financial decisions so they have the freedom to focus on what matters most.</h2>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
            <div data-animate className="bg-[#2B2C30] rounded-3xl h-[300px] opacity-0 mt-64 ease-linear transition-all duration-500 flex flex-col justify-center items-center gap-5 lg:w-[31%]">
              <div className="rounded-full bg-[#79F4E4] p-4 animate-bounce transition-all duration-2000">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10" color="#000000" fill="none">
                    <path d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>  
              </div>
              <p className="text-[1.3rem] text-center max-w-[80%] lg:max-w-[90%]">Faster Business Banking, For Everyone</p>
            </div>
            <div data-animate className="bg-[#2B2C30] rounded-3xl h-[300px] opacity-0 mt-64 ease-linear transition-all duration-700 flex flex-col justify-center items-center gap-5 lg:w-[31%]">
              <div className="rounded-full bg-[#79F4E4] p-4 animate-bounce transition-all duration-2000">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10" color="#000000" fill="none">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M14.7102 10.0611C14.6111 9.29844 13.7354 8.06622 12.1608 8.06619C10.3312 8.06616 9.56136 9.07946 9.40515 9.58611C9.16145 10.2638 9.21019 11.6571 11.3547 11.809C14.0354 11.999 15.1093 12.3154 14.9727 13.956C14.836 15.5965 13.3417 15.951 12.1608 15.9129C10.9798 15.875 9.04764 15.3325 8.97266 13.8733M11.9734 6.99805V8.06982M11.9734 15.9031V16.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-[1.3rem] text-center max-w-[80%] lg:max-w-[90%]">Faster Business Banking, For Everyone</p>
            </div>
            <div data-animate className="bg-[#2B2C30] rounded-3xl h-[300px] opacity-0 mt-64 ease-linear transition-all duration-900 flex flex-col justify-center items-center gap-5 lg:w-[31%]">
              <div className="rounded-full bg-[#79F4E4] p-4 animate-bounce transition-all duration-2000">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 lg:w-10 lg:h-10" color="#000000" fill="none">
                    <path d="M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="text-[1.3rem] text-center max-w-[80%] lg:max-w-[90%]">Faster Business Banking, For Everyone</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div className="snap-start py-20 bg-[#242528] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
      <div className="w-[90%] text-[#FFFFFF] flex flex-col items-center font-medium gap-8 sm:max-md:w-[70%] md:w-[80%] lg:w-[90%]">
        <div className="bg-[#2B2C30] w-full h-[1px] mt-[-5rem]"></div> 
        <div className="flex flex-col mt-6 w-full gap-8">
          <div className="flex flex-col items-center gap-4">
            <p className="">OUR VALUES</p>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem]">What We Stand For</h2>
          </div>
          <div className="flex flex-col gap-10 lg:px-4 xl:px-8">
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value1:!prev.value1
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value1 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Teamwork</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value1 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value1}
                enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[40%] opacity-0"
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value2:!prev.value2
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value2 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Innovation</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value2 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value2}
                enter="transition ease-in duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-out duration-300 transform"
                leaveFrom="translate-y-[80%] opacity-100"
                leaveTo="-translate-y-[40%] opacity-0"
              
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value3:!prev.value3
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value3 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Impact</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value3 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value3}
                enter="transition ease-in duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-out duration-300 transform"
                leaveFrom="translate-y-[80%] opacity-100"
                leaveTo="-translate-y-[40%] opacity-0"
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value4:!prev.value4
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value4 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Freedom</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value4 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value4}
                enter="transition ease-in duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-out duration-300 transform"
                leaveFrom="translate-y-[80%] opacity-100"
                leaveTo="-translate-y-[40%] opacity-0"
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value5:!prev.value5
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value5 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Integrity</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value5 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value5}
                enter="transition ease-in duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-out duration-300 transform"
                leaveFrom="translate-y-[80%] opacity-100"
                leaveTo="-translate-y-[40%] opacity-0"
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
            <div className="flex flex-col gap-6 w-full"
              onClick={ () => {
                setValues( (prev) => {
                  return {
                   ...prev,
                    value6:!prev.value6
                  }
                })
              }}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className={`text-[1.8rem]  ${values.value6 ? "text-[#79F4E4]" : ""} md:text-[2rem] lg:text-[2.5rem]`}>Ambition</span>
                <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${values.value6 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                    <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>   
                </div>
              </div>
              <Transition
                show={values.value6}
                enter="transition ease-in duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-out duration-300 transform"
                leaveFrom="translate-y-[80%] opacity-100"
                leaveTo="-translate-y-[40%] opacity-0"
              >
                <div className="flex flex-col gap-4 mt-6">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="snap-start py-14 bg-[white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
      <div className="w-[90%] text-[#242528] flex flex-col items-center font-medium gap-5 sm:max-md:w-[70%] md:w-[80%] lg:w-[90%]">
        <div className="flex flex-col gap-6 lg:gap-14"> 
          <div className="flex flex-col">
            <h3 className="text-[1.7rem] md:font-semibold md:text-[3.2rem] lg:text-[4rem]">Designed To Give Entrepreneurs The Banking Experience They Deserve.</h3>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div data-animate className="flex flex-col bg-[#EFF1F1] shadow-xl opacity-0 mt-64 transition-all ease-linear duration-500 rounded-2xl w-full p-4 lg:w-[50%]">
              <img className="shadow-3xl rounded-2xl lg:h-full" src="https://images.unsplash.com/photo-1608286022625-bc07f7a21154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div data-animate className="flex flex-col gap-7 opacity-0 mt-64 ease-linear transition-all duration-700 lg:w-[50%] xl:gap-10 justify-center">
              <div className="flex justify-between items-center px-2">
                <span data-animate id="years-experience" className="text-[3.8rem] md:text-[4.5rem] xl:text-[7rem] text-[#242528] font-semibold"></span>
                <span className="text-[1.3rem] max-w-[40%] md:text-[1.4rem] text-[#81797C] text-right xl:text-[1.8rem]">Years of Experience</span>
              </div>
              <div className="bg-[#919293] h-[1px] w-full"></div>
              <div className="text-[#CCC3CC] xl:text-[1.2rem]">Etiam pulvinar vestibulum tellus nisi. Sed velit ultrices morbi id egestas fusce egestas lectus urna. Cras mattis cras ac amet purus malesuada etiam amet nec. Id ut eu non cum risus feugiat eu lacus.</div>
              <div className="flex gap-2 items-center group">
                <div className="bg-[#242528] p-1 rounded-full group-hover:bg-[#75EFE1] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-[white] w-8 h-8 transition-all duration-300 group-hover:transform group-hover:rotate-45 " color="#000000" fill="none">
                    <path d="M17 7L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Learn More</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#242528] text-[2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">The Founders</h2>
            <p className="text-[#768088] font-light xl:text-[1.2rem]">
              Proin posuere hendrerit at magna sit condimentum aenean.
              Penatibus nibh egestas risus et metus libero. Sem odio eu.
            </p>
          </div>
          <div className="flex flex-col mt-8 gap-10 md:flex-row md:flex-wrap lg:gap-11 xl:gap-11">
            <div data-animate className="flex flex-col w-full gap-6 md:w-[46%] lg:w-[21%] xl:w-[22%] group cursor-default opacity-0 transition-all ease-linear duration-600 mt-64">
              <div className="rounded-lg">
                <img className="rounded-2xl group-hover:object-cover group-hover:scale-[1.03] transition-all duration-300 w-full" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/the-founders-img/team-img-1.jpg" alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[1.5rem] hover:text-[#75EFE1] transition-all duration-300">Aaron Hyde</h3>
                  <p className="text-[#768088]">Co-founder and CEO</p>
                </div>
                <div className="bg-[#F1F3F3] rounded-full p-2 hover:bg-[#75EFE1] transition-all duration-300 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-animate className="flex flex-col w-full gap-6 md:w-[46%] lg:w-[21%] xl:w-[22%] cursor-default group opacity-0 ease-linear transition-all duration-700 mt-64">
              <div className="rounded-lg">
                <img className="rounded-2xl w-full group-hover:object-cover group-hover:scale-[1.03] transition-all duration-300" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/the-founders-img/team-img-1.jpg" alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[1.5rem] hover:text-[#75EFE1] transition-all duration-300">Aaron Hyde</h3>
                  <p className="text-[#768088]">Co-founder and CEO</p>
                </div>
                <div className="bg-[#F1F3F3] rounded-full p-2 hover:bg-[#75EFE1] transition-all duration-300 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-animate className="flex flex-col w-full gap-6 md:w-[46%] lg:w-[21%] xl:w-[22%] cursor-default group opacity-0 ease-linear transition-all duration-800 mt-64">
              <div className="rounded-lg">
                <img className="rounded-2xl w-full group-hover:object-cover group-hover:scale-[1.03] transition-all duration-300" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/the-founders-img/team-img-1.jpg" alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[1.5rem] hover:text-[#75EFE1] transition-all duration-300">Aaron Hyde</h3>
                  <p className="text-[#768088]">Co-founder and CEO</p>
                </div>
                <div className="bg-[#F1F3F3] rounded-full p-2 hover:bg-[#75EFE1] transition-all duration-300 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-animate className="flex flex-col w-full gap-6 md:w-[46%] lg:w-[21%] xl:w-[22%] cursor-default group opacity-0 ease-linear transition-all duration-900 mt-64">
              <div className="rounded-lg">
                <img className="rounded-2xl w-full group-hover:object-cover group-hover:scale-[1.03] transition-all duration-300" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/the-founders-img/team-img-1.jpg" alt="" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="text-[1.5rem] hover:text-[#75EFE1] transition-all duration-300">Aaron Hyde</h3>
                  <p className="text-[#768088]">Co-founder and CEO</p>
                </div>
                <div className="bg-[#F1F3F3] rounded-full p-2 hover:bg-[#75EFE1] transition-all duration-300 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 mb-10 text-[#242528] w-full ">
           <div data-animate className="w-full mx-auto rounded-xl shadow-xl bg-[#F1F3F3] py-6 opacity-0 mt-64 transition-all ease-linear duration-500 xl:py-8">
              <div className="w-[90%] lg:w-[95%] xl:w-[95%] mx-auto rounded-xl bg-[#FFFFFF] flex flex-col justify-center gap-8 p-10 xl:gap-10">
                <h2 className="text-center text-[1.8rem] md:text-[3.6rem] font-semibold">Interested To Join Our Team?</h2>
                <p className="text-[#B4ABA0] text-center xl:max-w-[50%] mx-auto">
                  Natoque tellus aliquam aenean justo consequat semper adipiscing.
                  Facilisis vestibulum pretium ut viverra malesuada.
                </p>
                <div className="flex justify-between gap-3 items-center bg-[#242528] rounded-lg px-4 py-4 md:px-6 md:py-6 lg:px-8 mx-auto group hover:bg-[white] transition-all cursor-pointer duration-500">
                  <span className="text-[#ffffff] group-hover:text-[black] transition-all duration-500 text-[0.9rem] md:text-[1.1rem]">VIEW OPEN POSITIONS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-[white] group-hover:text-[black] transition-all duration-500" color="#000000" fill="none">
                    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default About