import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home.jsx';
import { Product } from './pages/product.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Layout } from './layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
