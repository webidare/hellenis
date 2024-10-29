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
  { name: "Walmart", logo: "/public/walmart.svg" },
  { name: "Verizon", logo: "/public/verizon.svg" },
  { name: "McDonald's", logo: "/public/mcdonalds.svg" }, 
  { name: "Samsung", logo: "/public/samsung.svg" },
  { name: "Cocacola", logo: "/public/cocacola.svg" },
  { name: "Meta", logo: "/public/facebook.svg" }, // Facebook is now Meta
  { name: "Amazon", logo: "/public/amazon.svg" },
  { name: "Microsoft", logo: "/public/microsoft.svg" },
  { name: "Alphabet", logo: "/public/google.svg" }, // Google is under Alphabet
  { name: "Apple", logo: "/public/apple.svg" },
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
          <h3 className="text-xl lg:text-2xl tracking-tighter lg:max-w-xl font-regular text-left col-span-1 lg:col-span-5 mb-6 lg:mb-0">
            Trusted by market leaders
          </h3>
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
                      <span className="text-sm text-center">{company.name}</span>
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
