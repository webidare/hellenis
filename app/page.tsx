"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/blocks/hero";
import Cases from "@/components/blocks/cases";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import Footer from "@/components/blocks/footer";
import { ArrowRight, Github, Twitter } from 'lucide-react';
import { BACKGROUND_OPTIONS } from './components/background';
import { Button } from '@/components/ui/button';
import Playground from './components/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <div className="relative"> {/* Add this div */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <Header />
      <main>
        <Hero />
        <Cases />
        <Features />
        <Pricings />
        <Stats />
        <CTAs />
        <Blogs />
        <FAQs />
      </main>
      <Footer />
    </div> 
  );
}
