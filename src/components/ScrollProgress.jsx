import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(height ? Math.min((current / height) * 100, 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-slate-900/30">
      <div className="h-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-cyan-300 transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}
