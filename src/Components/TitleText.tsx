import { Typography } from "@mui/material";
import React from "react";

interface TitleTextProps {
  title: any;
}

export const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  return (
    <Typography
      style={{
        textShadow: "0.3px 1,5px #e1e4e8",
        letterSpacing: "0.01rem",
        textTransform: "uppercase",
        fontSize: "24px",
        fontWeight: 600,
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
      }}
      sx={{ display: "block" }}
    >
      {title}
    </Typography>
  );
};
