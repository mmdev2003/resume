import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ParticlesBackground } from '../shared/ui/ParticlesBackground';
import { ScrollProgress } from '../shared/ui/ScrollProgress';
import { ThemeToggle } from '../shared/ui/ThemeToggle';
import './App.css';

function App() {
  return (
    <>
      <ParticlesBackground />
      <ScrollProgress />
      <ThemeToggle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
