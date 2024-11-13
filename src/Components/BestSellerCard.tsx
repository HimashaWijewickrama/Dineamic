import React from "react";

//import styles files
import "../Styles/BestSeller.css";

interface BestSellerItemCardProps {
  itemsrc: string;
  itemalt: string;
  itemtitle: string;
  itemprice: number;
}

export const BestSellerItemCard: React.FC<BestSellerItemCardProps> = ({
  itemsrc,
  itemalt,
  itemtitle,
  itemprice,
}) => {
  return (
    <div className="wrapper">
      <div className="box blury-card">
        <img src={itemsrc} alt={itemalt} />

        <div className="frame">
          <h2>{itemtitle}</h2>
          <p>{itemprice} LKR</p>
        </div>
      </div>
    </div>
  );
};
