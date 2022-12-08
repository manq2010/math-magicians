import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <React.StrictMode>
    <BrowserRouter basename="/math-magicians/">
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
