import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // For the delete icon
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const Combinations = () => {
    const [activeTab, setActiveTab] = useState("combinations");
    const [combinations, setCombinations] = useState([
        { name: "M/Black", sku: "ABC12", inStock: false, quantity: 0 },
        { name: "M/Red", sku: "SDF3", inStock: true, quantity: 5 },
        { name: "L/Black", sku: "HWE2", inStock: false, quantity: 0 },
        { name: "L/Red", sku: "ABC12", inStock: true, quantity: 9, duplicate: true }, // Duplicate SKU example
      ]);
    
      const handleSkuChange = (index, value) => {
        const updatedCombinations = [...combinations];
        updatedCombinations[index].sku = value;
        setCombinations(updatedCombinations);
      };
    
      const handleInStockChange = (index) => {
        const updatedCombinations = [...combinations];
        updatedCombinations[index].inStock = !updatedCombinations[index].inStock;
        setCombinations(updatedCombinations);
      };
    
      const handleQuantityChange = (index, value) => {
        const updatedCombinations = [...combinations];
        updatedCombinations[index].quantity = value;
        setCombinations(updatedCombinations);
      };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[16px] font-[600]">Add Product</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-[16px] font-[600] rounded text-gray-600 hover:bg-gray-300">
            Cancel
          </button>
          <NavLink to="/Price">
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
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">Variants</span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Price info</span>
      </div>
     
      <div className="p-8">
      <div className="bg-white p-6 rounded-lg w-full lg:w-[60%] shadow-lg">
      <h3 className="text-xl font-bold mb-4">Combinations</h3>

        {combinations.map((combination, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex-1">
              <p className="text-gray-700 font-medium">{combination.name}</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={combination.sku}
                onChange={(e) => handleSkuChange(index, e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  combination.duplicate ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="SKU"
              />
              {combination.duplicate && (
                <p className="text-red-500 text-sm">Duplicate SKU</p>
              )}
            </div>
            <div className="flex items-center justify-center flex-1">
              <label className="mr-2">In stock</label>
              <input
                type="checkbox"
                checked={combination.inStock}
                onChange={() => handleInStockChange(index)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
            </div>
            <div className="flex-1">
              <input
                type="number"
                value={combination.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Quantity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Combinations;
