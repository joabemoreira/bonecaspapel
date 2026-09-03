import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { SalesNotification } from '../types';

const NAMES = [
  "Maria", "Ana", "Juliana", "Camila", "Fernanda",
  "Amanda", "Beatriz", "Carla", "Letícia", "Marcia",
  "Paula", "Renata", "Bruna", "Aline", "Patrícia",
  "Sandra", "Jessica", "Tatiana", "Larissa", "Natália"
];

const PACKAGES = [
  "Pacote Básico",
  "Combo Premium",
  "Combo Premium",
  "Combo Premium",
  "Combo Premium"
];

export default function SalesToast() {
  const [notification, setNotification] = useState<SalesNotification | null>(null);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    let nextTimeout: NodeJS.Timeout;
    let counter = 0;

    const showNext = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const pkg = PACKAGES[Math.floor(Math.random() * PACKAGES.length)];
      setNotification({ name, pkg, id: counter++ });

      hideTimeout = setTimeout(() => {
        setNotification(null);
        nextTimeout = setTimeout(showNext, Math.random() * 45000 + 30000);
      }, 4000);
    };

    nextTimeout = setTimeout(showNext, Math.random() * 10000 + 5000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, []);

  return (
    <div id="sales-notification-container" className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none transition-all sm:top-6 sm:right-6">
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="flex w-fit max-w-[280px] sm:max-w-[320px] items-center gap-2 rounded-full bg-white/95 backdrop-blur-md p-1.5 pr-3 sm:p-2 sm:pr-4 shadow-xl ring-1 ring-black/5 pointer-events-auto"
          >
            <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white shadow-sm">
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
            </div>
            <div className="text-[10px] leading-tight text-slate-700 sm:text-xs text-right">
              <span className="font-extrabold text-slate-900">{notification.name}</span> comprou o{" "}
              <span className="font-extrabold text-pink-500">{notification.pkg}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
