import React from "react";
import { Typography } from "@mui/material";

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
        fontFamily: "Forum, serif",
        fontStyle: "normal",
      }}
      sx={{ display: "block" }}
    >
      {contentText}
    </Typography>
  );
};
