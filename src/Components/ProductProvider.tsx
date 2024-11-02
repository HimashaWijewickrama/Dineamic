import React, { createContext, useContext, ReactNode } from "react";
import { ISampleProducts } from "../types/ISampleProducts";
import { sampleProductsData } from "../data/sampleProductsData";

// Define the shape of the context's value
interface ProductContextType {
  products: ISampleProducts[];
}

// Create the context with an initial value
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Create the provider component
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  // Provide the sample products as context value
  const products = sampleProductsData;

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
