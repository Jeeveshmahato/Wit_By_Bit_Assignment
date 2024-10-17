import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // For the delete icon
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const Price = () => {
    const [price, setPrice] = useState("₹12000");
    const [discount, setDiscount] = useState(12);
    const [discountType, setDiscountType] = useState("%");
  
    const handleDiscountTypeChange = (type) => {
      setDiscountType(type);
    };
  

  return (
    <div className="p-4  ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[16px] font-[600]">Add Product</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-[16px] font-[600] rounded text-gray-600 hover:bg-gray-300">
            Cancel
          </button>
          <NavLink to="/">
            <button className="px-4 py-2 text-[16px] font-[600] bg-blue-600 text-white rounded hover:bg-blue-700">
              Next
            </button>
          </NavLink>
        </div>
      </div>

      {/* Steps */}
      <div className="flex items-center space-x-4 mb-8">
        <span className=" text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Description
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Variants
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">
          Price info
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4">Price Info</h3>
      
      {/* Price Input */}
      <div className="mb-4 w-full lg:w-[60%]">
        <label className="block text-gray-700 mb-2 font-semibold">Price *</label>
        <div className="relative">
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="₹ Enter price"
          />
        </div>
      </div>

      {/* Discount Input */}
      <div className="mb-4 w-full lg:w-[60%]">
        <label className="block text-gray-700 mb-2 font-semibold">Discount</label>
        <div className="flex items-center">
          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter discount"
          />
          <div className="ml-2 flex">
            <button
              onClick={() => handleDiscountTypeChange("%")}
              className={`px-4 py-2 border rounded-r-none border-gray-300 font-semibold ${
                discountType === "%"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-white text-gray-500"
              }`}
            >
              %
            </button>
            <button
              onClick={() => handleDiscountTypeChange("$")}
              className={`px-4 py-2 border rounded-l-none border-gray-300 font-semibold ${
                discountType === "$"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-white text-gray-500"
              }`}
            >
              $
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Price;
