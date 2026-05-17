import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  // trail lags behind
  useEffect(() => {
    const id = setTimeout(() => setTrail(pos), 80);
    return () => clearTimeout(id);
  }, [pos]);

  return (
    <>
      {/* outer ring — trails */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border border-sky-400/50 transition-all duration-75"
        style={{
          width: clicking ? 20 : 32,
          height: clicking ? 20 : 32,
          left: trail.x - (clicking ? 10 : 16),
          top: trail.y - (clicking ? 10 : 16),
          opacity: 0.6,
        }}
      />
      {/* inner dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-sky-400"
        style={{
          width: clicking ? 10 : 6,
          height: clicking ? 10 : 6,
          left: pos.x - (clicking ? 5 : 3),
          top: pos.y - (clicking ? 5 : 3),
          boxShadow: '0 0 8px 2px rgba(56,189,248,0.6)',
          transition: 'width 0.1s, height 0.1s',
        }}
      />
    </>
  );
}
