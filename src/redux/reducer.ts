import { Cart, Item, Order } from '../types';
import {
  FETCH_ITEMS,
  CREATE_ORDER,
  ADD_NOTIFICATION,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from './actions';

interface State {
  items: Item[];
  orders: Order[];
  notifications: string[];
  cart: Cart[];
}

const initialState: State = {
  items: [],
  orders: [],
  notifications: [],
  cart: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };

    case CREATE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };

    case ADD_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, action.payload] };

    case ADD_TO_CART: {
      const itemInCart = state.cart.find((cartItem) => cartItem.items.some((item) => item.id === action.payload.items[0].id));
    
      if (itemInCart) {
        const updatedCart = state.cart.map((cartItem) => {
          if (cartItem.items.some((item) => item.id === action.payload.items[0].id)) {
            return {
              ...cartItem,
              items: cartItem.items.map((item) =>
                item.id === action.payload.items[0].id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }  // Increment the quantity
                  : item
              ),
            };
          }
          return cartItem;
        });

        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

    case REMOVE_FROM_CART: {
      // Find the cart item to update and remove the specific item
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.cartId) {
          return {
            ...cartItem,
            items: cartItem.items.filter(item => item.id !== action.payload.itemId),
          };
        }
        return cartItem;
      }).filter(cartItem => cartItem.items.length > 0); // Remove the cart if it's empty

      return { ...state, cart: updatedCart };
    }

    case INCREMENT_QUANTITY: {
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.cartId) {
          return {
            ...cartItem,
            items: cartItem.items.map((item) =>
              item.id === action.payload.itemId
                ? { ...item, quantity: (item.quantity || 0) + 1 }
                : item
            ),
          };
        }
        return cartItem;
      });
      return { ...state, cart: updatedCart };
    }

    case DECREMENT_QUANTITY: {
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.cartId) {
          return {
            ...cartItem,
            items: cartItem.items.map((item) =>
              item.id === action.payload.itemId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }
        return cartItem;
      });
      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
};

export default reducer;
