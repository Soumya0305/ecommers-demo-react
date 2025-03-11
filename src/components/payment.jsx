import React from 'react'
import { calculateTotal } from '../partials/commonFunctions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = (props) => {
    const navigate = useNavigate()
  return (
    <div className='grid grid-cols-2 p-6 mt-10 gap-[15rem]'>
        <div className='space y-3 p-4'>Choose Payment Method</div>
        <div className="bg-white p-4 shadow-md flex flex-col rounded-lg h-auto">
    <div className="flex justify-between mb-4">
      <span className="font-serif">PRICE DETAILS ( items )</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="font-serif">Total MRP</span>
      <span className="font-semibold">₹ {calculateTotal(props.cart.items)}</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="font-serif">Platform Fee</span>
      <span className="font-semibold">₹ 100</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="font-serif">Shipping Fee</span>
      <span className="font-semibold">Free</span>
    </div>
    <div className='border mb-4'></div>
    <div className="flex justify-between font-semibold mb-4">
      <span className="font-serif">Total Amount</span>
      <span className="font-semibold">₹ {calculateTotal(props.cart.items)}</span>
    </div>
  </div>
    </div>
  )
}

function mapStateToProps(state) {
    return {
        token: state.auth.authData.token,
        cart: state.cart.cartData,
    }
  }
  export default connect(mapStateToProps)(Payment)