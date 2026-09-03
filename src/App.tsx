import { useState, useEffect, type MouseEvent } from 'react';
import TopNotificationBar from './components/TopNotificationBar';
import SalesToast from './components/SalesToast';
import HeroSection from './components/HeroSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import AntiPiracySection from './components/AntiPiracySection';
import FaqSection from './components/FaqSection';
import DiscountModal from './components/DiscountModal';
import Footer from './components/Footer';

export default function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  // Preserve UTM parameters on checkout links if present in query string
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const search = window.location.search;
    if (!search) return;

    // Attach search parameters to checkout links
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="pay.wiapy.com"]');
    links.forEach((link) => {
      try {
        const url = new URL(link.href);
        const currentParams = new URLSearchParams(search);
        currentParams.forEach((val, key) => {
          url.searchParams.set(key, val);
        });
        link.href = url.toString();
      } catch {
        // Fallback if URL parsing fails
        const sep = link.href.includes('?') ? '&' : '?';
        link.href = `${link.href}${sep}${search.replace(/^\?/, '')}`;
      }
    });
  }, [isDiscountModalOpen]);

  const scrollToPlans = (e: MouseEvent) => {
    e.preventDefault();
    const plansEl = document.getElementById('planos');
    if (plansEl) {
      plansEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBasicClick = (e: MouseEvent) => {
    e.preventDefault();
    setIsDiscountModalOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-pink-50 font-sans text-slate-800 antialiased selection:bg-pink-500 selection:text-white">
      {/* Floating social proof notification toast */}
      <SalesToast />

      {/* Special Exit/Discount offer modal */}
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
      />

      {/* Top Countdown Promotion Bar */}
      <TopNotificationBar />

      <main>
        {/* Hero Section */}
        <HeroSection onCtaClick={scrollToPlans} />

        {/* What You'll Receive & Image Carousel */}
        <WhatYouGetSection />

        {/* Pricing Packages */}
        <PricingSection onBasicClick={handleBasicClick} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* 7-Day Guarantee */}
        <GuaranteeSection />

        {/* Anti-Piracy Warning */}
        <AntiPiracySection />

        {/* FAQ with accordion */}
        <FaqSection onCtaClick={scrollToPlans} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
