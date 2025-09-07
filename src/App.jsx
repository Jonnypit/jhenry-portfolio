import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="font-sans text-white bg-black w-full">
        <Header />
        <main className="pt-[207px] pb-[64px] min-h-[calc(100vh-207px-64px)] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

