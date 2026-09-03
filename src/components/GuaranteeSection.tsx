import { ShieldCheck, Lock } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="bg-white px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-pink-50 p-8 sm:p-12 text-center shadow-xl shadow-pink-100/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-rose-400" />
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 mb-6 shadow-inner ring-4 ring-white">
          <ShieldCheck className="h-10 w-10 text-pink-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Garantia Incondicional de 7 Dias
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg max-w-2xl mx-auto font-medium">
          Você tem <strong>7 dias</strong> para testar todo o material. Se por qualquer motivo você não ficar satisfeita, basta nos enviar uma mensagem e devolveremos{" "}
          <strong className="text-pink-600">100% do seu dinheiro</strong>. Sem burocracia, sem perguntas.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700 ring-1 ring-green-200">
          <Lock className="h-4 w-4" /> Compra 100% Segura e Protegida
        </div>
      </div>
    </section>
  );
}
