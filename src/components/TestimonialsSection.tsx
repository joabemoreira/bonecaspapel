import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Silva",
    text: "Minha filha não queria sair do tablet por nada. Imprimi o combo de princesas e ontem passamos 2 horas brincando juntas criando histórias. Foi muito especial, recomendo para todas as mães!",
    avatar: "https://i.postimg.cc/qvrFX2M2/Captura-de-Tela-2026-03-08-a-s-17-05-34.png"
  },
  {
    name: "Fernanda Costa",
    text: "Adorei a facilidade. É só imprimir e recortar! Minha filha sofia amou as opções de roupinhas e ficou horas trocando e imaginando. Salvou minhas tardes de fim de semana com ela!",
    avatar: "https://i.postimg.cc/C1r73qgv/Captura-de-Tela-2026-03-08-a-s-17-02-47.png"
  },
  {
    name: "Camila Rodrigues",
    text: "Eu lembro das bonecas de papel da minha infância e queria muito passar isso para elas. Esse material é incrível e lindo. Elas já colecionam as bonequinhas numa pasta. Muito prático e o valor é quase de graça pelo tanto de conteúdo.",
    avatar: "https://i.postimg.cc/25N2sj4h/Captura-de-Tela-2026-03-18-a-s-21-17-01.png"
  },
  {
    name: "Aline Moraes",
    text: "Estava buscando alternativas para diminuir o tempo de tela da minha filha e isso funcionou demais! O mais legal é que ela recorta tudo sozinha, o que está ajudando muito na coordenação motora.",
    avatar: "https://i.postimg.cc/VvWn0HMP/Captura-de-Tela-2026-04-08-a-s-22-27-05.png"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="px-4 py-10 sm:py-14 bg-pink-50/40">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Veja o que as mães Estão Dizendo
        </h2>

        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="overflow-hidden pb-4 pt-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="w-full shrink-0 flex items-center justify-center px-4">
                  <div className="w-full max-w-2xl bg-white rounded-[2rem] border border-pink-100/60 flex flex-col items-center justify-center px-6 sm:px-12 pb-10 pt-16 text-center shadow-xl shadow-pink-100/40 relative">
                    {testimonial.avatar && (
                      <div className="absolute -top-12">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <div className="mb-6 flex space-x-1.5 justify-center">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg
                          key={starIdx}
                          className="w-6 h-6 text-yellow-400 drop-shadow-sm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg sm:text-xl font-medium leading-relaxed italic text-slate-700 px-2 sm:px-4">
                      "{testimonial.text}"
                    </p>

                    <p className="mt-8 text-base font-bold tracking-wide text-slate-900 uppercase">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {TESTIMONIALS.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-slate-600 hover:text-slate-900 cursor-pointer focus:outline-none z-10 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-slate-600 hover:text-slate-900 cursor-pointer focus:outline-none z-10 transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="mt-6 flex justify-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? "w-8 bg-pink-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Ir para o depoimento ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
