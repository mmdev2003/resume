import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ProjectDetailPage } from '../pages/ProjectDetailPage';
import { ContactPage } from '../pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetailPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
]);
