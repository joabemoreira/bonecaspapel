import { useState, useEffect, type MouseEvent } from 'react';
import TopNotificationBar, { INITIAL_PROMO_SECONDS } from './components/TopNotificationBar';
import SalesToast from './components/SalesToast';
import HeroSection from './components/HeroSection';
import DollShowcaseSection from './components/DollShowcaseSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import QualificationSection from './components/QualificationSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import AntiPiracySection from './components/AntiPiracySection';
import PaperTypesSection from './components/PaperTypesSection';
import EmotionalBreakSection from './components/EmotionalBreakSection';
import FaqSection from './components/FaqSection';
import DiscountModal from './components/DiscountModal';
import Footer from './components/Footer';

let hasTrackedViewContent = false;

export default function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [promoTimeLeft, setPromoTimeLeft] = useState(INITIAL_PROMO_SECONDS);

  // Synchronized countdown timer for top notification bar and emotional break section
  useEffect(() => {
    const timer = setInterval(() => {
      setPromoTimeLeft((prev) => (prev <= 1 ? INITIAL_PROMO_SECONDS : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track ViewContent event once when the "Escolha Seu Pacote" section (#planos) enters viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hasTrackedViewContent) return;

    const target = document.getElementById('planos');
    if (!target) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedViewContent) {
            hasTrackedViewContent = true;
            if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
              (window as any).fbq('track', 'ViewContent');
            }
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <TopNotificationBar timeLeft={promoTimeLeft} />

      <main>
        {/* Hero Section */}
        <HeroSection onCtaClick={scrollToPlans} />

        {/* Doll Showcase / Preview Section */}
        <DollShowcaseSection />

        {/* What You'll Receive & Image Carousel */}
        <WhatYouGetSection />

        {/* Qualification Section */}
        <QualificationSection />

        {/* Pricing Packages */}
        <PricingSection onBasicClick={handleBasicClick} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* 30-Day Guarantee */}
        <GuaranteeSection />

        {/* Anti-Piracy Warning */}
        <AntiPiracySection />

        {/* Paper Types Section */}
        <PaperTypesSection />

        {/* Emotional Break with Countdown Timer */}
        <EmotionalBreakSection timeLeft={promoTimeLeft} onCtaClick={scrollToPlans} />

        {/* FAQ with accordion */}
        <FaqSection onCtaClick={scrollToPlans} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
