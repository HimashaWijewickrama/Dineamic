import React from "react";

//import styles files
import "../Styles/OtherServiceCard.css";

type OtherServiceCardProps = {
  url: string;
  alt: string;
};

const OtherServiceCard: React.FC<OtherServiceCardProps> = ({ url, alt }) => {
  return (
    <div className="service-section" >
      <img src={url} alt={alt} />
    </div>
  );
};

export default OtherServiceCard;
