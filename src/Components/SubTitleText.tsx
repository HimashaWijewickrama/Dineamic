import { Typography } from "@mui/material";
import React from "react";

interface SubTitleTextProps {
  subTitle: any;
}

export const SubTitleText: React.FC<SubTitleTextProps> = ({ subTitle }) => {
  return (
    <Typography
      variant="caption"
      style={{
        textShadow: "0.2px 1px #e1e4e8",
        letterSpacing: "0.07rem",
        fontSize: "20px",
        textTransform: "capitalize",
        fontWeight: 500,
        fontFamily: "Roboto, sans-serif",
        textAlign: "left",
      }}
      gutterBottom
      sx={{ display: "block" }}
    >
      {subTitle}
    </Typography>
  );
};
