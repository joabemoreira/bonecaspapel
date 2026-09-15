export default function DollShowcaseSection() {
  return (
    <section 
      id="preview-bonecas" 
      className="bg-pink-50/80 px-4 py-10 sm:py-14 border-b border-pink-100/60"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl leading-snug">
          Veja algumas das bonecas que sua filha vai poder brincar hoje
        </h2>

        <div className="mt-8 w-full flex justify-center">
          <img
            src="/bonecas.webp"
            alt="Veja algumas das bonecas que sua filha vai poder brincar hoje"
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-w-full rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-md border border-pink-100/80 object-contain touch-manipulation"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
