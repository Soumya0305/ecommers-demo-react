import React, { useState } from 'react'; 
import purse from "../image/purse.jpg";
import western from "../image/western.jpg";
import dress from "../image/dress.jpg";
import trendy from "../image/trendy.jpg";
import ProductList from '../components/productList';

const categories = [
  [
    { imgSrc: trendy, label: 'Forever Trendy Fits' },
    { imgSrc: purse, label: 'Stunning Handbags' },
    { imgSrc: western, label: 'Most-Loved Footwear' },
    { imgSrc: dress, label: 'Chic Pieces' },
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
                <div className="absolute font-serif p-2 w-80 h-1/5 bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100  text-2xl font-medium text-center px-2">
                  {category.label}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <ProductList
      category={"women"}/>
    </div>
  );
};

export default WomenShopCarousel;
