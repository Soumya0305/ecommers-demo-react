import { fetchProducts } from '../api';
import { useEffect, useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from '../forms/Login'; // Make sure to create this component
import SignUp from '../forms/SignUp';
import LandingPage from '../client/landing';
import AuthenticatedPage from './AuthenticatedPage';
import Dashboard from '../client/dashboard';
import ErrorBoundary from './ErrorBoundary';
import HomeAndDecor from '../components/homeDecore';

function Routes() {
  
  const routers= createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* Default route leads to LandingPage */}
      <Route path="/" element={<LandingPage />} errorElement={<ErrorBoundary />} />

      {/* Sign-up route */}

      {/* Protected routes */}
      <Route path="/" element={<AuthenticatedPage />} errorElement={<ErrorBoundary />}>
          <Route path="login" element={<Login />} errorElement={<ErrorBoundary />} />
          <Route path="sign-up" element={<SignUp />} errorElement={<ErrorBoundary />} />
          <Route path="dashboard" element={<Dashboard />} errorElement={<ErrorBoundary />} />
          <Route path="shop/home-living" element={<HomeAndDecor />} errorElement={<ErrorBoundary />}/>
      </Route>
  </>
    )
  )

  return (
    <RouterProvider router={routers} />
  );
}

export default Routes;

