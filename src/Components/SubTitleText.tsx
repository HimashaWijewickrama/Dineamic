import React from "react";
import { Typography } from "@mui/material";

interface SubTitleTextProps {
  subTitle: any;
}

export const SubTitleText: React.FC<SubTitleTextProps> = ({ subTitle }) => {
  return (
    <Typography
      variant="caption"
      style={{
        textShadow: "0.6px 3px #e1e4e8",
        letterSpacing: "0.08rem",
        fontSize: "22px",
        textTransform: "uppercase",
        fontWeight: 500,
        fontFamily: "Julius Sans One serif",
      }}
      gutterBottom
      sx={{ display: "block" }}
    >
      {subTitle}
    </Typography>
  );
};
