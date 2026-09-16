import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = `https://wa.me/5519976187717?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o +350 Bonecas de Papel. 😊')}`;

export default function WhatsAppButton() {
  return (
    <a
      id="whatsapp-support-button"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Suporte pelo WhatsApp"
      className="fixed right-[14px] bottom-[14px] sm:right-[18px] sm:bottom-[18px] z-40 flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#25D366] px-3.5 py-2.5 sm:px-4 sm:py-3 text-white shadow-md shadow-green-950/20 ring-1 ring-white/20 transition-all duration-200 hover:bg-[#20ba5a] hover:scale-105 hover:shadow-lg active:scale-95 touch-manipulation select-none"
    >
      <MessageCircle 
        className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" 
        strokeWidth={2.4} 
      />
      <span className="text-xs sm:text-sm font-bold tracking-wide leading-none whitespace-nowrap">
        Suporte
      </span>
    </a>
  );
}
