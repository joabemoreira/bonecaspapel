import { Check } from 'lucide-react';

const CAROUSEL_SAMPLES = [
  "/amostra1.webp",
  "/amostra2.webp",
  "/amostra3.webp",
  "/amostra4.webp",
  "/amostra5.webp",
  "/amostra6.webp",
  "/amostra7.webp"
];

const CAROUSEL_IMAGES = [...CAROUSEL_SAMPLES, ...CAROUSEL_SAMPLES];

export default function WhatYouGetSection() {
  return (
    <section id="what-you-get" className="bg-white px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          O QUE VOCÊ VAI RECEBER?
        </h2>

        <div className="mt-8 mx-auto flex max-w-2xl flex-col items-start space-y-4 rounded-2xl border border-pink-100 bg-white p-6 shadow-sm sm:p-8">
          {[
            "Bonecas com vários temas (heróis, princesas, fadas...)",
            "Roupas temáticas (shopping, praia, balé...)"
          ].map((item, idx) => (
            <div key={idx} className="flex items-start text-left text-base font-semibold text-slate-700 sm:text-lg">
              <div className="mr-4 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500 ring-4 ring-pink-50">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden w-full relative group">
          <div className="flex animate-carousel w-max">
            {CAROUSEL_IMAGES.map((imgUrl, idx) => (
              <div key={idx} className="flex-shrink-0 px-2 sm:px-3">
                <img
                  src={imgUrl}
                  alt={`Amostra de Bonecas de Papel ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={idx % 7 < 5 ? 236 : 533}
                  height={idx % 7 < 5 ? 354 : 800}
                  className="h-96 sm:h-[32rem] aspect-[2/3] w-auto rounded-2xl object-cover shadow-sm border border-slate-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
