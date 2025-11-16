import { StrictMode } from 'react'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';
import { AuthContext } from './Provider/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContext>
      <RouterProvider router={router} />
      </AuthContext>
    <ToastContainer position="top-right" autoClose={2000} />
    <Toaster position="top-right" toastOptions={{ duration: 2500 }} />

  </StrictMode>,
)



