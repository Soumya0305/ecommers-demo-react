import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function BaseLayout({ children, authenticated }) {

	const [minHeight, setMinHeight] = useState(window.innerHeight);

	useEffect(() => {
		const handleResize = () => {
			setMinHeight(window.innerHeight);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.addEventListener("resize", handleResize);
		};
	}, []);

	// todo themeing
	return (
		<div className="">
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
			<div className="h-screen bg-[#F9E5C3]  px-4 py-4">
				<Navbar />
				{children}
			</div>
		</div>
	);
}