import React from 'react';
import homeDecore from "../image/homeDecore.jpg"
import ProductList from '../components/productList';

const HomeAndDecor = () => {

  return (
    <div className="min-h-screen p-4 ">
      {/* Banner Section */}
      <div className="relative flex flex-col lg:flex-row w-full">
        {/* Banner Image */}
        <img 
          src={homeDecore} 
          alt="Home Decor" 
          className="w-[80%] h-[33rem] object-cover" 
        />
        
        {/* Card Overlay */}
        <div className="absolute bg-gray-100 top-16 left-[87%] transform -translate-x-[50%] shadow-lg rounded-lg p-6 w-80 h-[21rem] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold font-serif text-[#D9534F]">Welcome to Home & Living</h2>
          <p className="text-gray-700 mt-2  tracking-wide">Discover the best in home decor and accessories.</p>
          <h2 className="font-bold text-lg text-slate-800 mt-4">FURNISH WITH STYLE</h2>
          <p className='text-gray-700 font-semibold mt-2 text-sm tracking-widest'>+ Explore</p>
        </div>
      </div>

      {/* Products Section */}
      <ProductList 
      category={"homedecore"} />
    </div>
  );
};

export default HomeAndDecor;
