import { Check } from 'lucide-react';

const QUALIFICATION_ITEMS = [
  {
    id: 'qual-1',
    title: 'Está cansada da briga diária pra tirar o celular',
    description: 'Toda manhã vira negociação. Aqui você entrega uma brincadeira concreta e sai da briga.',
  },
  {
    id: 'qual-2',
    title: 'Quer estimular a criatividade sem gastar uma fortuna',
    description: 'Uma única compra vira meses de brincadeira, imprimindo quantas vezes quiser.',
  },
  {
    id: 'qual-3',
    title: 'Busca momentos de conexão real, sem tela no meio',
    description: 'Sentar junto pra recortar e vestir vira lembrança boa pras duas.',
  },
];

export default function QualificationSection() {
  return (
    <section id="qualificacao" className="bg-pink-50/60 px-4 py-12 sm:py-16 border-t border-pink-100">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-black tracking-tight text-slate-900 sm:text-3xl uppercase">
          ESTA COLEÇÃO É IDEAL PRA VOCÊ QUE:
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {QUALIFICATION_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`qualification-card-${item.id}`}
              className="flex flex-col items-start rounded-2xl border border-pink-100 bg-white p-6 sm:p-7 shadow-sm transition-all hover:shadow-md hover:border-pink-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 ring-4 ring-green-50 mb-4 shrink-0">
                <Check className="h-6 w-6 text-green-600" strokeWidth={3} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
