import { Typography } from "@mui/material";
import React from "react";

interface OverLineTextProps {
  overlinetext: string;
}

export const OverLineText: React.FC<OverLineTextProps> = ({ overlinetext }) => {
  return (
    <Typography
      variant="overline"
      style={{
        fontSize: "10px",
        padding: 0,
        color: "red",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
        textTransform: "capitalize",
      }}
    >
      {overlinetext}
    </Typography>
  );
};
