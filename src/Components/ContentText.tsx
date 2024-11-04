import { Typography } from "@mui/material";
import React from "react";

interface ContentTextProps {
  contentText: any;
}

export const ContentText: React.FC<ContentTextProps> = ({ contentText }) => {
  return (
    <Typography
      style={{
        textTransform: "capitalize",
        fontSize: "15px",
        fontWeight: 400,
        fontFamily: "Roboto, sans-serif",
        fontStyle: "normal",
      }}
      sx={{ display: "block" }}
    >
      {contentText}
    </Typography>
  );
};
