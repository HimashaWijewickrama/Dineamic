import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import CartItemController from "./CartItemController";
import { ProductDetail } from "./ProductDetail";
import { ProductPrice } from "./ProductPrice";
import { RatingProduct } from "./RatingProduct";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: "100%",
  border: "1px solid #1B2125",
}));

interface ProductProps {
  prodtitle: string;
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

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const OnClickAddFavourite = () => {
    setAddFavourite(addFavourite + 1);
    setOpen(true);
  };
  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid #E8E8E8" }}>
      <CardHeader
        action={
          <>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                title={addFavourite}
                PopperProps={{
                  disablePortal: true,
                }}
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
          </>
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
        // image="https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551500758-d88f876073d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1550586554-a5a846e56593?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1575980967953-d812d957dca5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1557665223-671ea12d4d5d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <ProductDetail proddetailsubtitle="mozzarella cheese, meat sauce, noodles, tomato sause " />
        </Typography>
      </CardContent>
      <CardActions>
        <CartItemController />
      </CardActions>
    </Card>
  );
};
