import { Link, Typography } from "@mui/material";
import * as React from "react";

interface ProductDetailProps {
  proddetailsubtitle: string;
}

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
