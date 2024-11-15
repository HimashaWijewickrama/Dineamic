import React from "react";

//import styles files
import "../Styles/BestSeller.css";

//import custom components
import { HomeSectionTitle } from "./HomeSectionTitle";
import { BestSellerItemCard } from "./BestSellerCard";
import { sampleProductsData } from "../data/sampleProductsData";
import AnimatedBtn from "./AnimatedBtn";

const BestSeller: React.FC = () => {
  const filteredProducts = sampleProductsData.filter(
    (product) => product.id >= 12 && product.id <= 15
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
            />
          ))}
        </div>
        <br />
        <AnimatedBtn />
      </div>
    </div>
  );
};

export default BestSeller;
