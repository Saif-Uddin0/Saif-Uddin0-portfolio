import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Details from '../Layout.jsx/Details';
import ContactPage from '../pages/Contact';
import AboutPage from '../pages/AboutPage';
import ExploreProjects from '../pages/ExploreProjects/ExploreProjects';
import ProjectDetails from '../components/Shared/ProjectDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "projects",
        element: <ExploreProjects />,
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />,
      },
    ],
  },

  {
    path: "/details",
    element: <Details />,
    children: [
      {
        path: "nest-shop",
        element: <h1>nest shop</h1>,
      },
      {
        path: "artify",
        element: <h1>artify</h1>,
      },
      {
        path: "learnhut",
        element: <h1>learnhut</h1>,
      },
      {
        path: "heroio",
        element: <h1>heroio</h1>,
      },
    ],
  },
]);

