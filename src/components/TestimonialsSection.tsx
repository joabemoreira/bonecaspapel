import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Star, Mic } from 'lucide-react';

interface TestimonialCard {
  id: number;
  type: 'photo' | 'print';
  imageSrc: string;
  rostoSrc: string;
  author: string;
  tag: string;
  text: string;
  alt: string;
  badgeLabel?: string;
  whatsappMessage?: string;
  aspectRatio?: 'portrait' | 'landscape';
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: 1,
    type: 'photo',
    imageSrc: '/print1.webp',
    rostoSrc: '/rosto1.webp',
    author: 'Mariana Silva',
    tag: 'Mãe de 2 meninas',
    text: 'Minha filha não queria sair do tablet por nada. Imprimi e passamos a tarde brincando juntas criando histórias. Foi muito especial, recomendo!',
    alt: 'Foto de criança brincando com as bonecas de papel do kit na cama',
    badgeLabel: 'Foto enviada pela mãe',
    aspectRatio: 'portrait',
  },
  {
    id: 2,
    type: 'print',
    imageSrc: '/print3.webp',
    rostoSrc: '/rosto2.webp',
    author: 'Fernanda Costa',
    tag: 'Mãe da Sofia (5 anos)',
    text: 'Olá, gostaria de agradecer, estou encantada e já ansiosa para começar!',
    alt: 'Print de conversa no WhatsApp com Fernanda Costa elogiando o kit de bonecas de papel',
    badgeLabel: 'Print do WhatsApp',
    whatsappMessage: 'Ola, gostaria de agradecer, estou encantada e ja anciosa para começar ❤️',
    aspectRatio: 'landscape',
  },
  {
    id: 3,
    type: 'photo',
    imageSrc: '/amostra6.webp',
    rostoSrc: '/rosto3.webp',
    author: 'Camila Rodrigues',
    tag: 'Mãe da Manu e Bia',
    text: 'Lembro das bonecas de papel da minha infância e amei reviver isso com elas. Já colecionam as bonequinhas numa pasta. O kit é lindo demais!',
    alt: 'Foto das peças e bonecas de papel do kit prontas para brincar',
    badgeLabel: 'Foto do kit recortado',
    aspectRatio: 'portrait',
  },
  {
    id: 4,
    type: 'print',
    imageSrc: '/print4.webp',
    rostoSrc: '/rosto4.webp',
    author: 'Aline Moraes',
    tag: 'Mãe da Laura (6 anos)',
    text: 'Buscava alternativas para diminuir o tempo de tela da minha filha e funcionou perfeitamente! Ela recorta tudo sozinha e desenvolve a coordenação.',
    alt: 'Print de conversa no WhatsApp com depoimento de Aline sobre redução do tempo de tela',
    badgeLabel: 'Print do WhatsApp',
    whatsappMessage: 'Gente, fazia tempo que não via a Laura tão focada longe do celular. Ela mesma recortou as peças e montou um desfile no quarto! Parabéns pelo material maravilhoso ✨',
    aspectRatio: 'landscape',
  },
];

