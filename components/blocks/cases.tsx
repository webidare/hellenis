"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const companies = [
  { name: "Walmart", logo: "/walmart.svg" },
  { name: "Verizon", logo: "/verizon.svg" },
  { name: "McDonald's", logo: "/mcdonalds.svg" }, 
  { name: "Samsung", logo: "/samsung.svg" },
  { name: "Cocacola", logo: "/cocacola.svg" },
  { name: "Meta", logo: "/facebook.svg" }, // Facebook is now Meta
  { name: "Amazon", logo: "/amazon.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" },
  { name: "Alphabet", logo: "/google.svg" }, // Google is under Alphabet
  { name: "Apple", logo: "/apple.svg" },
];

export default function Cases() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="relative w-full col-span-1 lg:col-span-5">
            <div className="bg-gradient-to-r from-background via-background/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full pointer-events-none"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {companies.map((company, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-4"
                  >
                    <div className="flex flex-col items-center justify-center p-4 h-full">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={100}
                        height={100}
                        className="w-16 h-16 object-contain mb-2"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
