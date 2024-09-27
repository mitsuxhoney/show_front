import { useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import { CarouselContact } from "@/components/demo/CarouselContact"

function Contact() {
  const [questions, setQuestions] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false
  })

  useEffect( () => {
    const observer = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
          if(entry.isIntersecting){
            entry.target.classList.remove('opacity-0')
            entry.target.classList.remove('mt-44')
            entry.target.classList.add('opacity-1')
          }
      })
    },
    {
      threshold:0.5
    } 
  )
    const components = document.querySelectorAll('[data-animate]')
    components.forEach( (component) => {
      observer.observe(component)
    })
  }) 
  return (
    <>
      <div className="mt-16 py-20 xl:py-40 bg-[#79F4E4] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[90%] flex flex-col items-center text-[2rem] tracking-widest gap-5 sm:max-md:w-[70%] md:w-[80%]">
          Feel Free to Contact Us. 
        </div>
      </div>
      <div className="py-20 xl:py-40 bg-[white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] flex flex-col items-center tracking-wider gap-5 sm:max-md:w-[70%] md:w-[80%]">
          <div className="flex flex-col gap-14 lg:flex lg:flex-row">
            <div className="flex flex-col gap-8 lg:w-[50%]">
              <div className="flex flex-col gap-1 pl-4">
                <h2 className="text-[#358A83] font-medium text-[1.3rem]">CONTACT</h2>
                <p className="text-[#242528] font-semibold text-[1.5rem] lg:text-[4.5rem]">Don&apos;t Hesitate to reach out to us</p>
                <p className="text-[#9BA1A6] font-light">Sodales mauris quam faucibus scelerisque risus malesuda nulla. Cursus enim quis elementum feugiat ut. Phasellus a vivierra facilisis eu purus.</p>
              </div>
              <div className="flex flex-col items-start gap-4 pl-4">
                <div className="flex justify-center items-center gap-4">
                  <div className=" bg-[#79F4E4] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" color="#000000" fill="none">
                      <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>  
                  </div>             
                  <span>letstalk@xettle.net</span>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className=" bg-[#79F4E4] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" color="#000000" fill="none">
                      <path d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54628 14.5 8.31594 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 9.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg> 
                  </div>             
                  <span>+91 8876102030</span>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <div className=" bg-[#79F4E4] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" color="#000000" fill="none">
                      <path d="M21.1677 7C22.2774 9.54418 22.2774 12.4558 21.1677 15M2.83226 15C1.72258 12.4558 1.72258 9.54418 2.83226 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 3.5C16.0588 3.5 19.5 6.92803 19.5 11.0869C19.5 15.312 16.0028 18.277 12.7725 20.2932C12.5371 20.4287 12.2709 20.5 12 20.5C11.7291 20.5 11.4629 20.4287 11.2275 20.2932C8.00325 18.2573 4.5 15.3266 4.5 11.0869C4.5 6.92803 7.9412 3.5 12 3.5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="max-w-[50%]">
                    4140 Parker Rd. Allentown,
                    New Mexico 31134
                  </span>
                </div>
              </div>
            </div>   
            <div data-animate className="border-[#E9E9E9] border-[1px] w-full opacity-0 mt-44 transition-all ease-linear duration-500 rounded-lg p-8 flex flex-col gap-6 lg:w-[50%] shadow-2xl">
              <div className="flex flex-col gap-3">
                <label htmlFor="Name" >Name:</label>
                <input className="border-[#DCDDDE] border-[1px] p-4 rounded-lg" type="text" name="Name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email:</label>
                <input className="border-[#DCDDDE] border-[1px] p-4 rounded-lg" type="text" name="email" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="company">Company Name:</label>
                <input className="border-[#DCDDDE] border-[1px] p-4 rounded-lg" type="text" name="company" placeholder="Company Name" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="message">Message:</label>
                <textarea className="border-[#DCDDDE] border-[1px] p-4 rounded-lg" name="message" cols="20" rows="5"></textarea>
              </div>
              <div className="rounded-lg bg-[#78F1E1] mx-auto w-[100%] text-center px-4 py-3 cursor-pointer hover:bg-[#FCFCFC] transition-all duration-500">
                <button className="text-[#252528]">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="py-20 xl:py-40 bg-[#242528] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] flex flex-col items-center text-[white] tracking-wider gap-5 sm:max-md:w-[70%] md:w-[80%] lg:w-[80%]">
          <div className="flex flex-col gap-10 lg:flex lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-2 lg:w-[50%]">
              <h2 className="text-[#FFFFFF] text-[1.5rem] font-semibold sm:max-md:text-[2rem] lg:text-[3.5rem]">Aliquam Donec Turpis Senectus Arcu?</h2>
              <p className="text-[#67686D]">Vestibulum in donec non sit bibendum. Id justo lorem eget condimentum porttitor lacus velit scelerisque.</p>
            </div>
            <div className="flex flex-col gap-10 justify-center md:justify-between lg:gap-12 lg:w-[50%]">
              <div className="flex flex-col cursor-pointer group-focus pr-6 lg:pr-0"
                onClick={ () => {
                  return setQuestions( (prev) => {
                    return {
                      ...prev,
                      question1: !prev.question1  
                    }
                  })
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={`transition-all duration-700 font-medium text-[1.1rem] ${questions.question1 ? "text-[#75EFE1]" : "text-[white]" }`}>Aliquam Donec Turpis Senectus Arcu?</span>                 
                  <div className="rounded-full bg-[#75EFE1] p-[0.05rem] ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${questions.question1 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>   
                  </div>                
                </div>
                <Transition
                  show={questions.question1}
                  enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[20%] opacity-0"
                >
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                  </div>
                </Transition>
              </div>
              <div className="flex flex-col cursor-pointer group-focus pr-6 lg:pr-0"
                onClick={ () => {
                  return setQuestions( (prev) => {
                    return {
                      ...prev,
                      question2: !prev.question2
                    }
                  })
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={`transition-all duration-700 font-medium text-[1.1rem] ${questions.question2 ? "text-[#75EFE1]" : " text-[white]" }`}>Aliquam Donec Turpis Senectus Arcu?</span>                 
                  <div className="rounded-full bg-[#75EFE1] p-[0.05rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${questions.question2 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>   
                  </div>                
                </div>
                <Transition
                  show={questions.question2}
                  enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[20%] opacity-0"
                >
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                  </div>
                </Transition>
              </div>
              <div className="flex flex-col cursor-pointer group-focus pr-6 lg:pr-0"
                onClick={ () => {
                  return setQuestions( (prev) => {
                    return {
                      ...prev,
                      question3: !prev.question3
                    }
                  })
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={`transition-all duration-700  font-medium text-[1.1rem] ${questions.question3 ? "text-[#75EFE1]" : "text-[white]" }`}>Aliquam Donec Turpis Senectus Arcu?</span>                 
                  <div className="rounded-full bg-[#75EFE1] p-[0.05rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${questions.question3 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>   
                  </div>                
                </div>
                <Transition
                  show={questions.question3}
                  enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[20%] opacity-0"
                >
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                  </div>
                </Transition>
              </div>
              <div className="flex flex-col cursor-pointer group-focus pr-6 lg:pr-0"
                onClick={ () => {
                  return setQuestions( (prev) => {
                    return {
                      ...prev,
                      question4: !prev.question4
                    }
                  })
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={` transition-all duration-700  font-medium text-[1.1rem] ${questions.question4 ? "text-[#75EFE1]" : "text-[white]" }`}>Aliquam Donec Turpis Senectus Arcu?</span>                 
                  <div className="rounded-full bg-[#75EFE1] p-[0.05rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${questions.question4 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>   
                  </div>                
                </div>
                <Transition
                  show={questions.question4}
                  enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[20%] opacity-0"
                >
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="text-[#BFBEBF] max-w-[90%]">
                      We Know That Time Is Of The Essence When It Comes To Securing A Mortgage, Which Is Why We have Made Our Application Process As Quick And Easy As Possible.
                    </div>
                    <div className="bg-[#2B2C30] h-[0.1rem] w-[100%]"></div>
                  </div>
                </Transition>
              </div>
              <div className="flex flex-col cursor-pointer group-focus pr-6 lg:pr-0"
                onClick={ () => {
                  return setQuestions( (prev) => {
                    return {
                      ...prev,
                      question5: !prev.question5
                    }
                  })
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={`transition-all duration-700  font-medium text-[1.1rem] ${questions.question5 ? "text-[#75EFE1]" : "text-[white]" }`}>Aliquam Donec Turpis Senectus Arcu?</span>                 
                  <div className="rounded-full bg-[#75EFE1] p-[0.05rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`w-8 h-8 text-[#0c0a0a] transition-all duration-300 ${questions.question5 ? "transform rotate-180 bg-[#E1FFA0] rounded-full" : "transform rotate-0" } font-bold`} color="#000000" fill="none">
                      <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17 15C17 15 13.3176 20 12 20C10.6824 20 7 15 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>   
                  </div>                
                </div>
                <Transition
                  show={questions.question5}
                  enter="transition ease-in duration-300 transform"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transition ease-out duration-300 transform"
                  leaveFrom="translate-y-[80%] opacity-100"
                  leaveTo="-translate-y-[20%] opacity-0"
                >
                  <div className="flex flex-col gap-4 mt-8">
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
      <div className="py-10 xl:py-20 bg-[#white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] flex flex-col items-center gap-5 sm:max-md:w-[70%] md:w-[90%] lg:w-[80%] xl:w-[90%]">
          <div data-animate className="flex flex-col w-full items-center justify-center gap-4 md:flex md:flex-row md:gap-2 relative opacity-0 mt-44 transition-all ease-linear duration-500">
 
            <h2 className="text-[2.4rem] font-medium md:text-[1.6rem] w-[100%] md:w-[30%] md:max-w-[90%] lg:w-[30%]">Loved By Marketing Teams Worldwide</h2>
            <div className="bg-[#242528] w-full h-[0.1rem] md:hidden z-[99]"></div>
            <div className="bg-[#242528] w-[0.5px] h-[130px] hidden md:inline"></div>

              <div className="w-[100%] md:w-[50%] lg:w-[60%]"> 
                <CarouselContact />
            </div>
          </div>   
        </div>
      </div>
    </>
  )
}

export default Contact