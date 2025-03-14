import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { toast } from "react-toastify";
import { _setAuthData } from '../actions/authSlice';
import { connect } from "react-redux";
import { jwtDecode } from 'jwt-decode';
import { getCartItems } from '../api';
import { ecomm_store } from '../store/common_store';
import { _updateCartData } from '../actions/cartSlice';

function Login(props) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const state = ecomm_store.getState();
    const navigate = useNavigate();
    console.log(state.auth.authData, "state");


    const HandleLogin = async (e) => {
        e.preventDefault();

        const payload = { email, password };
        try {
            const res = await loginUser(payload);
            const { token } = res.data;
            const decodedToken = jwtDecode(token);

            // Dispatch action to set auth data
            props._setAuthData({
                authenticated: true,
                user: res.data.user.name,
                email: res.data.user.email,
                token: token,
                expires_at: decodedToken.exp,
            });
            getCartItems(token).then(res => {
                props._updateCartData(res.data);
            })
            

            navigate("/products");
            toast.success(res?.data?.message);
        } catch (error) {
            console.error('Error:', error);
            toast.error(error?.response?.data?.message || "Something went wrong! Try Again");
        }
    }
    console.log(state.auth.authData, "state2");

    return (
        <div className="flex justify-center font-serif items-center h-screen bg-[#F9E5C3]">
            <form onSubmit={HandleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
                <h2 className="text-2xl text-center  mb-6">Login to your E-comm account</h2>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#D9534F] transition duration-150"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#D9534F] transition duration-150"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#D9534F] w-full p-4 rounded-lg text-white font-semibold transition duration-200 hover:bg-[#FF4500]"
                >
                    Login
                </button>

                <div className="text-center mt-4">
                    <a href="#" className="text-sm text-[#D9534F] hover:underline">Forgot Password?</a>
                </div>

                <div className="text-center mt-2">
                    <p className="text-sm">Don't have an account? <a onClick={() => navigate("/sign-up")} className="text-[#D9534F] hover:underline">Sign Up</a></p>
                </div>
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state?.auth?.authData?.user,
        authenticated: state?.auth?.authData?.authenticated,
        token: state?.auth?.authData?.token,
    };
}

export default connect(mapStateToProps, { _setAuthData, _updateCartData})(Login);
