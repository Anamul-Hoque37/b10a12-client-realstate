import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Root from './Router/Root';
import ErrorPage from './ErrorPage';
import Home from './Components/HomePage/Home';
import AllProperties from './Components/HomePage/AllProperties';
import Dashboard from './Components/HomePage/Dashboard';
import AuthProvider from './Authentication/AuthProvider';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import User from './Router/User';
import MyProfile from './Components/UserDashboard/MyProfile';
import MyReviews from './Components/UserDashboard/MyReviews';
import PropertyBought from './Components/UserDashboard/PropertyBought';
import Wishlist from './Components/UserDashboard/Wishlist';
import Agent from './Router/Agent';
import AgentProfile from './Components/AgentDashboard/AgentProfile';
import AddProperty from './Components/AgentDashboard/AddProperty';
import MyAddedProperties from './Components/AgentDashboard/MyAddedProperties';
import MySoldProperties from './Components/AgentDashboard/MySoldProperties';
import OfferedProperties from './Components/AgentDashboard/OfferedProperties';
import Admin from './Router/Admin';
import AdminProfile from './Components/AdminDashboard/AdminProfile';
import ManageProperties from './Components/AdminDashboard/ManageProperties';
import ManageReviews from './Components/AdminDashboard/ManageReviews';
import ManageUsers from './Components/AdminDashboard/ManageUsers';
import PrivateRoute from './Router/PrivateRoute';

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
        element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>,
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
  {
    path: "/user",
    element: <PrivateRoute><User></User></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/user',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/user/my-reviews',
        element: <MyReviews></MyReviews>,
      },
      {
        path: '/user/property',
        element: <PropertyBought></PropertyBought>,
      },
      {
        path: '/user/wishlist',
        element: <Wishlist></Wishlist>,
      },
    ]
  },
  {
    path: "/agent",
    element: <Agent></Agent>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/agent',
        element: <AgentProfile></AgentProfile>,
      },
      {
        path: '/agent/add-property',
        element: <AddProperty></AddProperty>,
      },
      {
        path: '/agent/added-property',
        element: <MyAddedProperties></MyAddedProperties>,
      },
      {
        path: '/agent/sold-property',
        element: <MySoldProperties></MySoldProperties>,
      },
      {
        path: '/agent/offer',
        element: <OfferedProperties></OfferedProperties>,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/admin',
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: '/admin/manage',
        element: <ManageProperties></ManageProperties>,
      },
      {
        path: '/admin/manage-review',
        element: <ManageReviews></ManageReviews>,
      },
      {
        path: '/admin/manage-user',
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
]);

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
