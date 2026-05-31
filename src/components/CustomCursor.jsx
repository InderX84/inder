import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => dotRef.current?.classList.add('cursor-click');
    const onUp = () => dotRef.current?.classList.remove('cursor-click');

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    const loop = () => {
      // lerp ring toward mouse — adjust 0.12 for more/less lag
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* outer ring — lerp trails */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9999] rounded-full border border-sky-400/50"
        style={{
          width: 32,
          height: 32,
          top: -16,
          left: -16,
          opacity: 0.6,
          willChange: 'transform',
        }}
      />
      {/* inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full bg-sky-400"
        style={{
          width: 6,
          height: 6,
          top: -3,
          left: -3,
          boxShadow: '0 0 8px 2px rgba(56,189,248,0.6)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
