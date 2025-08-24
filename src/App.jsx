import './assets/css/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
function App() {
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header
        active={active}
        setActive={setActive}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main className="l-main">
        <Home active={active} setActive={setActive} />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
