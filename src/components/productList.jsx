import React from 'react'

const ProductList = (props) => {
    console.log(props.user)
    const products = [
        {
          id: 1,
          name: "Product 1",
          price: "$29.99",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Product 2",
          price: "$19.99",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Product 3",
          price: "$39.99",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Product 4",
          price: "$24.99",
          image: "https://via.placeholder.com/150",
        },
      ];
  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div className="bg-white shadow-md rounded-lg overflow-hidden" key={product.id}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-text">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-4 bg-button text-white py-2 px-4 rounded hover:bg-opacity-80">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
