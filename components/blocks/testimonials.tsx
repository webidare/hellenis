"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    title: "Game-changing platform",
    content: "This platform has revolutionized how we manage our projects. It's intuitive, powerful, and has significantly boosted our productivity.",
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    initials: "EC"
  },
  {
    title: "Exceptional support",
    content: "The customer support team goes above and beyond. They've been instrumental in helping us maximize the platform's potential.",
    name: "Michael Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=2",
    initials: "MR"
  },
  {
    title: "Streamlined workflows",
    content: "We've seen a dramatic improvement in our team's efficiency since adopting this tool. It's been a game-changer for our business.",
    name: "Sarah Thompson",
    avatar: "https://i.pravatar.cc/150?img=3",
    initials: "ST"
  },
  {
    title: "Scalable solution",
    content: "As our company grew, we needed a solution that could grow with us. This platform has exceeded our expectations in terms of scalability.",
    name: "David Patel",
    avatar: "https://i.pravatar.cc/150?img=4",
    initials: "DP"
  },
  {
    title: "Innovative features",
    content: "The constant updates and new features keep us ahead of the curve. It's clear that innovation is at the core of this product.",
    name: "Lisa Nakamura",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "LN"
  }
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <span>{testimonial.name}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