// Bar heights pattern for the visual audio waveform (percentage of max height)
const WAVEFORM_BARS = [
  28, 42, 60, 38, 75, 92, 55, 82, 48, 32, 68, 88, 98, 62, 38, 52, 78, 88,
  72, 58, 42, 68, 82, 58, 34, 62, 92, 78, 48, 62, 42, 30, 52, 38, 24,
];

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !isFinite(seconds) || seconds <= 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Synchronize audio playback state
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Pause any other active audio on the page
      document.querySelectorAll('audio').forEach((el) => {
        if (el !== audio) el.pause();
      });

      audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Seek position on waveform click or touch
  const seekToPosition = (clientX: number) => {
    if (!waveformRef.current || !audioRef.current) return;
    const rect = waveformRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));

    const targetDuration = audioRef.current.duration || duration;
    if (targetDuration > 0) {
      const newTime = ratio * targetDuration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleWaveformClick = (e: MouseEvent<HTMLDivElement>) => {
    seekToPosition(e.clientX);
  };

  const handleWaveformTouch = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches && e.touches[0]) {
      seekToPosition(e.touches[0].clientX);
    }
  };

  // Carousel smooth scroll buttons
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
    }
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setActiveCardIndex(0);
      return;
    }
    const ratio = scrollLeft / maxScroll;
    const index = Math.round(ratio * (TESTIMONIALS.length - 1));
    setActiveCardIndex(Math.max(0, Math.min(TESTIMONIALS.length - 1, index)));
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current && carouselRef.current.children[index]) {
      (carouselRef.current.children[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const progressRatio = duration > 0 ? currentTime / duration : 0;

  return (
    <section id="depoimentos" className="px-4 py-12 sm:py-16 bg-pink-50/50 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* 1. Headline */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Olha o que uma mãe disse depois de conhecer o kit...
        </h2>

        {/* 2. Subheadline curta */}
        <p className="mt-3 text-center text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Ela compartilhou esse áudio depois de ver as bonecas de papel.
        </p>

        {/* 3. Player de Áudio Personalizado */}
        <div className="mt-8 mx-auto w-full max-w-xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-pink-100/90 shadow-md sm:shadow-lg p-4 sm:p-6">
            {/* Header com avatar de mãe e indicador de áudio */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-pink-50">
              <img
                src="/rosto1.webp"
                alt="Mariana compartilhando depoimento"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-pink-200 shadow-sm shrink-0"
              />
              <div className="min-w-0">
                <p className="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">
                  Depoimento da Mariana
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <Mic className="w-3 h-3 text-pink-500" />
                  Mensagem de voz recebida
                </p>
              </div>
            </div>

            {/* Linha de controles: Botão Play/Pause + Waveform */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Botão Play / Pause circular */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-500 hover:bg-pink-600 active:scale-95 text-white flex items-center justify-center shadow-md shadow-pink-500/30 transition-all cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ) : (
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                )}
              </button>

              {/* Container da Waveform e Tempos */}
              <div className="flex-1 min-w-0">
                <div
                  ref={waveformRef}
                  onClick={handleWaveformClick}
                  onTouchStart={handleWaveformTouch}
                  className="relative h-10 sm:h-12 flex items-center gap-[2px] sm:gap-1 cursor-pointer select-none py-1"
                  role="slider"
                  aria-valuemin={0}
                  aria-valuemax={duration || 100}
                  aria-valuenow={currentTime}
                  aria-label="Controle de posição do áudio"
                >
                  {WAVEFORM_BARS.map((heightPct, idx) => {
                    const barRatio = idx / (WAVEFORM_BARS.length - 1);
                    const isFilled = barRatio <= progressRatio;
                    return (
                      <span
                        key={idx}
                        style={{ height: `${heightPct}%` }}
                        className={`flex-1 min-w-[2px] max-w-[5px] rounded-full transition-colors duration-150 pointer-events-none ${
                          isFilled ? 'bg-pink-500' : 'bg-pink-100'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Tempo Atual e Duração Total */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-500 tabular-nums px-0.5 mt-0.5">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Elemento de áudio nativo (oculto, com preload leve) */}
            <audio
              ref={audioRef}
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onDurationChange={handleLoadedMetadata}
              onEnded={handleEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/depoimento-audio.m4a" type="audio/mp4" />
              <source src="/depoimento_concorrente.m4a" type="audio/mp4" />
            </audio>
          </div>
        </div>

        {/* 4. Headline pequena introduzindo os prints */}
        <div className="mt-14 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Veja também o que outras mães estão falando:
          </h3>
        </div>

        {/* 5. Carrossel Horizontal com prints reais */}
        <div className="mt-6 relative max-w-5xl mx-auto">
          {/* Botões de navegação no desktop */}
          <button
            type="button"
            onClick={handleScrollLeft}
            aria-label="Ver print anterior"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-pink-100 items-center justify-center text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleScrollRight}
            aria-label="Ver próximo print"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-pink-100 items-center justify-center text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container horizontal com scroll snap (toque no celular + scroll no desktop) */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 px-1 snap-x snap-mandatory scrollbar-none"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {TESTIMONIALS.map((card) => (
              <div
                key={card.id}
                className="w-[90vw] max-w-[340px] sm:w-[320px] md:w-[335px] shrink-0 snap-center flex flex-col"
              >
                <div className="bg-white rounded-2xl border border-pink-100/90 shadow-md p-4 sm:p-5 flex flex-col h-full hover:shadow-lg transition-shadow">
                  {/* Cabeçalho do Card: Rosto, Nome, Selo Verificada, Estrelas e Tag */}
                  <div className="flex items-center gap-3 pb-3 border-b border-pink-50">
                    <img
                      src={card.rostoSrc}
                      alt={card.author}
                      width={42}
                      height={42}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-pink-100 shadow-sm shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-slate-900 text-sm truncate">
                          {card.author}
                        </span>
                        <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100 shrink-0">
                          Verificada
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 truncate">
                          {card.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo visual principal único por card (FOTO DA CRIANÇA ou PRINT REAL) */}
                  <div className="w-full flex justify-center py-2.5">
                    <div
                      className={`${
                        card.aspectRatio === 'landscape'
                          ? 'w-[94%] sm:w-[96%] aspect-[16/10] max-h-[165px]'
                          : 'w-[72%] sm:w-[76%] aspect-[9/16] max-h-[220px] sm:max-h-[250px]'
                      } rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-inner flex items-center justify-center relative`}
                    >
                      <img
                        src={card.imageSrc}
                        alt={card.alt}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className={`w-full h-full block rounded-xl ${
                          card.type === 'photo' ? 'object-cover' : 'object-contain'
                        }`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback elegante caso a imagem do print ainda não esteja presente */}
                      <div
                        style={{ display: 'none' }}
                        className={`flex-col justify-between text-left w-full h-full bg-[#EFEAE2] rounded-xl ${
                          card.aspectRatio === 'landscape' ? 'p-2 sm:p-2.5' : 'p-3'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 pb-1 border-b border-black/10">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[10px] font-bold text-slate-700">WhatsApp</span>
                          <span className="text-[9px] text-slate-400 ml-auto">online</span>
                        </div>

                        {card.id === 2 ? (
                          <div className="flex flex-col gap-1.5 my-auto text-[10px] leading-tight">
                            <div className="bg-[#D9FDD3] self-end max-w-[90%] rounded-lg rounded-tr-none p-1.5 shadow-xs border border-emerald-200/60 text-slate-800">
                              <p className="text-[9.5px]">Se tiver qualquer dúvida ou precisar de ajuda, é só responder esta mensagem. Será um prazer ajudar você! 💖</p>
                              <span className="text-[7.5px] text-slate-500 block text-right mt-0.5">19:17 ✓✓</span>
                            </div>
                            <div className="bg-white self-start max-w-[90%] rounded-lg rounded-tl-none p-1.5 shadow-xs border border-black/5 text-slate-800 relative">
                              <p className="font-medium text-slate-900 text-[10px]">Ola, gostaria de agradecer, estou encantada e ja anciosa para começar</p>
                              <span className="text-[7.5px] text-slate-400 block text-right mt-0.5">19:45</span>
                              <span className="absolute -bottom-1.5 left-1 text-[11px]">❤️</span>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-lg rounded-tl-none p-2 shadow-xs border border-black/5 text-slate-800 text-[10px] leading-snug my-auto">
                            <p className="font-medium text-slate-900 text-[10px] line-clamp-4">
                              {card.whatsappMessage || card.text}
                            </p>
                            <span className="text-[8px] text-slate-400 block text-right mt-1">19:45 ✓✓</span>
                          </div>
                        )}

                        <div className="text-[8.5px] text-slate-500 text-center font-medium bg-white/75 py-0.5 rounded">
                          Depoimento de {card.author.split(' ')[0]}
                        </div>
                      </div>

                      {/* Tag sutil identificando o tipo */}
                      <span
                        className={`absolute bottom-1.5 right-1.5 text-[9px] font-semibold px-2 py-0.5 rounded-full shadow-xs ${
                          card.type === 'photo'
                            ? 'bg-pink-600/85 text-white'
                            : 'bg-slate-800/80 text-white'
                        }`}
                      >
                        {card.badgeLabel || (card.type === 'photo' ? 'Foto enviada' : 'Print real')}
                      </span>
                    </div>
                  </div>

                  {/* Depoimento em texto abaixo */}
                  <div className="mt-auto pt-2.5 border-t border-pink-50">
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed text-center">
                      "{card.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de paginação / navegação por toque */}
          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeCardIndex === idx ? 'w-8 bg-pink-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

