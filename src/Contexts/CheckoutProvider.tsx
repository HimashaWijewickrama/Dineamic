import React, { createContext, useContext, useState } from 'react';

type CheckoutContextType = {
  subtotal: number;
  setSubtotal: (subtotal: number) => void;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {  
    const [subtotal, setSubtotal] = useState<number>(0);

  return (
    <CheckoutContext.Provider value={{ subtotal, setSubtotal }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckoutContext must be used within a CheckoutProvider');
  }
  return context;
};
