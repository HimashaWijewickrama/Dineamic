import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "../Styles/BestSeller.css";
const BestSeller: React.FC = () => {
  return (
    <div className="bestseller-section">
      <h2 style={{ color: "#a3872d", textAlign: "center" }}>Best Sellers</h2>

      <div className="container">
        <div className="content">
          <div className="wrapper">
            <div className="box zoom-in">
              <img
                src="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="EMMYLOU"
              />

              <h2>Postcards From Italy</h2>
              <p>And I will love to see that day</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="box blury-card">
              <img
                src="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="EMMYLOU"
              />

              <div className="frame">
                <h2>Blue Ridge</h2>
                <p>MOUNTAINS</p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="box zoom-out">
              <img
                src="https://images.unsplash.com/photo-1658829457670-d80231baebe5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="EMMYLOU"
              />

              <div className="frame">
                <h2>
                  MELODY <span>NOIR</span>
                </h2>
                <p>
                  Tell me where the wind is blowing 'cause that's where the
                  music's going
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
