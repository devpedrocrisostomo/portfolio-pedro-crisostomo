import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Technologies from './components/Technologies.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="site-frame min-h-screen overflow-hidden text-[color:var(--color-ink)]">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
