import React from "react";

//import styles files
import "../Styles/BestSeller.css";

//import custom components
import { HomeSectionTitle } from "./HomeSectionTitle";
import { BestSellerItemCard } from "./BestSellerCard";
import { sampleProductsData } from "../data/sampleProductsData";

const BestSeller: React.FC = () => {
  const filteredProducts = sampleProductsData.filter(
    (product) => product.id >= 12 && product.id <= 16
  );

  return (
    <div className="bestseller-section">
      <HomeSectionTitle homesectiontitle="Best Sellers" />

      <div className="container">
        <div className="content">
          {filteredProducts.map((product) => (
            <BestSellerItemCard
              key={product.id}
              itemsrc={product.imageURL}
              itemalt={product.name}
              itemtitle={product.name}
              itemprice={product.price}
            />
          ))}
          {/* <BestSellerItemCard
            itemsrc="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemalt="EMMYLOU"
            itemtitle="Hello"
            itemdes="this is first one"
          />{" "}
          <BestSellerItemCard
            itemsrc="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemalt="EMMYLOU"
            itemtitle="Hello"
            itemdes="this is first one"
          />{" "}
          <BestSellerItemCard
            itemsrc="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemalt="EMMYLOU"
            itemtitle="Hello"
            itemdes="this is first one"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
