import { Suspense, lazy } from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-hero-gradient text-slate-100 selection:bg-sky-400 selection:text-slate-950">
        <ScrollProgress />
        <Navbar />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-300">Loading portfolio...</div>}>
          <Home />
        </Suspense>

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
