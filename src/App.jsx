import { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import EasterEgg from './components/EasterEgg';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <CustomCursor />
      <EasterEgg />
      <div className="min-h-screen bg-hero-gradient text-slate-100 selection:bg-sky-400 selection:text-slate-950">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <ScrollProgress />
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
