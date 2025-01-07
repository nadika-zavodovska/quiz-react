import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Quiz from './components/Quiz';

createRoot(document.getElementById('root')).render(
  // <StrictMode> Helps with identifying potential issues during development.
  <StrictMode>
    <Quiz />
  </StrictMode>
);
