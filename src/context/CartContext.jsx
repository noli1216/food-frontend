import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

// 🔄 LOAD FROM LOCALSTORAGE
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

// 🧠 REDUCER
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart, action.payload];
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      return { ...state, cart: updatedCart };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

// 🧺 PROVIDER
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 💾 SAVE TO LOCALSTORAGE EVERY CHANGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// 🪝 HOOK
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
