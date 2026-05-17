import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

const emojis = ['🚀','⭐','💻','🎉','🔥','✨','🎯','💡','🏆','😎'];

function randomBetween(a, b) { return a + Math.random() * (b - a); }

export default function EasterEgg() {
  const [keys, setKeys] = useState([]);
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(',') === KONAMI.join(',')) {
          setActive(true);
          setParticles(
            Array.from({ length: 30 }, (_, i) => ({
              id: i,
              emoji: emojis[Math.floor(Math.random() * emojis.length)],
              x: randomBetween(10, 90),
              delay: randomBetween(0, 0.6),
              duration: randomBetween(1.5, 2.8),
            }))
          );
          setTimeout(() => setActive(false), 3500);
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <>
          {/* overlay message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center pointer-events-none"
          >
            <div className="rounded-[2rem] border border-sky-400/30 bg-slate-900/95 px-10 py-8 text-center shadow-2xl backdrop-blur-xl">
              <p className="text-5xl mb-3">🎉</p>
              <p className="text-2xl font-bold text-sky-300">You found the Easter Egg!</p>
              <p className="mt-2 text-slate-400">↑↑↓↓←→←→BA — Classic!</p>
            </div>
          </motion.div>

          {/* particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 1, y: '100vh', x: `${p.x}vw` }}
              animate={{ opacity: 0, y: '-10vh' }}
              transition={{ duration: p.duration, delay: p.delay, ease: 'easeOut' }}
              className="fixed bottom-0 z-[9997] pointer-events-none text-3xl"
              style={{ left: 0 }}
            >
              {p.emoji}
            </motion.div>
          ))}
        </>
      )}
    </AnimatePresence>
  );
}
