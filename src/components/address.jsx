import React, { useEffect, useState } from 'react';
import AddAddressModal from '../modals/addAddressModal';
import { getAllAddress } from '../api';
import { connect } from 'react-redux';
import { calculateTotal } from '../partials/commonFunctions';
import { ecomm_store } from '../store/common_store';

const DeliveryAddressComponent = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');
  const [deliveryEstimate, setDeliveryEstimate] = useState('2-3 days');
  const [selectedAddress, setSelectedAddress] = useState("")
  const [isDefault, setIsDefault] = useState("")
  const state = ecomm_store.getState();
  console.log(state);

  useEffect(() => {
    AddressList()
  },[])

  const AddressList = () => {
    getAllAddress(props.token).then(res => {
      setAddresses(res.data);
      setIsDefault(res.data.filter(add => add.isDefault)[0]._id);
      setSelectedAddress(res.data.filter(add => add.isDefault)[0]._id)
    }).catch(e => console.error(e));
  }
  console.log(selectedAddress, 'selectedADD')

  return (
    <div className="max-w-[80rem] mx-auto mt-10 p-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-[15rem]">
  {/* Left Column: Cart Items */}
  <div className="space-y-3 w-[38rem] p-4 h-[calc(100vh-20rem)]">
    
  {addresses.length > 0 ? <>
    <div className="mb-8 flex justify-between items-center">
      <span className="text-xl font-serif">Select Delivery Address</span>
      <button 
        className="px-4 py-2 rounded border-2 border-black" 
        onClick={() => setIsModalOpen(true)}
      >
        ADD NEW ADDRESS
      </button>
    </div>

    {/* Default Address */}
    {addresses.some(address => address.isDefault) && (
      <div>
        <div className="mt-6 text-lg font-semibold">DEFAULT ADDRESS</div>
        {addresses.filter(address => address.isDefault).map((address, index) => (
          <div key={address._id} className="p-4 border mt-4 rounded flex items-center space-x-4">
            <input
              type="radio"
              name="selectedAddress"
              value={address._id}
              id={`address-${index}`}
              className="form-radio h-5 w-5 text-red-600"
              checked={isDefault === address.id || selectedAddress === address._id}
              onChange={() => setSelectedAddress(address._id)}
            />
            <label htmlFor={`address-${index}`} className="flex-grow cursor-pointer">
              <p className="font-bold">{address.name}</p>
              <p>{address.houseNumber}, {address.locality}</p>
              <p>{address.addressLine}, {address.city}, {address.state} - {address.pincode}</p>
              <p>Mobile: {address.mobileNumber}</p>
            </label>
          </div>
        ))}
      </div>
    )}

    {/* Other Addresses */}
    {addresses.some(address => !address.isDefault) && (
      <div>
        <div className="mt-6 text-lg font-semibold">OTHER ADDRESSES</div>
        {addresses.filter(address => !address.isDefault).map((address, index) => (
          <div key={address._id} className="p-4 border mt-4 rounded flex items-center space-x-4">
            <input
              type="radio"
              name="selectedAddress"
              value={address._id}
              id={`address-${index}`}
              className="form-radio h-5 w-5 text-red-600"
              checked={selectedAddress === address._id}
              onChange={() => setSelectedAddress(address._id)}
            />
            <label htmlFor={`address-${index}`} className="flex-grow cursor-pointer">
              <p className="font-bold">{address.name}</p>
              <p>{address.houseNumber}, {address.locality}</p>
              <p>{address.addressLine}, {address.city}, {address.state} - {address.pincode}</p>
              <p>Mobile: {address.mobileNumber}</p>
            </label>
          </div>
        ))}
      </div>
    )}


    <div className="p-4 border mt-4 rounded text-lg font-semibold text-[#FF4500]"
    onClick={() => setIsModalOpen(true)}>
      + Add New Address
    </div>
    </> : <AddAddressModal
    isModel={false}
    isOpen={true}
    setIsOpen={setIsModalOpen}
    onAddAddress={AddressList}
  />}
  </div>

  {/* Right Column: Order Summary */}
  <div className="bg-white p-4 shadow-md flex flex-col rounded-lg h-auto">
    <div className="flex justify-between mb-4">
      <span className="font-serif">PRICE DETAILS ( items )</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="font-serif">Total Amount :</span>
      <span className="font-semibold">₹ {calculateTotal(props.cart.items)}</span>
    </div>
    <div className="flex justify-between mb-4">
      <span className="font-serif">Delivery Estimate:</span>
      <span className="font-semibold">{deliveryEstimate}</span>
    </div>
    <button className="w-full font-semibold py-2 rounded bg-[#D9534F] shadow-md text-lg text-white transition duration-200 hover:bg-[#FF4500]">
      CONTINUE
    </button>
  </div>
  
  <AddAddressModal
    isModel={true}
    isOpen={isModalOpen}
    setIsOpen={setIsModalOpen}
    onAddAddress={AddressList}
  />
</div>
  );
};

function mapStateToProps(state) {
  return {
      token: state.auth.authData.token,
      cart: state.cart.cartData,
  }
}
export default connect(mapStateToProps)(DeliveryAddressComponent)