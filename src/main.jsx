import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Router/Root';
import ErrorPage from './ErrorPage';
import Home from './Components/HomePage/Home';
import AllProperties from './Components/HomePage/AllProperties';
import Dashboard from './Components/HomePage/Dashboard';
import AuthProvider from './Authentication/AuthProvider';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'all-properties',
        element: <AllProperties></AllProperties>,
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'registration',
        element: <Registration></Registration>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
