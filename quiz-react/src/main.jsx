import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Quiz from './components/Quiz';
import './index.css';
import { QuizProvider } from './contexts/quiz';

createRoot(document.getElementById('root')).render(
  // <StrictMode> Helps with identifying potential issues during development.
  <StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </StrictMode>
);
