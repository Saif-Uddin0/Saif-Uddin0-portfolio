import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Details from '../Layout.jsx/Details';
import ContactPage from '../pages/Contact';
import AboutPage from '../pages/AboutPage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      },
      {
        path: '/contact',
        element: <ContactPage></ContactPage>
      },
    ],
  },
  {
    path: '/details',
    element: <Details></Details>,
    children:[
      {
        path: '/details/nest-shop',
        element: <h1>nest shop</h1>
      },
      {
        path: '/details/artify',
        element: <h1>artify</h1>
      },
      {
        path: '/details/learnhut',
        element: <h1>larnhut</h1>
      },
      {
        path: '/details/heroio',
        element: <h1>heroio</h1>
      },
    ]
  }
]);
