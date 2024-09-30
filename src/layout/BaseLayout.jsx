// src/BaseLayout.js
import React, { Fragment, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

 function BaseLayout({ children, authenticated }) {
  const [minHeight, setMinHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setMinHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Fix: use removeEventListener
    };
  }, []);

  return (
    <div style={{ minHeight: `${minHeight}px` }} className="flex flex-col">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        icon={false}
        pauseOnHover
        style={{ zIndex: "9999991", position: "fixed", bottom: "1em" }}
      />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

export default BaseLayout
