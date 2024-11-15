import React from "react";

//import styles files
import "../Styles/BestSeller.css";

interface BestSellerItemCardProps {
  itemsrc: string;
  itemalt: string;
  itemtitle: string;
}

export const BestSellerItemCard: React.FC<BestSellerItemCardProps> = ({
  itemsrc,
  itemalt,
  itemtitle,
}) => {
  return (
    <div className="wrapper">
      <div className="box blury-card">
        <img src={itemsrc} alt={itemalt} />
        <div className="frame">
          <h2>{itemtitle}</h2>
        </div>
      </div>
    </div>
  );
};
