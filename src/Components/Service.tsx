import React from "react";
import "../Styles/Service.css";
export default function Service() {
  return (
    <div className="service-section" style={{ margin: "70px" }}>
      <img
        src="https://picsum.photos/id/111/300/300"
        alt="an old car"
        style={{ margin: "10px" }}
      />

      <img
        src="https://picsum.photos/id/183/300/300"
        style={{
          color: "#668284",
          borderWidth: "1px",
          fontSize: "18px",
          margin: "10px",
        }}
        alt="an old car"
      />

      <img
        src="https://picsum.photos/id/111/300/300"
        alt="an old car"
        style={{ margin: "10px" }}
      />

      <img
        src="https://picsum.photos/id/183/300/300"
        style={{
          color: "#668284",
          borderWidth: "1px",
          fontSize: "18px",
          margin: "10px",
        }}
        alt="an old car"
      />
    </div>
  );
}
