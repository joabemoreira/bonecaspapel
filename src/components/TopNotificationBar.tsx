import { useState, useEffect } from 'react';

const INITIAL_SECONDS = 15 * 60; // 15 minutos (00:15:00)

export default function TopNotificationBar() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? INITIAL_SECONDS : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div id="top-notification-bar" className="bg-gradient-to-r from-red-600 via-[#e60000] to-red-600 text-center text-white overflow-hidden shadow-md">
      <div className="px-2 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold tracking-wide flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap">
        <span>🔥 A PROMOÇÃO TERMINA EM</span>
        <span className="bg-black/20 px-3 py-1 sm:py-1.5 rounded-full tabular-nums font-mono flex items-center gap-1.5 sm:gap-2 shrink-0 border border-white/10 shadow-inner">
          <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {formattedTime}
        </span>
      </div>
    </div>
  );
}
