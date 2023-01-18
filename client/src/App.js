import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroImage from './components/HeroImage/HeroImage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <HeroImage/>
      <About/>
      <Footer />
    </div>
  );
}

export default App;
