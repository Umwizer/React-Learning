import React, { useReducer, useState } from "react";
import MyCheckBox from "../Exercises/CheckBox";

const menuItems = [
  { id: 1, name: "Zinger Burger", price: 5.49 },
  { id: 2, name: "Bucket of 8 Hot Wings", price: 7.99 },
  { id: 3, name: "Original Recipe Chicken (2 Pieces)", price: 4.99 },
  { id: 4, name: "Popcorn Chicken (Regular)", price: 3.49 },
  { id: 5, name: "Chicken Sandwich Combo", price: 6.99 },
  { id: 6, name: "Famous Bowl", price: 5.79 },
];

const CartShopping = () => {
  const [cart, setCart] = useState<number[]>([]);
  const handleCheckBox = () => {
    //   { MyCheckBox? "checked" : ""
  };
  //  const = useReducer(initial, )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold text-red-600 mb-6">KFC Menu</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        <div className="bg-white rounded-lg p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Menu Items</h2>
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <label
                key={item.id}
                className="flex justify-between items-center p-3 border rounded"
              >
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                <span className="text-green-600 font-semibold">
                  ${item.price}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 flex-1">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <div className="flex flex-col gap-3 mb-4"></div>
          <div className="flex justify-between items-center font-bold text-lg mb-4">
            <span>Total:</span>
            <span className="text-green-600"></span>
          </div>
          <button className="bg-red-600 text-white w-full py-2 rounded">
            Place Order - $
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartShopping;
