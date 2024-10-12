import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import * as React from "react";

interface RatingProps {
  ratingvalue: number;
}
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  paddingTop: theme.spacing(2),
}));

export const RatingProduct: React.FC<RatingProps> = ({ ratingvalue }) => {
  return (
    <Div>
      <Rating name="read-only" value={ratingvalue} readOnly />
    </Div>
  );
};
