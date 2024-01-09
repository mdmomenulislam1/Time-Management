import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Firebase/AuthProvider.jsx';
import MainLayout from './Pages/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />

       </AuthProvider>
  </React.StrictMode>,
)
