// src/components/ItemList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addNotification, AddtoCart, createOrder } from "../redux/actions";
import { Cart, Item } from "../types";

const ItemList: React.FC = () => {
  const items = useSelector((state: any) => state.items);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleOrder = (item: Item) => {
    const order = {
      id: Date.now().toString(),
      items: [item],
      total: item.price * (1 + item.taxRate),
      createdAt: new Date(),
    };

    dispatch(createOrder(order));
    toast.success(`Your order for ${item.name} has been placed!`);

    setTimeout(() => {
      toast.info(`Your order for ${item.name} is ready!`);
    }, 9000);
  };

  const handleaddtocart = (item: Item) => {
    console.log("Adding to cart:", item.name);

    // Check if the item is already in the cart
    const existingCartItem = cart.find(
      (cartItem: Cart) => cartItem.items.some(cartItem => cartItem.id === item.id)
    );

    // If item is already in the cart, show a message and return early
    if (existingCartItem) {
      toast.error(`${item.name} is already in your cart!`);
      return; // Exit the function without adding the item again
    }

    let discountApplied = false;
    let discountedPrice = item.price * (1 + item.taxRate);

    // Check for applicable discounts
    if (item.discountWith) {
      const matchingItem = cart.find(
        (cartItem: Cart) => cartItem.id === item.discountWith
      );

      if (matchingItem) {
        discountApplied = true;
        discountedPrice = item.price * 0.9 * (1 + item.taxRate); // Apply discount
      }
    }

    // Create the new cart item with the updated price
    const newCartItem = {
      id: Date.now().toString(), // Ensure unique ID for each cart item
      productName: item.name,
      items: [item],
      productPrice: discountedPrice,
      quantity: 1, // Add quantity to keep track of how many of this item are in the cart
    };

    dispatch(AddtoCart(newCartItem)); // Dispatch action to add the item to the cart
    toast.success(
      `${item.name} is added to cart${discountApplied ? " with a discount!" : "!"
      }`
    );
  };


  return (
    <div>
      <h2 className="text-3xl mt-11 font-extrabold">Available Items</h2>
      <div className="flex items-center justify-center container mx-auto">
        <div className="grid grid-cols-1 space-x-2 md:grid-cols-2 w-full px-11 lg:grid-cols-3">
          {items.map((item: Item) => (
            <div className="rounded-xl shadow-lg" key={item.id}>
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={item.image} className="h-44 w-full" alt="" />
                </div>
                <h1 className="text-2xl md:text-3xl font-medium mt-3">
                  {item.name}
                </h1>
                <p className="text-slate-500 text-sm mt-3">
                  {item.description}
                </p>
                <p className="text-slate-700 mt-3 font-semibold">
                  Price :${item.price.toFixed(3)}
                </p>
                <button
                  onClick={() => handleOrder(item)}
                  className='text-center font-semibold mt-4 hover:bg-blue-600 rounded-lg bg-blue-500 py-2 text-white focus:scale-95 transition-all duration-400 ease-out'

                >
                  Order
                </button>
                <button
                  onClick={() => handleaddtocart(item)}
                  className="text-center font-semibold mt-4 hover:bg-orange-300 rounded-lg bg-orange-400 py-2 text-white focus:scale-95 transition-all duration-400 ease-out"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
