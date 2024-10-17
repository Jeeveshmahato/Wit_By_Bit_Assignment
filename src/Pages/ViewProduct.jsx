import React, { useState } from "react";
import { FaTrash } from "react-icons/fa"; // For the delete icon
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const AddProductVariants = () => {
  const [variants, setVariants] = useState([
    { option: "Size", values: ["M", "L"] },
    { option: "Color", values: ["Black", "Red"] },
  ]);

  const addVariant = () => {
    setVariants([...variants, { option: "", values: [] }]);
  };

  const removeVariant = (index) => {
    setVariants(variants.filter((_, idx) => idx !== index));
  };

  const handleOptionChange = (index, newOption) => {
    const updatedVariants = [...variants];
    updatedVariants[index].option = newOption;
    setVariants(updatedVariants);
  };

  const handleValuesChange = (index, newValues) => {
    const updatedVariants = [...variants];
    updatedVariants[index].values = newValues;
    setVariants(updatedVariants);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[16px] font-[600]">Add Product</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-[16px] font-[600] rounded text-gray-600 hover:bg-gray-300">
            Cancel
          </button>
          <NavLink to="/Combinations">
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
        <span className="text-[14px] font-[500] text-[#808080]">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Price info</span>
      </div>
    

      <div className="bg-white shadow-md w-full lg:w-[60%] rounded-md p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
      </div>
        {variants.map((variant, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium">
                Option *
              </label>
              <input
                type="text"
                required
                value={variant.option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  variant.option === "" ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter option"
              />
              {variant.option === "" && (
                <span className="text-red-500 text-sm">
                  Option can't be empty
                </span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium">
                Values *
              </label>
              <input
                type="text"
                required
                value={variant.values.join(", ")}
                onChange={(e) =>
                  handleValuesChange(
                    index,
                    e.target.value.split(",").map((val) => val.trim())
                  )
                }
                className={`mt-1 block w-full px-3 py-2 border ${
                  variant.values.length === 0
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Enter values separated by commas"
              />
              {variant.values.length === 0 && (
                <span className="text-red-500 text-sm">
                  Values can't be empty
                </span>
              )}
            </div>
            <button
              onClick={() => removeVariant(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}

        <button
          onClick={addVariant}
          className="text-blue-500 hover:underline font-medium mt-4"
        >
          + Add Option
        </button>
      </div>
    </div>
  );
};

export default AddProductVariants;
