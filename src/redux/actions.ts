
import { Cart, Item, Order } from "../types";

// Action Types
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Creators
export const fetchItems = (items: Item[]) => ({
  type: FETCH_ITEMS,
  payload: items,
});

export const createOrder = (order: Order) => ({
  type: CREATE_ORDER,
  payload: order,
});

export const addNotification = (message: string) => ({
  type: ADD_NOTIFICATION,
  payload: message,
});

export const AddtoCart = (cart: Cart) => ({
  type: ADD_TO_CART,
  payload: cart,
});

export const removeFromCart = (itemId: string, cartId: string) => ({
  type: REMOVE_FROM_CART,
  payload: { itemId, cartId },
});

export const incrementQuantity = (itemId: string, cartId: string) => ({
  
  type: INCREMENT_QUANTITY,
  payload: { itemId, cartId },
});

export const decrementQuantity = (itemId: string, cartId: string) => ({
  type: DECREMENT_QUANTITY,
  payload: { itemId, cartId },
});
