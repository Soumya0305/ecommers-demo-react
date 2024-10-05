import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from '../forms/Login'; // Make sure to create this component
import SignUp from '../forms/SignUp';
import LandingPage from '../client/landing';
import AuthenticatedPage from './AuthenticatedPage';
import Dashboard from '../client/dashboard';
import ErrorBoundary from './ErrorBoundary';
import HomeAndDecor from '../client/homeDecore';
import Women from "../client/women";
import Men from "../client/men";
import ProductDetail from '../components/productDetail';
import MyCart from '../components/myCart';

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
          <Route path="/products" element={<Dashboard />} errorElement={<ErrorBoundary />} />
          <Route path="/product/:id" element={<ProductDetail />} errorElement={<ErrorBoundary />} />
          <Route path="shop/home-living" element={<HomeAndDecor />} errorElement={<ErrorBoundary />}/>
          <Route path="shop/women" element={<Women />} errorElement={<ErrorBoundary />}/>
          <Route path="shop/men" element={<Men />} errorElement={<ErrorBoundary />}/>
          <Route path="/my-cart" element={<MyCart />} errorElement={<ErrorBoundary />} />
      </Route>
  </>
    )
  )

  return (
    <RouterProvider router={routers} />
  );
}

export default Routes;

