
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import {dataCompany} from "@/utils/data"
 
export function CarouselContact() {
  
  return (
    <div className="flex justify-center w-[100%] mnd:w-[30%]">
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
    >
      
      <CarouselContent>
        {dataCompany.map((item) => (
          <CarouselItem key={item.id} className="basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-[white] border-[white] w-[100%]">
                <CardContent className="flex flex-col gap-6 aspect-square justify-center items-center">
                  <img src={item.img} className="object-cover" alt="Company Logo" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel> 
    </div>
  )
}