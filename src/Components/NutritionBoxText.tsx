import { Typography } from "@mui/material";
import React from "react";

interface NutritionBoxTextProps {
  nutroboxtext: any;
}

export const NutritionBoxText: React.FC<NutritionBoxTextProps> = ({
  nutroboxtext,
}) => {
  return (
    <Typography
      variant="caption"
      gutterBottom
      sx={{ display: "block" }}
      style={{
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        fontWeight: 500,
        color: "#1e1e1e",
      }}
    >
      {nutroboxtext}
    </Typography>
  );
};
