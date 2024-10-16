import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { ProductDetail } from "./ProductDetail";
import { ProductPrice } from "./ProductPrice";
import { RatingProduct } from "./RatingProduct";

interface ProductProps {
  prodtitle: any;
  prodimageurl: string;
  prodimagealt: string;
}

export const SingleProduct: React.FC<ProductProps> = ({
  prodtitle,
  prodimageurl,
  prodimagealt,
}) => {
  const [addFavourite, setAddFavourite] = useState(0);
  const [open, setOpen] = React.useState(false);
  const { setCartCount } = useCart();

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const OnClickAddFavourite = () => {
    setAddFavourite(addFavourite + 1);
    setOpen(true);
  };

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1); // Increment cart count correctly
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid #E8E8E8" }}>
      <CardHeader
        action={
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              title={addFavourite}
              PopperProps={{ disablePortal: true }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
            >
              <IconButton
                aria-label="add to favorites"
                color="secondary"
                onClick={OnClickAddFavourite}
              >
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
        }
        title={
          <Typography
            variant="overline"
            gutterBottom
            sx={{ display: "block" }}
            style={{ fontSize: "24px", marginBottom: 0 }}
          >
            {prodtitle}
          </Typography>
        }
        subheader={
          <Typography
            variant="overline"
            style={{ fontSize: "10px", padding: 0, color: "red" }}
          >
            *Quantity Of Per Serving is 350g
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="250"
        image={prodimageurl}
        alt={prodimagealt}
      />
      <RatingProduct ratingvalue={3} />
      <ProductPrice
        prodprice="$11.50"
        prodquantity="360g"
        prodprotein="38.6g"
        prodfat="14.9g"
        prodcarb="28.4g"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <ProductDetail proddetailsubtitle="mozzarella cheese, meat sauce, noodles, tomato sauce " />
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            color="success"
            endIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
