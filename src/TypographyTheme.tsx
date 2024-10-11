import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link, Typography } from "@mui/material";
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  // padding: theme.spacing(1),
}));

export default function TypographyTheme() {
  return (
    <>
      <Typography
        variant="caption"
        gutterBottom
        sx={{ display: "block" }}
        style={{ fontWeight: 600 }}
      >
        Main Ingredients
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
        mozzarella cheese, meat sauce, noodles, tomato sause <br />
        <Link href="#" underline="none">
          View More Details ...
        </Link>
      </Typography>
    </>
  );
}
