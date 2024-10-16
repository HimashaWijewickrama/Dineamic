import React, { createContext, useContext, useState } from "react";

// Cart Context to store cart state
const CartContext = createContext<{
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}>({ cartCount: 0, setCartCount: () => {} });

export const useCart = () => useContext(CartContext);

// Cart Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
