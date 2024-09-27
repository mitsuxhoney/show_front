
import { useEffect } from "react"
function Fintech() {
  useEffect( () => {
    const observer = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
          if(entry.isIntersecting){
            if(entry.target.classList.contains('div-animate')){
              entry.target.classList.remove('opacity-0')
              entry.target.classList.add('opacity-1','scale-[1.5]')
            }
            else if(entry.target.classList.contains('left-img-animate')){
              entry.target.classList.remove('opacity-0', 'translate-x-[-100%]', 'rotate-180')
              entry.target.classList.add('opacity-1', 'scale-[1.3]')
            }
            else if(entry.target.classList.contains('right-img-animate')){
              entry.target.classList.remove('opacity-0', 'translate-x-[100%]', 'rotate-180')
              entry.target.classList.add('opacity-1', 'scale-[1.3]')
            }
            else if(entry.target.classList.contains('bouncing-card')){
              entry.target.classList.remove('opacity-0', 'translate-y-[70%]')
              entry.target.classList.add('opacity-1')
            }
            else{
              entry.target.classList.remove('opacity-0', 'mt-36', 'translate-y-[-100]')
              entry.target.classList.add('opacity-1')
            }
        }
      })
    },
    {
      threshold:0.8
    } 
    )
    const components = document.querySelectorAll('[data-animate]')
    components.forEach( (component) => {
      observer.observe(component)
    })
    return () => {
      observer.disconnect()
    }
  }, []); 
  return (
    <>
      <div className="mt-14 py-20 xl:py-40 bg-[#79F4E4] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] text-[1.14rem] md:text-[2rem] text-[#242528] flex flex-col items-center sm:max-md:w-[70%] md:w-[80%] xl:w-[90%]">
          Fintech Software Development
        </div>
      </div>
      <div className="py-20 xl:py-20 bg-[white] w-[100vw] flex flex-col justify-start items-center scroll-smooth">
        <div className="w-[90%] text-[#242528] flex flex-col items-center sm:max-md:w-[70%] md:w-[80%] xl:w-[90%]">
          <div className=" flex flex-col gap-6 xl:flex-row">
            <div data-animate className="flex flex-col justify-center mt-36 opacity-0 ease-linear transition-all duration-500 p-6 rounded-xl xl:w-[50%] xl:h-auto shadow-xl">
              <div className="flex flex-col gap-8 bg-[white] p-10 rounded-xl text-center xl:p-8 xl:gap-8 xl:text-left">
                <h2 className="text-[1.5rem] md:text-[2.5rem] font-medium lg:text-[2rem] xl:text-[2.7rem]">Be In Complete Control Over Your Money</h2>
                <p className="text-[#817E91] md:text-[1.1rem] xl:text-[1.1rem] leading-8">Sodales mauris quam faucibus scelerisque risus malesuada nulla. Cursus enim quis elementum feugiat ut.</p>
                <div className="flex justify-center mx-auto gap-3 items-center bg-[#242528] rounded-lg px-4 py-4 group hover:bg-[white] xl:ml-0 xl:p-3 transition-all cursor-pointer duration-500">
                  <span className="text-[#ffffff] group-hover:text-[black] transition-all duration-500 text-[0.9rem] md:text-[1.1rem]">Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-[white] group-hover:text-[black] transition-all duration-500" color="#000000" fill="none">
                    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div data-animate className="bg-[#F1F3F3] flex flex-col items-center justify-center rounded-xl px-6 py-6 shadow-xl xl:max-h-[600px] xl:w-[50%] mt-36 opacity-0 ease-linear transition-all duration-800">
              <img className="md:mx-auto" src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/automated-payments/automated-payments.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 xl:py-20 bg-[#242528] w-[100vw] flex flex-col justify-start items-center scroll-smooth">
        <div className="w-[90%] text-[white] flex flex-col items-center md:w-[80%] xl:w-[90%]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="text-[#A4E9EF]">WHY FINCATCH</p>
              <h2 className="text-[1.6rem] max-w-[80%] font-medium md:text-[3rem]">Every Features You Need To Grow Your Business</h2>
              <p className="text-[#A49E9F] max-w-[90%]">Elementum vitae consequat at luctus mauris pellentesque.</p>
            </div>
            <div className="flex flex-col gap-6 flex-wrap md:flex-row md:gap-12 lg:gap-18 xl:gap-[1.80rem] xl:text-center">
              <div data-animate className="flex flex-col bg-[#1A1B1D] rounded-xl items-center gap-6 p-10 md:w-[46%] xl:w-[23%] opacity-0 bouncing-card transition-all ease-linear duration-500 translate-y-[70%] hover:translate" >
                <div className="p-3 animate-bounce transition-all duration-2000 rounded-full bg-[#76F0E0] ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 rounded-full" color="#000000" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9.5 16L9.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11 8V6M13.5 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11 18V16M13.5 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9.5 12H14.5C15.3284 12 16 12.6716 16 13.5V14.5C16 15.3284 15.3284 16 14.5 16H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 8L14.5 8C15.3284 8 16 8.67157 16 9.5V10.5C16 11.3284 15.3284 12 14.5 12H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[1.4rem]">Instant Payouts</h2>
                <p className="text-[#838582] text-center">ut amet rutrum est morbi egestas praesent at volutpat felis velit auctor egestas vulputate feugiat.</p>
              </div>
              <div data-animate className="flex flex-col bg-[#1A1B1D] rounded-xl items-center gap-6 p-10 md:w-[46%] xl:w-[23%] opacity-0 bouncing-card transition-all ease-linear duration-600 translate-y-[70%]">
                <div className="p-3 animate-bounce transition-all duration-2000 rounded-full bg-[#76F0E0]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 rounded-full bg-[#76F0E0]" color="#000000" fill="none">
                    <path d="M4 7L4 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.7576 3.90865C8.45236 2.22497 5.85125 3.21144 4.55426 4.2192C4.32048 4.40085 4.20358 4.49167 4.10179 4.69967C4 4.90767 4 5.10138 4 5.4888V14.7319C4.9697 13.6342 7.87879 11.9328 11.7576 13.9086C15.224 15.6744 18.1741 14.9424 19.5697 14.1795C19.7633 14.0737 19.8601 14.0207 19.9301 13.9028C20 13.7849 20 13.6569 20 13.4009V5.87389C20 5.04538 20 4.63113 19.8027 4.48106C19.6053 4.33099 19.1436 4.459 18.2202 4.71504C16.64 5.15319 14.3423 5.22532 11.7576 3.90865Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[1.4rem]">Instant Payouts</h2>
                <p className="text-[#838582] text-center">ut amet rutrum est morbi egestas praesent at volutpat felis velit auctor egestas vulputate feugiat.</p>
              </div>
              <div data-animate className="flex flex-col bg-[#1A1B1D] rounded-xl items-center gap-6 p-10 md:w-[46%] xl:w-[23%] opacity-0 bouncing-card transition-all ease-linear duration-700 translate-y-[70%]">
                <div className="p-3 animate-bounce transition-all duration-2000 rounded-full bg-[#76F0E0]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 rounded-full" color="#000000" fill="none">
                    <path d="M12 21C12.2792 21 12.5388 20.8728 13.0579 20.6184L17.2304 18.5737C19.0768 17.6688 20 17.2164 20 16.5V7.5M12 21C11.7208 21 11.4612 20.8728 10.9421 20.6184L6.76956 18.5737C4.92319 17.6688 4 17.2164 4 16.5V7.5M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.9421 3.38159C11.4612 3.1272 11.7208 3 12 3C12.2792 3 12.5388 3.1272 13.0579 3.38159L17.2304 5.42635C19.0768 6.33116 20 6.78357 20 7.5C20 8.21643 19.0768 8.66884 17.2304 9.57365L13.0579 11.6184C12.5388 11.8728 12.2792 12 12 12C11.7208 12 11.4612 11.8728 10.9421 11.6184L6.76956 9.57365C4.92319 8.66884 4 8.21643 4 7.5C4 6.78357 4.92319 6.33116 6.76956 5.42635L10.9421 3.38159Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[1.4rem]">Instant Payouts</h2>
                <p className="text-[#838582] text-center">ut amet rutrum est morbi egestas praesent at volutpat felis velit auctor egestas vulputate feugiat.</p>
              </div>
              <div data-animate className="flex flex-col bg-[#1A1B1D] rounded-xl items-center gap-6 p-10 md:w-[46%] xl:w-[23%] opacity-0 bouncing-card transition-all ease-linear duration-800 translate-y-[70%]">
                <div className="p-3 animate-bounce transition-all duration-2000 rounded-full bg-[#76F0E0]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 rounded-full" color="#000000" fill="none">
                    <path d="M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-[1.4rem]">Instant Payouts</h2>
                <p className="text-[#838582] text-center">ut amet rutrum est morbi egestas praesent at volutpat felis velit auctor egestas vulputate feugiat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[80%] text-[1.14rem] text-[#242528] flex flex-col items-center sm:max-md:w-[70%] md:w-[80%]">
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.6rem] font-medium text-center md:text-[4rem] xl:text-[6rem]">Wallet Integrations</h2>
            <p className="text-[1rem] text-center text-[#7679A6] max-w-[100%] mx-auto xl:max-w-[70%] xl:text-[1.2rem]">
              Urna diam malesuada vitae tristique elementum odio. In senectus
              pharetra nunc imperdiet eget. Etiam sagittis tincidunt sit
              consectetur vel nibh nibh.
            </p>
          </div>
          <div className="relative max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto mt-20">
            <img src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/wallet-integrations/circle-shap.svg" className="max-w-[250px] md:max-w-[400px] lg:max-w-[700px] xl:max-h-[550px]" alt="" />
            <div data-animate className="animate-pulse div-animate rounded-full transform rotate-90 w-2 opacity-0 transition-all duration-1500 border-[2px] border-[black] p-2 lg:border-[6px] bg-[#79F4E4] left-[13%] top-[10%] absolute md:left-[15%] lg:left-[17%] xl:left-[15%]"></div>
            <div data-animate className="animate-pulse div-animate rounded-full transform rotate-90 w-2 opacity-0 transition-all duration-1500 border-[2px] border-[black] p-2 lg:border-[6px] bg-[#79F4E4] left-[81%] top-[10%] absolute md:left-[81%] xl:top-[10.5%]"></div>
            <div data-animate className="animate-pulse div-animate rounded-full transform rotate-90 w-2 opacity-0 transition-all duration-1500 border-[2px] border-[black] p-2 lg:border-[6px] bg-[#79F4E4] left-[81%] top-[83%] absolute md:left-[83%] lg:left-[85%] xl:left-[83%]"></div>
            <div data-animate className="animate-pulse div-animate rounded-full transform rotate-90 w-2 opacity-0 transition-all duration-1500 border-[2px] border-[black] p-2 lg:border-[6px] bg-[#79F4E4] left-[13%] top-[83%] absolute"></div>
            <img data-animate src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/wallet-integrations/apple-pay.png" className="left-img-animate w-12 rotate-180 transform opacity-0 translate-x-[-100%] transition-all duration-1000 absolute left-[-14%] top-[-5%] md:left-[-6%] md:w-16 lg:left-[5%] lg:top-[0%] xl:left-[0%]" alt=""  />
            <img data-animate src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/wallet-integrations/paypal-pay.png" className="right-img-animate w-12 rotate-180 transform translate-x-[100%] opacity-0 transition-all duration-1000 absolute left-[94%] top-[-3%] md:w-16 md:left-[88%] lg:left-[86%] lg:top-[1%] xl:left-[89%] xl:top-[3%]" alt=""  />
            <img data-animate src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/wallet-integrations/stripe-pay.png" className="left-img-animate w-12 rotate-180 transform translate-x-[-100%] opacity-0 transition-all duration-1000 absolute left-[-12%] bottom-[-2%] md:left-[-6%] md:w-16 lg:bottom-[5%] lg:left-[2%] xl:left-[-1%] xl:bottom-[3%]" alt=""  />
            <img data-animate src="https://itcroctheme.com/fincatch/fincatch-html/assets/img/wallet-integrations/wise-pay.png" className="right-img-animate w-12 rotate-180 transform translate-x-[100%] opacity-0 transition-all duration-1000 absolute left-[96%] bottom-[0%] md:w-16 md:left-[90%] lg:bottom-[6%] xl:left-[93%]" alt=""  />
            
            <div className="p-8 rounded-full inline-block bg-[#79F4E4] absolute left-[32.5%] top-[32%] md:left-[39%] md:top-[39%] lg:left-[37%] lg:top-[36.5%] xl:left-[30.5%] xl:top-[30%] lg:p-20 xl:p-24">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
            </div>
          </div>        
        </div>
      </div>
      <div className="py-10 bg-[white] w-[100vw] flex flex-col justify-center items-center scroll-smooth">
        <div className="w-[90%] text-[1.14rem] text-[#242528] flex flex-col items-center sm:max-md:w-[70%] md:w-[80%]">
          <div data-animate className="bg-[#EFF1F1] mt-36 opacity-0 w-full mx-auto rounded-xl px-6 py-6 lg:py-8 lg:px-4 xl:px-0 transition-all ease-linear duration-700 shadow-xl">
            <div className="bg-[#FFFFFF] w-[100%] lg:w-[95%] xl:w-[95%] mx-auto rounded-xl flex flex-col justify-center gap-6 px-6 py-6 md:py-8 md:px-8 lg:gap-20 shadow-lg xl:gap-10">
              <h2 className="text-center text-[2.2rem] md:text-[3.3rem] lg:text-[3.6rem] font-medium tracking-wide">Interested To Join Our Team?</h2>
              <p className="text-[#B4ABA0] text-center lg:max-w-[90%] xl:max-w-[50%] mx-auto">Natoque tellus aliquam aenean justo consequat semper adipiscing.
                Facilisis vestibulum pretium ut viverra malesuada.
              </p>
              <div className="flex justify-between gap-3  items-center bg-[#242528] rounded-lg px-4 py-4 md:px-10 lg:px-8 mx-auto group hover:bg-[white] transition-all cursor-pointer duration-500">
                  <span className="text-[#ffffff] group-hover:text-[black] transition-all duration-500 text-[0.9rem] md:text-[1rem]">VIEW OPEN POSITIONS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-[white] group-hover:text-[black] transition-all duration-500" color="#000000" fill="none">
                    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Fintech