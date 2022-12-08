// LIBRARIES
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
// import Footer from './components/Footer/Footer';

// Pages
import Calculatorpage from './pages/Calculatorpage';
import Qoutepage from './pages/Qoutepage';
import Homepage from './pages/Homepage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/calculator" element={<Calculatorpage />} />
        <Route path="/qoute" element={<Qoutepage />} />
        {/* <Route path="/" element={<Footer />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
