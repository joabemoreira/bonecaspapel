import { useState, type MouseEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    q: "As bonecas vêm prontas ou preciso imprimir?",
    a: "O material é 100% digital em formato PDF. Você recebe o acesso imediatamente após a compra para imprimir em casa sempre que quiser."
  },
  {
    q: "Para quem é indicado?",
    a: "É perfeito para mães que desejam criar momentos inesquecíveis, brincando e se conectando com suas filhas através de atividades manuais analógicas. Também é altamente recomendado para pais, avós, tios e professores que buscam uma alternativa saudável e divertida para desconectar as crianças das telas, estimulando a imaginação, a criatividade e a coordenação motora fina de forma mágica."
  },
  {
    q: "Vou receber o material em casa?",
    a: "Não, o material é 100% digital. Você recebe os arquivos em formato PDF diretamente no seu e-mail para imprimir quantas vezes quiser no conforto da sua casa."
  },
  {
    q: "E se eu não gostar, posso pedir reembolso?",
    a: "Com certeza. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro, sem burocracia."
  },
  {
    q: "Como recebo o material após a compra?",
    a: "Imediatamente após a confirmação do pagamento, todo o material é enviado direto no seu e-mail cadastrado na hora da compra."
  },
  {
    q: "Preciso usar algum tipo de papel específico?",
    a: "Recomendamos usar um papel um pouco mais encorpado, como papel sulfite 120g ou 180g, para maior durabilidade. Mas você também pode usar o papel comum ou até mesmo plastificar as partes."
  }
];

interface FaqSectionProps {
  onCtaClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function FaqSection({ onCtaClick }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-4 py-10 sm:py-14 bg-pink-50/20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="mt-8 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer transition-colors hover:bg-slate-50"
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <a
            id="faq-cta-button"
            href="#planos"
            onClick={onCtaClick}
            className="inline-block w-full max-w-md rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 sm:py-5 text-center text-[15px] sm:text-lg font-extrabold uppercase tracking-wide text-white shadow-xl shadow-pink-300/40 transition-all hover:scale-[1.02] hover:shadow-pink-400/50 hover:from-pink-600 hover:to-rose-600 active:scale-[0.98] cursor-pointer"
          >
            EU QUERO AGORA!
          </a>
        </div>
      </div>
    </section>
  );
}
