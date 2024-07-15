import React, { useState } from 'react';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import WheelOfFortuneGame from './components/pages/Projects';
import Perfil from './components/pages/Perfil';
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('contact');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'wheelOfFortuneGame':
        return <WheelOfFortuneGame />;
      case 'perfil':
        return <Perfil />;
      default:
        return <Contact setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
