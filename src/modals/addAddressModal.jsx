import React, { useState } from 'react';
import { addNewAddress } from '../api';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { initialAddress } from '../config/initialStates';

const AddAddressModal = (props) => {
  const {isOpen, setIsOpen, onAddAddress} = props
  const [formData, setFormData] = useState(initialAddress);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validation = () => {
    const newErrors = {};

    const requiredFields = ['name', 'mobileNumber', 'houseNumber', 'addressLine', 'locality', 'state', 'pincode'];

    requiredFields.forEach(field => {
      if (!formData[field]) {
          newErrors[field] = 'This field is required.';
      }
    });

    const mobileRegex = /^[0-9]{10}$/; // Adjust regex based on your requirements
        if (formData.mobileNumber && !mobileRegex.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile number must be 10 digits.';
        }

    const pincodeRegex = /^[0-9]{6}$/; // Adjust regex based on your requirements
        if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
            newErrors.pincode = 'Pincode must be 6 digits.';
        }
    return Object.keys(newErrors).length === 0;
  }

  const onClose = () => {
    setIsOpen(false);
    setFormData(initialAddress)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewAddress(props?.token, formData).then(res => {
      console.log(res.data);
      toast.success("added successfully");
    })
    onAddAddress(formData);
    onClose()
  };
  console.log(formData, "formadata")

  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white  rounded-lg w-[35rem] h-[35rem] shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-sm font-semibold">ADD NEW ADDRESS</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
              &times; {/* Close button */}
            </button>
          </div>
  
          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4">
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <p className='text-sm mb-4 font-semibold'>CONTACT DETAILS</p>
                <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number*"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              </div>
              <div>
                <p className='mb-4 text-sm font-semibold'>ADDRESS</p>
              <input
                type="text"
                name="houseNumber"
                placeholder="House Number*"
                value={formData.houseNumber}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="addressLine"
                placeholder="Address Line*  (Building/Street)"
                value={formData.addressLine}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="locality"
                placeholder="Locality* (Locality/Town)"
                value={formData.locality}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="state"
                placeholder="State*"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode*"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              </div>
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="mr-2"
                />
                Set as Default Address
              </label>
            </form>
          </div>
  
          {/* Footer */}
          <div className="p-4 border-t">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#D9534F] font-semibold text-white py-2 rounded hover:bg-[#FF4500] transition"
            >
              ADD ADDRESS
            </button>
          </div>
        </div>
      </div>
  );
};

function mapStateToProps(state) {
  return {
      token: state?.auth?.authData?.token,
  };
}

export default connect(mapStateToProps)(AddAddressModal);
