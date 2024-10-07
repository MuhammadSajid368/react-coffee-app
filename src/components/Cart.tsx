import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from '../types';
import { incrementQuantity, decrementQuantity, createOrder, removeFromCart } from '../redux/actions';
import { toast } from 'react-toastify';

// Import icons from react-icons
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

const CartComponent: React.FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  if (cart.length === 0) {
    return <p>Your cart is empty!</p>;
  }

  // Calculate total price for the cart with correct discount logic
  const calculateTotalPrice = (cart: Cart[]) => {
    let totalPrice = 0;
    let discountApplied = false;

    // Loop through all cart items
    cart.forEach((cartItem) => {
      cartItem.items.forEach((item) => {
        const itemPrice = item.price * item.quantity * (1 + item.taxRate);
        totalPrice += itemPrice;

        // Apply discount if paired item is in the cart
        if (item.discountWith) {
          const pairedItem = cartItem.items.find(
            (pairedItem: Item) => pairedItem.id === item.discountWith
          );

          if (pairedItem) {
            const discount = item.discountPrice
              ? item.discountPrice * item.quantity
              : item.price * 0.1 * item.quantity;

            if (!discountApplied || item.quantity > 1) {
              totalPrice -= discount;
              discountApplied = true;
            }
          }
        }
      });
    });

    return totalPrice.toFixed(2);
  };



  // Handle ordering of cart items
  const handleOrder = async (cartItem: Cart) => {
    setIsLoading(true); 

    const order = {
      id: Date.now().toString(),
      items: cartItem.items,
      total: cartItem.productPrice,
      createdAt: new Date(),
    };

    // Simulating order creation
    await dispatch(createOrder(order));
    toast.success(`Your order for ${cartItem.productName} has been placed!`);

    setTimeout(() => {
      toast.info(`Your order for ${cartItem.productName} is ready!`);
      setIsLoading(false);
    }, 9000);
  };

  // Handle product removal
  const handleRemoveFromCart = (itemId: string, cartId: string) => {
    dispatch(removeFromCart(itemId, cartId));
    toast.success('Product removed successfully'); 
  };

  return (
    <div>
      <h2 className="text-3xl mt-11 font-bold mb-5">Shopping Cart</h2>

      <p>Total Items in Cart: {cart.length}</p>
      {cart.map((cartItem: Cart) => (
        <div key={cartItem.id} className="cart-item space-y-5 py-4">
          {cartItem.items.map((item) => (
            <div key={item.id} className="flex items-center md:ml-20">
              <div>
                <img src={item.image} alt={item.name} className="rounded-md w-40" />
              </div>
              <div className="pl-3 font-semibold">
                <p>Product: {item.name}</p>

                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Tax Rate: ${item.taxRate}</p>

                {/* Increment and Decrement Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id, cartItem.id))}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id, cartItem.id))}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Remove and Order Buttons with Icons */}
                <div className="flex items-center space-x-4 mt-3">
                  <button
                    onClick={() => handleRemoveFromCart(item.id, cartItem.id)}
                    className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 flex items-center"
                  >
                    <AiFillDelete className="mr-2" size={20} /> Remove
                  </button>

                  <button
                    onClick={() => handleOrder(cartItem)}
                    className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 flex items-center"
                    disabled={isLoading}
                  >
                    <FaShoppingCart className="mr-2" size={18} />
                    {isLoading ? 'Ordering...' : 'Order Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Display total price */}
      <div className="mt-5">
        <h3 className="text-xl font-bold">Total Price: ${calculateTotalPrice(cart)}</h3>
      </div>
    </div>
  );
};

export default CartComponent;
