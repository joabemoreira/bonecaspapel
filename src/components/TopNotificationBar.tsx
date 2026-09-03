import { useState, useEffect } from 'react';
import { getFormattedTodayDate } from '../utils';

export default function TopNotificationBar() {
  const [currentDate, setCurrentDate] = useState(getFormattedTodayDate);

  useEffect(() => {
    setCurrentDate(getFormattedTodayDate());
    const interval = setInterval(() => {
      setCurrentDate(getFormattedTodayDate());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="top-notification-bar" className="bg-gradient-to-r from-red-600 via-[#e60000] to-red-600 text-center text-white overflow-hidden shadow-md">
      <div className="px-2 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold tracking-wide flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap">
        <span>🔥 A PROMOÇÃO TERMINA EM</span>
        <span className="bg-black/20 px-3 py-1 sm:py-1.5 rounded-full tabular-nums font-mono flex items-center gap-1.5 sm:gap-2 shrink-0 border border-white/10 shadow-inner">
          <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {currentDate}
        </span>
      </div>
    </div>
  );
}
