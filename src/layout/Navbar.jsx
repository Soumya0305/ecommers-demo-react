import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../custom/useLogin';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const logOut = useLogin();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-[#D9534F] font-serif p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Logo and Categories */}
                <div className="flex items-center space-x-8">
                    <Link to="/" className="text-white text-xl font-bold">E-Comm</Link>
                    <div className="flex space-x-4">
                        <Link to="/categories/men" className="text-white hover:text-[#F9E5C3]">Men</Link>
                        <Link to="/categories/women" className="text-white hover:text-[#F9E5C3]">Women</Link>
                        <Link to="/categories/kids" className="text-white hover:text-[#F9E5C3]">Kids</Link>
                        <Link to="/categories/beauty" className="text-white hover:text-[#F9E5C3]">Beauty</Link>
                        <Link to="/shop/home-living" className="text-white hover:text-[#F9E5C3]">Home Décor</Link>
                    </div>
                </div>

                <div className="flex-grow mx-4">
                    <input 
                        type="text" 
                        placeholder="Search for products, brands and more" 
                        className="w-3/5 p-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#F9E5C3] bg-white transition duration-200" 
                    />
                </div>

                {/* Right Side: Auth Links */}
                <div className="flex items-center space-x-4">
                    <Link to="/my-cart" className="text-white hover:text-[#F9E5C3]">My Cart</Link>
                    {!props.authenticated ? (
                        <>
                            <Link to="/login">
                                <button className="ml-4 bg-white text-[#D9534F] rounded-md px-4 py-2 transition-transform transform hover:scale-105">
                                    Login
                                </button>
                            </Link>
                            <Link to="/sign-up">
                                <button className="bg-white text-[#D9534F] rounded-md px-4 py-2 transition-transform transform hover:scale-105">
                                    Sign Up
                                </button>
                            </Link>
                        </>
                    ) : (
                        <button onClick={() => logOut({})} className="ml-6 bg-white text-[#D9534F] rounded-md px-4 py-2 transition-transform transform hover:scale-105">
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authData.authenticated,
        expires_at: state.auth.authData.expires_at,
        token: state.auth.authData.token,
    };
}

export default connect(mapStateToProps)(Navbar);

