import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { RatingProduct } from "./RatingProduct";
interface ProductProps {
  prodtitle: string;
  prodimageurl: string;
  prodimagealt: string;
  prodingredient: string;
  prodprice: number;
  prodquantity: string;
  prodprotein: string;
  prodfat: string;
  prodcarb: string;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  paddingLeft: theme.spacing(3),
  paddingTop: theme.spacing(2),
}));
export const SingleProduct: React.FC<ProductProps> = ({
  prodtitle,
  prodimageurl,
  prodimagealt,
  prodingredient,
  prodprice,
  prodquantity,
  prodprotein,
  prodfat,
  prodcarb,
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
            style={{ fontSize: "24px", marginBottom: 0, textAlign: "center" }}
          >
            {prodtitle}
          </Typography>
        }
        subheader={
          <Typography
            variant="overline"
            style={{ fontSize: "10px", padding: 0, color: "red" }}
          >
            *Quantity Of Per Serving is {prodquantity}
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
      <Div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={9}
        >
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: "block" }}
            style={{ fontWeight: 600, fontSize: "20px" }}
          >
            {prodprice} LKR
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: "block" }}
            style={{ fontWeight: 600, fontSize: "20px" }}
          >
            {prodquantity}
          </Typography>
        </Stack>
        <br />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              style={{ fontWeight: 600 }}
            >
              {prodprotein}
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Protein
            </Typography>
          </Item>
          <Item>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              style={{ fontWeight: 600 }}
            >
              {prodfat}
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Fat
            </Typography>
          </Item>
          <Item>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
              style={{ fontWeight: 600 }}
            >
              {prodcarb}
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Carbs
            </Typography>
          </Item>
        </Stack>
      </Div>
      <CardContent>
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
          {prodingredient}
          <Link href="#" underline="none">
            View More Details ...
          </Link>
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
