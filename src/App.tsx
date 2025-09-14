import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/OffRamp';

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-jet-black font-inter flex flex-col'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/offramp' element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
