import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  paddingLeft: theme.spacing(14),
  paddingTop: theme.spacing(2),
}));

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Div>
      <Rating name="read-only" value={value} readOnly />
    </Div>
  );
}
