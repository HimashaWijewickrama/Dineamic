import React from "react";
import { Typography } from "@mui/material";

interface TitleTextProps {
  title: any;
}

export const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  return (
    <Typography
      variant="caption"
      style={{
        textShadow: "0.6px 3px #e1e4e8",
        letterSpacing: "0.2rem",
        textTransform: "uppercase",
        fontSize: "34px",
        fontWeight: 600,
        fontFamily: "Julius Sans One serif",
      }}
      sx={{ display: "block" }}
    >
      {title}
    </Typography>
  );
};
