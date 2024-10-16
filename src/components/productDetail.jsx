import React, { useEffect, useState } from 'react'
import { getProductDetail } from '../api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addItemtoCart } from '../api';
import { connect } from 'react-redux';

const ProductDetail = (props) => {
    const { id } = useParams();
    const [ productDetail, setProductDetail ] = useState(null);
    const [cart, setCart ] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
          getProductDetail(id).then(res => {
            setProductDetail(res.data);
          }).catch(error => {
            console.error(error);
          });
        };
    
        fetchProduct();
      }, [id]);

      const addToCart = async () => {
        const payload = {
            productId: productDetail._id,
            quantity: 1,
          };
        await addItemtoCart(props.token, payload).then((res) => {
            setCart(res.data.cart);
            toast.success("Item added successfully to cart")
        }).catch(error => {
          console.error('Error adding to cart:', error);
        })
      };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card 1: Image and Description */}
      <div className="col-span-1">
        
        <div className='bg-white shadow-lg p-6 rounded-lg'><img
          src={productDetail?.image}
          alt={productDetail?.name}
          className="w-full h-auto rounded-lg"
        />
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 mt-[4rem]'>
        <h2 className="text-xl font-bold mt-4">{productDetail?.name}</h2>
        <p className="text-gray-700 mb-4">{productDetail?.description}</p>
        <h3 className="text-lg font-semibold">Specifications</h3>
        <ul className="list-disc ml-4 mt-2">
          <li>Category: {productDetail?.category}</li>
          <li>Material: {productDetail?.material}</li>
          <li>Dimensions: {productDetail?.dimensions}</li>
        </ul>
        </div>
      </div>

      {/* Card 2: Reviews and Add to Cart */}
      <div className="bg-white rounded-lg shadow-lg p-4 col-span-1">
        <h3 className="text-lg font-semibold">Reviews</h3>
        {/* Here you could map over reviews if you have them */}
        <p className="text-gray-700">No reviews yet.</p>
        <h2 className="text-xl text-red-600 mt-4">${productDetail?.price}</h2>
        <button
        onClick={() => addToCart()} 
        className="mt-4  py-2 px-4 bg-[#D9534F] rounded-lg shadow-md text-lg text-white font-medium transition duration-200 hover:bg-[#FF4500]">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
	return {
		token: state.auth.authData.token,
	}
}
export default connect(mapStateToProps)(ProductDetail)
