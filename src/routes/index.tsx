import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Layout from '../components/templates/Layout';

/**
 * Lazy load pages
 */
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Post = lazy(() => import('../pages/Posts/'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'post', element: <Post /> },
        ],
      },
    ],
  },
]);

export default router;
