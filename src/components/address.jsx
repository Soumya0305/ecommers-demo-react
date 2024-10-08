import React, { useState } from 'react';

const DeliveryAddressComponent = () => {
  const [addresses, setAddresses] = useState([{ id: 1, address: '123 Main St, City, Country', isDefault: true },{ id: 2, address: '1234 Main St, City, Country', isDefault: false }]);
  const [newAddress, setNewAddress] = useState('');
  const [deliveryEstimate, setDeliveryEstimate] = useState('2-3 days');

  const handleAddAddress = () => {
    if (newAddress) {
      const newAddressObject = { id: addresses.length + 1, address: newAddress, isDefault: false };
      setAddresses([...addresses, newAddressObject]);
      setNewAddress(''); // Clear input after adding
    }
  };

  return (
    <div className="max-w-[80rem] mx-auto mt-10 p-6 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-[15rem]">
      {/* Left Column: Cart Items */}
      <div className="space-y-3 w-[38rem] p-4 h-[calc(100vh-20rem)]">
        <div className="mb-8 flex justify-between items-center">
          <span className="text-xl font-serif">Select Delivery Address</span>
          <button 
            className="px-4 py-2 rounded border-2 border-black" 
            onClick={handleAddAddress}
          >
            ADD NEW ADDRESS
          </button>
        </div>
        <div>
          {addresses.map((address) => (
            <>
            <div className="mt-6">{address.isDefault ? "DEFAULT ADDRESS" : "OTHER ADDRESS"}</div>
            <div key={address.id} className="p-4 border mt-4 rounded">
              <p>{address.address}</p>
            </div>
            </>
          ))}
          <div className="p-4 border mt-4 rounded text-lg font-semibold text-[#FF4500]">
               + Add New Address
            </div>
            </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="bg-white p-4 shadow-md flex flex-col rounded-lg h-auto">
        <div className="flex justify-between mb-4">
          <span className="font-serif">PRICE DETAILS ( items )</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-serif">Total Amount :</span>
          <span className="font-semibold">₹ </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-serif">Delivery Estimate:</span>
          <span className="font-semibold">{deliveryEstimate}</span>
        </div>
        <button className="w-full font-semibold py-2 rounded bg-[#D9534F] shadow-md text-lg text-white transition duration-200 hover:bg-[#FF4500]">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default DeliveryAddressComponent;