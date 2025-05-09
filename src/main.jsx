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
import Users from './Router/Users';
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
import UpdateProperty from './Components/AgentDashboard/UpdateProperty';
import ViewDetails from './Components/HomePage/ViewDetails';
import MakeOffer from './Components/HomePage/MakeOffer';
import Payment from './Components/UserDashboard/Payment';
import AdvertiseProperty from './Components/AdminDashboard/AdvertiseProperty';
import UsersGreeting from './Components/UserDashboard/UsersGreeting';
import AgentGreeting from './Components/AgentDashboard/AgentGreeting';
import AdminGreeting from './Components/AdminDashboard/AdminGreeting';
import Certifications from './Components/HomePage/Certifications';
import FAQ from './Components/HomePage/FAQ';
import Fraud from './Components/HomePage/Fraud';
import Overview from './Components/UserDashboard/Overview';

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
        path: 'certifications',
        element: <Certifications></Certifications>
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      },
      {
        path: 'fraud',
        element: <Fraud></Fraud>
      },
      {
        path: 'view-details/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://realstate-delta-eight.vercel.app/view-details/property/${params.id}`)
      },
      {
        path: 'make-offer/:id',
        element: <PrivateRoute><MakeOffer></MakeOffer></PrivateRoute>,
        loader: ({params}) => fetch(`https://realstate-delta-eight.vercel.app/make-offer/wishlist/${params.id}`)
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
      {
        path: "/admin",
        element: <Admin></Admin>,
        children: [
          {
            path: '/admin',
            element: <AdminGreeting></AdminGreeting>
          },
          {
            path: '/admin/profile',
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
          },
          {
            path: '/admin/advertise-property',
            element: <AdvertiseProperty></AdvertiseProperty>
          }
        ]
      },
      {
        path: "/user",
        element: <PrivateRoute><Users></Users></PrivateRoute>,
        children: [
          {
            path: '/user/profile',
            element: <MyProfile></MyProfile>,
          },
          {
            path: '/user',
            element: <UsersGreeting></UsersGreeting>
          },
          {
            path:'/user/payment/:id',
            element: <Payment></Payment>,
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
          {
            path: '/user/overview',
            element: <Overview></Overview>,
          },
        ]
      },
      {
        path: "/agent",
        element: <Agent></Agent>,
        children: [
          {
            path: '/agent',
            element: <AgentGreeting></AgentGreeting>
          },
          {
            path: '/agent/profile',
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
          {
            path: '/agent/update/:id',
            element: <UpdateProperty></UpdateProperty>,
            loader: ({params}) => fetch(`https://realstate-delta-eight.vercel.app/update/property/${params.id}`)
          },
        ]
      },
    ]
  },
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
