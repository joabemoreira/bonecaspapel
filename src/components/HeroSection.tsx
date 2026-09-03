import { type MouseEvent } from 'react';
import { ChevronDown, Printer, Clock, CloudDownload, Scissors } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-50/30 px-4 pt-10 pb-12 sm:pt-16 sm:pb-20 border-b border-pink-100/50">
      <div 
        className="absolute inset-0 bg-pattern-cubes opacity-[0.03] pointer-events-none" 
        aria-hidden="true" 
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="flex flex-wrap items-center justify-center font-bubbly leading-none mb-2 gap-x-2 sm:gap-x-3 gap-y-2">
          <span className="text-pink-500 text-4xl sm:text-5xl md:text-6xl drop-shadow-md tracking-wide text-stroke-white">
            +350
          </span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-md tracking-wide text-stroke-pink">
            BONECAS
          </span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-md tracking-wide text-stroke-pink">
            DE PAPEL
          </span>
        </div>

        <h2 className="text-[1.25rem] font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl md:text-4xl mt-2 max-w-2xl mx-auto">
          prontas para imprimir e transformar o tempo de tela em diversão de verdade.
        </h2>

        <div className="mt-8 mb-6 mx-auto w-full max-w-lg md:max-w-xl">
          <img
            src="/mockup_350_bonecas_papel.webp"
            alt="+350 Bonecas de Papel - Kit Completo para Imprimir e Recortar"
            width={1264}
            height={848}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <p className="mx-auto mb-8 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
          É só imprimir, recortar e brincar. Em poucos minutos, Sua filha está sentada na mesa criando personagens, inventando histórias e ficando horas longe da tela.
        </p>

        {/* Informações e Ícones de Destaque */}
        <div 
          id="hero-features-bar"
          className="my-8 rounded-2xl bg-pink-50/60 sm:bg-pink-50/50 border border-pink-100/90 p-5 sm:p-6 backdrop-blur-[2px] shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-[#b3375b] mb-1.5">
                <Printer className="h-7 w-7 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                Imprima
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-snug">
                quantas vezes quiser
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-[#b3375b] mb-1.5">
                <Clock className="h-7 w-7 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                Atividade
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-snug">
                que estimula a criatividade
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-[#b3375b] mb-1.5">
                <CloudDownload className="h-7 w-7 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                Acesso imediato
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-snug">
                após a compra
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-[#b3375b] mb-1.5">
                <Scissors className="h-7 w-7 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-sm sm:text-base">
                Fácil de montar
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-snug">
                e muito divertido
              </p>
            </div>
          </div>
        </div>

        <a
          id="hero-cta-button"
          href="#planos"
          onClick={onCtaClick}
          className="mb-8 inline-block w-full max-w-md rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 sm:py-5 text-center text-[15px] sm:text-lg font-extrabold uppercase tracking-wide text-white shadow-xl shadow-pink-300/40 transition-all hover:scale-[1.02] hover:shadow-pink-400/50 hover:from-pink-600 hover:to-rose-600 active:scale-[0.98]"
        >
          EU QUERO AGORA!
        </a>

        <p className="mt-2 inline-flex items-center gap-2 text-sm sm:text-base font-bold text-pink-400">
          <span aria-hidden="true">👇</span> Arraste para baixo
        </p>

        <div className="mt-2 flex justify-center text-pink-400">
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
