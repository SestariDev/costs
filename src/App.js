import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Work from './components/pages/Work';
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';
import NewProject from './components/pages/NewProject';
import WheelOfFortuneGame from './components/pages/Projects';
import Perfil from './components/pages/Perfil';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/pic" element={<Home />} />
          <Route path="/roda" element={<WheelOfFortuneGame />} />
          <Route path="/perfil" element={<Perfil />} />
          
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
