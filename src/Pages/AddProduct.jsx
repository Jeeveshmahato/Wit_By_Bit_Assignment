import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Shoes");
  const [brand, setBrand] = useState("Nike");

  const handleImageUpload = (event) => {
    // Handle image upload logic here
    console.log(event.target.files[0]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[16px] font-[600]">Add Product</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-[16px] font-[600] rounded text-gray-600 hover:bg-gray-300">
            Cancel
          </button>
          <NavLink to="/ViewProducts">
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
        <span className="text-[14px] font-[500] text-[#808080]">Variants</span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Price info</span>
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h3 className="text-xl font-bold mb-4">Description</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-[14px] font-[400]">
            Product name *
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-[14px] font-[400]">
            Category *
          </label>
          <select
            className="border border-gray-300 p-2 rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Shoes">Shoes</option>
            <option value="T-shirt">T-shirt</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 text-[14px] font-[400]">
            Brand *
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter brand"
          />
        </div>

        <div className="relative  cursor-pointer inline-block">
          <button className="flex items-center px-4 py-2 border border-[#1F8CD0] rounded-md text-[#1F8CD0] hover:bg-blue-50 transition-colors">
            <FaImage className="mr-2" /> {/* Icon from react-icons */}
            Upload Image
            <input
              type="file"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
