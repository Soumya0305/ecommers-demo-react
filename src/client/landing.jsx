import ecomm from "../svgs/ecomm.svg";
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate = useNavigate();


  const HandleNavigate = (action) => {
    console.log(`Navigating to /${action}`);
    navigate(`/${action}`)
  }

  return (
    <div className="bg-[#F9E5C3] font-serif h-screen w-screen flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center w-full lg:w-2/5 p-4 lg:ml-20">
        <h1 className="font-medium text-4xl lg:text-6xl">
          <p>The Best</p>
          <p>Collection of 2024</p>
        </h1>
        <p className="mt-6 text-sm lg:text-base">
          Whether you're looking for trendy apparel, stylish home decor, or innovative gadgets, we've got something for everyone. Our dedicated team curates each item to ensure top-notch quality.
        </p>
        <div className="flex space-x-4 mt-10">
        <button className="bg-[#FF6339] w-full lg:w-1/4 p-4 rounded-lg shadow-md text-lg text-white font-medium"
        onClick={() => HandleNavigate("login")}>
            Login
          </button>
          <button className="bg-[#FF6339] w-full lg:w-1/4 p-4 rounded-lg shadow-md text-lg text-white font-medium"
          onClick={() => HandleNavigate("sign-up")}>
            Sign-Up
          </button>
        </div>
      </div>
      <div className="flex-1 p-4 flex justify-center items-center">
        <img src={ecomm} className="w-3/4 h-auto max-w-xs lg:max-w-md" alt="E-commerce" />
      </div>
    </div>
  );
}

export default LandingPage;
