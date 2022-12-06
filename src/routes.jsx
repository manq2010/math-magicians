
// LIBRARIES
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
// import Calculator from './components/Calculator';
import NotFound from './components/NotFound/NotFound';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';

// Pages
// import About from './pages/About';
// import NotMatch from './pages/NotMatch';
import Calculatorpage from './pages/Calculatorpage';
import Qoutepage from './pages/Qoutepage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/calculator" element={<Calculatorpage />} />
        <Route path="/qoute" element={<Qoutepage />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;
