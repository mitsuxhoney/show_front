
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {data1} from "@/utils/data"
import {useEffect} from "react"
 
export function CarouselSize() {
  useEffect( () => {
    const observer = new IntersectionObserver( (entries) => {
      entries.forEach( (entry) => {
          if(entry.isIntersecting){
            entry.target.classList.remove('opacity-0')
            entry.target.classList.remove('mt-28')
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
    <div data-animate className="w-[100%] flex justify-center opacity-0 mt-28 transition-all duration-500 ">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-[80%] md:w-[100%] lg:w-[100%]"
    >
      
      <CarouselContent className="">
        {data1.map((item) => (
          <CarouselItem key={item.id} className="basis-[100%] md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-[#79F4E4] border-[#79F4E4]">
                <CardContent className="flex flex-col gap-6 aspect-square justify-center items-center">
                  <h2 className="text-center">{item.title}</h2>
                  <p className="text-3xl font-medium text-center">{item.text}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[#79F4E4] border-gray-100" />
      <CarouselNext className="bg-[#79F4E4] border-gray-100" />
    </Carousel> 
    </div>
  )
}