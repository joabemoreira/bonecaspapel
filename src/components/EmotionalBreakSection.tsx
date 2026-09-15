import { type MouseEvent } from 'react';
import { formatCountdownTime } from './TopNotificationBar';

interface EmotionalBreakSectionProps {
  timeLeft: number;
  onCtaClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function EmotionalBreakSection({ timeLeft, onCtaClick }: EmotionalBreakSectionProps) {
  const formattedTime = formatCountdownTime(timeLeft);

  return (
    <section 
      id="interrupcao-emocional"
      className="w-full bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 py-12 sm:py-16 px-4 shadow-inner"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight sm:leading-snug max-w-3xl mx-auto">
          Quantas vezes essa semana você ainda vai negociar o celular com ela?
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium text-pink-100 max-w-xl mx-auto">
          Aproveite a oferta por tempo limitado
        </p>

        {/* Contador regressivo sincronizado no mesmo formato HH:MM:SS */}
        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 sm:gap-2.5 bg-black/25 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-lg sm:text-2xl font-bold font-mono tracking-wider tabular-nums text-white border border-white/20 shadow-inner">
            <svg className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formattedTime}</span>
          </span>
        </div>

        {/* Botão CTA com a mesma âncora/ação de compra */}
        <div className="mt-8 flex justify-center">
          <a
            id="emotional-break-cta-button"
            href="#planos"
            onClick={onCtaClick}
            className="inline-block w-full max-w-md rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 sm:py-5 text-center text-[15px] sm:text-lg font-extrabold uppercase tracking-wide text-white shadow-xl shadow-pink-900/30 ring-4 ring-white/80 border border-white/30 transition-all hover:scale-[1.02] hover:shadow-2xl hover:from-pink-600 hover:to-rose-600 active:scale-[0.98] cursor-pointer"
          >
            EU QUERO AGORA!
          </a>
        </div>
      </div>
    </section>
  );
}
