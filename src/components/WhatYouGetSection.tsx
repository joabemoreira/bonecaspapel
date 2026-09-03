import { Check } from 'lucide-react';

const CAROUSEL_IMAGES = [
  "https://i.postimg.cc/h41Pc4xd/Design-sem-nome-(2).png",
  "https://i.postimg.cc/59SNb9vY/Design-sem-nome-(5).png",
  "https://i.postimg.cc/FFVsNFcf/Design-sem-nome-(4).png",
  "https://i.postimg.cc/zDFX8DWV/Design-sem-nome.png",
  "https://i.postimg.cc/nVGcpV7X/Design-sem-nome-(3).png",
  "https://i.postimg.cc/N0695bqb/Chat-GPT-Image-19-de-jun-de-2026-16-30-00.png",
  "https://i.postimg.cc/XvfGpxSQ/Chat-GPT-Image-17-de-jun-de-2026-23-39-53.png",
  "https://i.postimg.cc/h41Pc4xd/Design-sem-nome-(2).png",
  "https://i.postimg.cc/59SNb9vY/Design-sem-nome-(5).png",
  "https://i.postimg.cc/FFVsNFcf/Design-sem-nome-(4).png",
  "https://i.postimg.cc/zDFX8DWV/Design-sem-nome.png",
  "https://i.postimg.cc/nVGcpV7X/Design-sem-nome-(3).png",
  "https://i.postimg.cc/N0695bqb/Chat-GPT-Image-19-de-jun-de-2026-16-30-00.png",
  "https://i.postimg.cc/XvfGpxSQ/Chat-GPT-Image-17-de-jun-de-2026-23-39-53.png"
];

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
                  className="h-96 sm:h-[32rem] w-auto rounded-2xl object-cover shadow-sm border border-slate-100"
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
