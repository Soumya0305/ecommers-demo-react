import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from "./layout/Routes.jsx"
import reportWebVitals from './reportWebVitals.js';
import { createRoot } from "react-dom/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, ecomm_store } from "./store/common_store.jsx";
import useNetworkCheck from './custom/useConnection.jsx';
import Spinner from "./partials/spinner.jsx";
import ErrorBoundary from './layout/ErrorBoundary.jsx';

function App() {
  const networkAvailable = useNetworkCheck();

  useEffect(() => {
    try{
      const checkCookiesEnable = localStorage.key(0);
    }
    catch (error) {
      console.error(error)
      toast.error("Enable third party cookies.");
    }
  },[])

  return (
    !networkAvailable ? (
      <div>...Loading</div>
    ) : (
      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    )
  )
}

const app = <Provider store={ecomm_store}>
	<PersistGate loading={null} persistor={persistor}>
			<App />
	</PersistGate>
</Provider>
const container = document.getElementById("root");
const root = createRoot(container);

root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
