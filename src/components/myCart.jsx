import React, { useEffect, useState } from 'react'
import { getCartItems } from '../api'
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../api';
import { updateCartQuantity } from '../api';

const MyCart = (props) => {
    const [ cartItems, setCartItems ] = useState([]);
    const [discount, setDiscount] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
       fetchCartProducts();
    },[])

    const fetchCartProducts = () => {
        getCartItems(props.token).then(res => {
            setCartItems(res.data.items);
            calculateTotal(res.data.items);
        }).catch(e => {
            console.error(e);
        });
    }

    const calculateTotal = (items) => {
        const total = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const updateQuantity = (product, change) => {
        const payload = {
            productId: product?.productId,
            quantityChange: change
        }
        updateCartQuantity(props.token, payload).then(res => {
            fetchCartProducts();
        }).catch(e => {
            console.error(e);
            toast.error("error updating quantity")
        })
    }

    const removeItem = async (product) => {
        const payload = {
            productId: product?.productId,
        };
    
        removeItemFromCart(props.token, payload)
            .then((res) => {
                toast.success("Removed Successfully");
                fetchCartProducts();
            })
            .catch((error) => {
                toast.error("Failed to remove item");
                console.error('Error removing item from cart:', error);
            });
    };

    const handleDiscountChange = (e) => {
        setDiscount(e.target.value);
    };

    const applyDiscount = () => {
        // Implement discount logic here (e.g., validate coupon)
        toast.success('Discount applied!'); // Placeholder
    };

    console.log(cartItems, "cartItems")

    return (
        <div className="max-w-[80rem] mx-auto mt-10 p-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-[15rem]">
        {/* Left Column: Cart Items */}
        <div className="space-y-3 w-[38rem] h-[calc(100vh-20rem)]"> {/* Adjust height as needed */}
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.productId} className="bg-white w-full h-auto p-2 mb-8 shadow-md rounded-lg relative transition-transform transform hover:scale-105">
                        <button
                            onClick={() => removeItem(item, true)}
                            className="absolute top-2 right-2 text-black-500 hover:text-red-700 transition duration-150"
                        >
                            ✖
                        </button>
                        <div className="flex">
                            <img 
                                src={item.product.image} 
                                alt={item.product.name} 
                                className="w-[8rem] h-[10rem] object-cover rounded-md mr-4"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                                <p className="text-gray-700">{item.product.description}</p>
                                <p className="text-gray-600">Size: {item.product.size}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => updateQuantity(item, -1)}
                                            className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded hover:bg-gray-400 transition duration-150"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item, 1)}
                                            className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded hover:bg-gray-400 transition duration-150"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="text-lg font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    
        {/* Right Column: Order Summary */}
        <div className="bg-white p-4 shadow-md flex flex-col rounded-lg h-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">Order Summary</h2>
            <div className="flex justify-between mb-4">
                <span className="text-xl font-semibold">Total Amount:</span>
                <span className="text-xl font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full font-semibold py-2 rounded bg-[#D9534F] shadow-md text-lg text-white transition duration-200 hover:bg-[#FF4500]">
                Place Order
            </button>
        </div>
    </div>
    ); 
}

function mapStateToProps(state) {
	return {
		token: state.auth.authData.token,
	}
}
export default connect(mapStateToProps)(MyCart)