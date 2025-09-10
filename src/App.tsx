import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
// import FloatingButton from './components/FloatingButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-jet-black font-inter">
      <Header />
      <Hero />
      <Features />
      {/* <FloatingButton /> */}
      <Footer />
    </div>
  );
}

export default App; 