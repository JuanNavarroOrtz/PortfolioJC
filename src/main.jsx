import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Portfolio from './pages/Portfolio/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
