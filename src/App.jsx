import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import TradeIn from './pages/TradeIn';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Highlights />
              <Model />
              <Features />
              <HowItWorks/>
              <Footer/>
            </main>
          } />
          <Route path="/trade-in" element={<TradeIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
