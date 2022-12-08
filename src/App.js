import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </React.StrictMode>
);

export default App;
