import * as React from "react";
import { styled } from "@mui/material/styles";
import { Link, Typography } from "@mui/material";

interface ProductDetailProps {
  proddetailsubtitle: string;
}

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
}));

export const ProductDetail: React.FC<ProductDetailProps> = ({
  proddetailsubtitle,
}) => {
  return (
    <>
      <Typography
        variant="caption"
        gutterBottom
        sx={{ display: "block" }}
        style={{ fontWeight: 600, textAlign: "left" }}
      >
        Main Ingredients
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        sx={{ display: "block" }}
        style={{ fontWeight: 400, textAlign: "left" }}
      >
        {proddetailsubtitle}
        <br />
        <Link href="#" underline="none">
          View More Details ...
        </Link>
      </Typography>
    </>
  );
};
