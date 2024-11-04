import { Typography } from "@mui/material";
import React from "react";

interface PriceBoxTextProps {
  priceboxtext: any;
}

export const PriceBoxText: React.FC<PriceBoxTextProps> = ({ priceboxtext }) => {
  return (
    <Typography
      variant="caption"
      gutterBottom
      sx={{ display: "block" }}
      style={{
        fontSize: "20px",
        fontFamily: "Roboto, serif",
        fontStyle: "normal",
        fontWeight: 900,
      }}
    >
      {priceboxtext}
    </Typography>
  );
};
