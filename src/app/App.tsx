import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ParticlesBackground } from '../shared/ui/ParticlesBackground';
import { ScrollProgress } from '../shared/ui/ScrollProgress';
import './App.css';

function App() {
  useEffect(() => {
    // Clean up old theme-related data
    localStorage.removeItem('theme');
    document.documentElement.removeAttribute('data-theme');
  }, []);

  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
