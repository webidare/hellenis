"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/blocks/hero";
import { Cases } from "@/components/blocks/cases";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import Footer from "@/components/blocks/footer";
import TestimonialSlider from "@/components/testimonials-slider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cases />
        <TestimonialSlider‎ />
        <Features />
        <Pricings />
        <Stats />
        <CTAs />
        <Blogs />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
