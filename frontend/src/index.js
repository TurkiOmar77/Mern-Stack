import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { workoutContextProvider } from './context/WorkoutContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <workoutContextProvider>
    <App />
    </workoutContextProvider>
  </React.StrictMode>
);

