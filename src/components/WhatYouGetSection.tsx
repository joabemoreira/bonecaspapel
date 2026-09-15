import { Check } from 'lucide-react';

const CAROUSEL_SAMPLES = [
  "/kpop.webp",
  "/amostra1.webp",
  "/kpop1.webp",
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
            {
              title: "+350 bonecas em 30 temas diferentes",
              subtitle: "(Princesa, Fada, Sereia, Bailarina, Unicórnio, Festa do Pijama, Praia, Escola, Aniversário, Fazenda, Espaço, Super-Herói, Doceria, Cabeleireiro, Surfista, Jardim, Esportes, Natal, Halloween, Carnaval, Copa do Mundo, Policial, Popstar, Veterinária, Viajante, Festa Junina, Cozinheiro, Páscoa, Professores, Guerreiras do Kpop)",
            },
            {
              title: "+450 acessórios em 30 temas diferentes",
              subtitle: "(festa do pijama, praia, ballet, escola, aniversário…)",
            },
            {
              title: "+300 roupas em 30 temas diferentes",
              subtitle: "(fazenda, espaço, super-herói, natal, halloween…)",
            },
            {
              title: "Método de uso em 3 passos",
              subtitle: "(imprime, recorta e veste)",
            },
            {
              title:
                "Você pode imprimir em diferentes tipos de papel em qualquer impressora de bairro. O que muda é principalmente a firmeza das bonecas.",
            },
            {
              title: "Acesso imediato no seu WhatsApp e e-mail",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start text-left text-base font-semibold text-slate-800 sm:text-lg">
              <div className="mr-3.5 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500 ring-4 ring-pink-50">
                <Check className="h-4 w-4" strokeWidth={3} />
              </div>
              <div className="flex flex-col">
                <span className="leading-snug text-slate-800 font-semibold">{item.title}</span>
                {item.subtitle && (
                  <span className="mt-0.5 text-sm font-normal text-slate-500 leading-snug">
                    {item.subtitle}
                  </span>
                )}
              </div>
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
                  width={400}
                  height={600}
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
