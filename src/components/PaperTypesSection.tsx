import { FileText, Layers, Sparkles, Lightbulb } from 'lucide-react';

const PAPER_TYPES = [
  {
    id: 'paper-comum',
    icon: FileText,
    title: 'Folha Comum (75g ou 90g)',
    description: 'As bonecas ficam mais flexíveis e fáceis de imprimir, recortar e montar.',
  },
  {
    id: 'paper-firme',
    icon: Layers,
    title: 'Papel Mais Firme (120g ou 180g)',
    description: 'As bonecas ficam mais firmes para recortar, montar e brincar.',
  },
  {
    id: 'paper-foto',
    icon: Sparkles,
    title: 'Papel Fotográfico (180g ou 230g)',
    description: 'As bonecas ficam ainda mais firmes, com um acabamento diferente.',
  },
  {
    id: 'dica-troca',
    icon: Lightbulb,
    title: 'Dica: Como trocar a roupa sem rasgar',
    description: 'Dobre as abinhas da roupa com cuidado na primeira vez — depois disso, elas ficam soltinhas e sua filha troca o look sozinha, quantas vezes quiser, sem rasgar.',
  },
];

export default function PaperTypesSection() {
  return (
    <section id="tipos-de-papel" className="bg-white px-4 py-12 sm:py-16 border-t border-pink-100">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
          COMO VOCÊ VAI IMPRIMIR AS BONECAS?
        </h2>

        <div className="mt-10 rounded-2xl bg-pink-50/60 border border-pink-100/90 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {PAPER_TYPES.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.id}
                  id={`paper-card-${type.id}`}
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-3 ring-4 ring-pink-50 shadow-inner">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-medium max-w-xs">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
