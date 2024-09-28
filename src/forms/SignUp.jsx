import React, { useEffect, useState } from 'react';
import { registerUser } from '../api';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic client-side validation
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
          const payload = { name, email, password };
          registerUser(payload).then((res) => {
            navigate("/login");
            toast.success(res?.data?.message);
          }).catch((error) => {
          console.error('Error:', error);
          toast.error(error?.response?.data?.message || "Something went wrong! Try Again")
        })
      };

      useEffect(() => {
        if(password === confirmPassword){
            setError(false)
        }
      },[confirmPassword])
    console.log(name,email,password,confirmPassword, "userInfo")
    return (
        <div className="flex font-serif justify-center items-center h-screen bg-[#F9E5C3]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105">
                <h2 className="text-2xl text-center font-semibold mb-6">Create your E-comm account</h2>
                {error ? <div className="mb-4 text-red-500">{error}</div> : null}

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="name">Full Name :</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6339] transition duration-150"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6339] transition duration-150"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6339] transition duration-150"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700" htmlFor="confirmPassword">Confirm Password :</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#FF6339] transition duration-150"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#FF6339] w-full p-4 rounded-lg text-white font-semibold transition duration-200 hover:bg-[#FF4500]"
                >
                    Sign Up
                </button>

                <div className="text-center mt-4">
                    <p className="text-sm">Already have an account? <a href="/login" className="text-[#FF6339] hover:underline">Login</a></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
