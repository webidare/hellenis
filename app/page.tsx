"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/blocks/hero";
import { Cases } from "@/components/blocks/cases";
import { Testimonials } from "@/components/blocks/testimonials";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import { Contacts } from "@/components/blocks/contacts";
import { Footer } from "@/components/blocks/contacts";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cases />
      <Testimonials />
      <Features />
      <Pricings />
      <Stats />
      <CTAs />
      <Blogs />
      <FAQs />
      <Contacts />
      <Footer />
    </>
  );
}
