import React from "react";
import "../Styles/HomeSectionTitle.css";
interface HomeSectionTitleProps {
  homesectiontitle: any;
}

export const HomeSectionTitle: React.FC<HomeSectionTitleProps> = ({
  homesectiontitle,
}) => {
  return (
    <p
      className="home-section-title"
      style={{
        color: "#a3872d",
        marginTop: "20px",
        marginBottom: "15px",
      }}
    >
      {homesectiontitle}
    </p>
  );
};
