import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import emptycart from "../svgs/emptycart.svg";

const NoItemsInCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-serif p-6">
            <img 
                src={`${emptycart}`} 
                alt="Empty Cart" 
                className="w-1/2 h-[200px] mb-4" 
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-4 text-center">
                Looks like you haven't added anything to your cart yet.<br />
                Start shopping to find something you'll love!
            </p>
            <Link to="/products">
                <button className="py-2 px-4 rounded  bg-[#D9534F] w-full p-4 rounded-lg shadow-md text-lg text-white font-medium transition duration-200 hover:bg-[#FF4500]">
                    Start Shopping
                </button>
            </Link>
        </div>
    );
};

export default NoItemsInCart;