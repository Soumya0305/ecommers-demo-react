import React from 'react';
import homeDecore from "../image/homeDecore.jpg"
import sofachic from "../image/sofachic.jpg"
import dining from "../image/dinning.jpg"
import coffeTable from "../image/coffetable.jpg"

const HomeAndDecor = () => {

  return (
    <div className="bg-[#F9E5C3] min-h-screen p-6 ">
      {/* Banner Section */}
      <div className="relative flex flex-col lg:flex-row w-full">
        {/* Banner Image */}
        <img 
          src={homeDecore} 
          alt="Home Decor" 
          className="w-[80%] h-[28rem] object-cover" 
        />
        
        {/* Card Overlay */}
        <div className="absolute top-16 left-[87%] transform -translate-x-[50%] bg-white shadow-lg rounded-lg p-6 w-80 h-[21rem] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold font-serif text-[#D9534F]">Welcome to Home & Living</h2>
          <p className="text-gray-700 mt-2  tracking-wide">Discover the best in home decor and accessories.</p>
          <h2 className="font-bold text-lg text-slate-800 mt-4">FURNISH WITH STYLE</h2>
          <p className='text-gray-700 font-semibold mt-2 text-sm tracking-widest'>+ Explore</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={sofachic} alt="Product 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Stylish Sofa</h3>
            <p className="text-gray-600 mt-1">$299</p>
            <button className="bg-[#FF6339] text-white mt-4 p-2 rounded-md hover:bg-[#FF4500] transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={dining} alt="Product 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Elegant Dining Table</h3>
            <p className="text-gray-600 mt-1">$499</p>
            <button className="bg-[#FF6339] text-white mt-4 p-2 rounded-md hover:bg-[#FF4500] transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={coffeTable} alt="Product 3" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Chic Coffee Table</h3>
            <p className="text-gray-600 mt-1">$199</p>
            <button className="bg-[#FF6339] text-white mt-4 p-2 rounded-md hover:bg-[#FF4500] transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAndDecor;
