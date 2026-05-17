import { Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const Home = lazy(() => import('./pages/Home'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}

      <div className="min-h-screen bg-hero-gradient text-slate-100 selection:bg-sky-400 selection:text-slate-950">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <ScrollProgress />
        <Navbar />

        <Suspense fallback={null}>
          <Home />
        </Suspense>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
