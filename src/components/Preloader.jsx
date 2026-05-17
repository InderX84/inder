import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letters = ['N', 'A', 'R', 'I', 'N', 'D', 'E', 'R'];

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'exit'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 2000);
    const t2 = setTimeout(() => onDone(), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase === 'enter' && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
        >
          {/* background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-fuchsia-500/8 blur-[100px]"
              animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </div>

          {/* letters */}
          <div className="relative flex items-center gap-1 sm:gap-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 90, transition: { duration: 0.3, delay: i * 0.04 } }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl font-bold tracking-widest text-slate-100 sm:text-7xl"
                style={{ perspective: 600 }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-4 text-sm uppercase tracking-[0.4em] text-sky-400/80"
          >
            Portfolio
          </motion.p>

          {/* progress bar */}
          <motion.div className="absolute bottom-10 left-1/2 h-px w-48 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-cyan-300"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
