import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Benefits />
      <HowItWorks />
      <Calculator />
      <Testimonials />
      <FAQ />
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-sm text-royal-scroll/80 italic">
          Some of the links on this website are affiliate links, meaning Numerologysaar.com may earn a commission if you purchase through these links at no extra cost to you. We only recommend products we trust and believe will add value to our readers.
        </p>
      </div>
    </div>
  );
}