import { useState, useEffect, type MouseEvent } from 'react';
import { Check, Lock, Star } from 'lucide-react';
import { getFormattedTodayDate } from '../utils';

interface PricingSectionProps {
  onBasicClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function PricingSection({ onBasicClick }: PricingSectionProps) {
  const [currentDate, setCurrentDate] = useState(getFormattedTodayDate);

  useEffect(() => {
    setCurrentDate(getFormattedTodayDate());
    const interval = setInterval(() => {
      setCurrentDate(getFormattedTodayDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const basicFeatures = [
    "+350 BONECAS DE PAPEL CRIATIVAS!",
    "GUIA DE BOAS-VINDAS COM MÉTODO DE USO",
    "RECEBIMENTO IMEDIATO PELO E-MAIL",
    "SUPORTE VIA WHATSAPP",
    "ACESSO VITALÍCIO"
  ];

  const premiumFeatures = [
    "+500 BONECAS DE PAPEL CRIATIVAS!",
    "GUARDA-ROUPA COMPLETO POR BONECA",
    "GUIA DE BOAS-VINDAS COM MÉTODO DE USO",
    "RECEBIMENTO IMEDIATO PELO E-MAIL",
    "SUPORTE VIA WHATSAPP",
    "ACESSO VITALÍCIO"
  ];

  const bonusFeatures = [
    "100 CENÁRIOS PARA HISTORINHAS",
    "500 PETS DE PAPEL",
    "60 ACESSÓRIOS PARA BONECAS",
    "120 CASINHAS DE BONECAS",
    "ATUALIZAÇÕES MENSAIS"
  ];

  return (
    <section id="planos" className="bg-[#D82C84] px-4 py-10 sm:py-16 border-y border-[#c02073]">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Escolha Seu Pacote
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Card 1 - Pacote Básico */}
          <div className="flex flex-col rounded-3xl border border-white/20 bg-white/95 p-6 sm:p-8 shadow-2xl shadow-black/10 mt-6 md:mt-0 relative overflow-hidden backdrop-blur-sm">
            <h3 className="text-center text-xl font-extrabold text-slate-900">
              PACOTE BÁSICO
            </h3>

            <ul className="mt-8 space-y-4 text-sm text-slate-700 font-medium">
              {basicFeatures.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="rounded-full bg-pink-100 p-1 shrink-0">
                    <Check className="h-4 w-4 text-pink-500" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                De <span className="line-through">R$47,00</span> por apenas
              </p>
              <p className="mt-1 text-5xl font-black text-slate-900 tracking-tight">
                R$10,00
              </p>
              <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                -78% OFF
              </span>
            </div>

            <button
              id="buy-basic-button"
              type="button"
              onClick={onBasicClick}
              className="mt-8 block w-full rounded-2xl bg-slate-900 px-5 py-4 text-center text-[15px] sm:text-base font-extrabold uppercase text-white shadow-lg transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              COMPRAR AGORA
            </button>

            <p className="mt-4 text-center text-xs text-slate-500 font-medium flex items-center justify-center">
              <Lock className="mr-1 inline h-3.5 w-3.5" />
              Pagamento 100% seguro • Acesso imediato
            </p>
          </div>

          {/* Card 2 - Pacote Completo (Mais Vendido) */}
          <div className="relative flex flex-col rounded-3xl border-4 border-pink-400 bg-white p-6 sm:p-8 shadow-2xl shadow-pink-900/50 transform md:-translate-y-4">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent rounded-3xl pointer-events-none" />
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-pink-500/30 whitespace-nowrap z-20">
              🏆 MAIS VENDIDO
            </span>

            <h3 className="text-center text-xl font-extrabold text-slate-900 relative z-10">
              PACOTE COMPLETO
            </h3>

            <div className="relative z-10">
              <div className="mt-3 flex w-fit mx-auto items-center justify-center gap-1 sm:gap-1.5 rounded-full bg-red-600 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-extrabold text-white shadow-md">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{currentDate} - OFERTA TERMINA HOJE</span>
              </div>
            </div>

            <div className="mt-6 space-y-6 relative z-10">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                  Inclui tudo do Pacote Básico:
                </p>
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  {premiumFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-4 w-4 shrink-0 text-slate-300" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-4 sm:p-5 ring-1 ring-pink-200 shadow-inner">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-pink-500 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                  Bônus Exclusivos Premium:
                </p>
                <ul className="space-y-3 text-sm font-bold text-slate-900">
                  {bonusFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="rounded-full bg-pink-500 p-0.5 shrink-0">
                        <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg text-slate-400 line-through font-medium">
                  R$97
                </span>
                <span className="text-5xl font-black tracking-tight text-pink-500">
                  R$26,90
                </span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                -72% OFF
              </span>
            </div>

            <a
              id="buy-complete-button"
              href="https://pay.wiapy.com/-lj7Rw0Hvb6c"
              className="mt-8 block w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 sm:py-5 text-center text-[15px] sm:text-lg font-extrabold uppercase tracking-wide text-white shadow-xl shadow-pink-300/50 transition-all hover:scale-[1.02] hover:shadow-pink-400/50 hover:from-pink-600 hover:to-rose-600 active:scale-[0.98] relative z-10 cursor-pointer"
            >
              COMPRAR AGORA
            </a>

            <p className="mt-4 text-center text-xs font-medium text-slate-500 relative z-10 flex items-center justify-center">
              <Lock className="mr-1 inline h-3.5 w-3.5" />
              Pagamento 100% seguro • Acesso imediato
            </p>

            <p className="mt-3 text-center text-xs text-slate-400 relative z-10">
              Mais de 80% escolhem esta opção.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-white/95">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
            ))}
          </div>
          <span>Mais de 9.435 mães já baixaram</span>
        </div>
      </div>
    </section>
  );
}
