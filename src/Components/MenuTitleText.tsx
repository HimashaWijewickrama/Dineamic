import { Typography } from "@mui/material";
import React from "react";

interface MenuTitleTextProps {
  menutitle: string;
}

export const MenuTitleText: React.FC<MenuTitleTextProps> = ({ menutitle }) => {
  return (
    <Typography
      variant="caption"
      style={{
        textShadow: "0.6px 3px #e1e4e8",
        letterSpacing: "0.1rem",
        textTransform: "uppercase",
        fontSize: "26px",
        fontWeight: 400,
        fontFamily: "Julius Sans One serif",
      }}
      sx={{ display: "block" }}
    >
      {menutitle}
    </Typography>
  );
};
