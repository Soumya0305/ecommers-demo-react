import React, { useState } from 'react'; 
import men1 from "../image/men1.jpg";
import men2 from "../image/men2.jpg"
import men3 from "../image/men3.jpg"
import men4 from "../image/men4.jpg"
import ProductList from '../components/productList';

const categories = [
  [
    { imgSrc: men1, label: 'Dapper Footwears' },
    { imgSrc: men2, label: 'Cool-Guy Styles' },
    { imgSrc: men3, label: 'Classic Accessories' },
    { imgSrc: men4, label: 'Smart Casuals' },
  ],
];

const WomenShopCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="overflow-hidden relative mt-4">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeCard * 100}%)` }}>
        {categories.map((categoryGroup, cardIndex) => (
          <div key={cardIndex} className="flex-none w-screen flex justify-around">
            {categoryGroup.map((category, index) => (
              <div key={index} className="relative flex flex-col items-center w-full">
                <img src={category.imgSrc} alt={category.label} className="w-full h-[33rem] object-cover" />
                <div className="absolute font-serif p-2 w-80 h-1/5 bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 bg-opacity-80 text-center text-2xl font-medium px-2">
                  {category.label}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <ProductList
      category={"men"}/>
    </div>
  );
};

export default WomenShopCarousel;
