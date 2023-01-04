import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';

function App() {
  return (
    <div>
      <Navbar />
      <HeroImage />
    </div>
  );
}

export default App;
