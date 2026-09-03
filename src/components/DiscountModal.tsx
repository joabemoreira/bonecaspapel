import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getFormattedTodayDate } from '../utils';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscountModal({ isOpen, onClose }: DiscountModalProps) {
  const [currentDate, setCurrentDate] = useState(getFormattedTodayDate);

  useEffect(() => {
    setCurrentDate(getFormattedTodayDate());
    const interval = setInterval(() => {
      setCurrentDate(getFormattedTodayDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      id="discount-modal-overlay" 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        id="discount-modal-content"
        className="relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          id="close-discount-modal"
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
          aria-label="Fechar modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-red-50/80 rounded-2xl p-3 border-2 border-red-200 shadow-inner">
            <span className="inline-block rounded-full bg-red-600 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-red-500/40">
              🔥 OFERTA ÚNICA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-base sm:text-lg tabular-nums text-white shadow-md font-black animate-pulse ring-4 ring-red-100">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentDate}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-extrabold text-slate-900 sm:text-2xl leading-tight">
            ESPERE! VOCÊ PODE LEVAR O{" "}
            <span className="text-pink-500">PACOTE COMPLETO</span> COM{" "}
            <span className="text-pink-500">DESCONTO APENAS HOJE!</span>
          </h2>

          <p className="mt-2 text-slate-600 text-base">
            você pode ter o material completo (com todos os bônus inclusos) por apenas{" "}
            <span className="mt-1 block text-3xl font-black text-pink-600">
              R$ 15,90
            </span>
          </p>

          <div className="mt-6 space-y-3">
            <a
              id="discount-accept-cta"
              href="https://pay.wiapy.com/6bTerw0Gok0e"
              className="block w-full rounded-2xl bg-pink-500 py-4 text-base font-extrabold uppercase text-white shadow-xl shadow-pink-200 transition hover:scale-[1.02] active:scale-95 text-center cursor-pointer"
            >
              APROVEITAR O DESCONTO
            </a>
            <a
              id="discount-decline-cta"
              href="https://pay.wiapy.com/hdMoHHmCsDBJ"
              className="block w-full rounded-2xl bg-slate-100 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-200 text-center cursor-pointer"
            >
              COMPRAR O BÁSICO MESMO
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            *Esta oferta é válida apenas para esta sessão.
          </p>
        </div>
      </div>
    </div>
  );
}
