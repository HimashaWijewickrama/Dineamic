import { FitnessCenterTwoTone } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartProvider";
import { NutritionBoxText } from "./NutritionBoxText";
import { OverLineText } from "./OverLineText";
import { PriceBoxText } from "./PriceBoxText";
import { RatingProduct } from "./RatingProduct";
import { SubTitleText } from "./SubTitleText";
import { TitleText } from "./TitleText";
interface ProductProps {
  prodid: number;
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
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 350,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 50,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 1,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));
export const SingleProduct: React.FC<ProductProps> = ({
  prodid,
  prodtitle,
  prodimageurl,
  prodingredient,
  prodprice,
  prodquantity,
  prodprotein,
  prodfat,
  prodcarb,
}) => {
  const [addFavourite, setAddFavourite] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const { addToCart } = useCart(); // Use addToCart instead of setCartCount

  const handleCartTooltipClose = () => {
    setTooltipOpen(false);
  };
  const handleFavTooltipClose = () => {
    setOpen(false);
  };

  const OnClickAddFavourite = () => {
    setAddFavourite(addFavourite + 1);
    setOpen(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: prodid,
      name: prodtitle,
      price: prodprice,
      quantity: 1, // Default quantity added to cart
      imageURL: prodimageurl,
    });
    setDisable(true); // Disable button after adding
    setTooltipOpen(true);
  };

  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/product/${prodid}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid #E8E8E8" }}>
      <CardHeader
        action={
          <ClickAwayListener onClickAway={handleFavTooltipClose}>
            <Tooltip
              title={addFavourite}
              PopperProps={{ disablePortal: true }}
              onClose={handleFavTooltipClose}
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
        title={<TitleText title={prodtitle} />}
        subheader={
          <OverLineText
            overlinetext={"*Quantity Of Per Serving is " + prodquantity}
          />
        }
      />
      <ImageButton
        focusRipple
        style={{
          width: "100%",
          height: "250",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${prodimageurl})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={(theme) => ({
              position: "relative",
              p: 4,
              pt: 2,
              pb: `calc(${theme.spacing(1)} + 6px)`,
            })}
            onClick={handleNavigateToDetail}
          >
            View
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
      <RatingProduct ratingvalue={3} />
      <Div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={9}
        >
          <PriceBoxText priceboxtext={prodprice + " LKR"} />
          <PriceBoxText priceboxtext={prodquantity} />
        </Stack>
        <br />
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <NutritionBoxText nutroboxtext={prodprotein} />
            <Typography variant="caption" sx={{ display: "block" }}>
              Protein
            </Typography>
          </Item>
          <Item>
            <NutritionBoxText nutroboxtext={prodfat} />

            <Typography variant="caption" sx={{ display: "block" }}>
              Fat
            </Typography>
          </Item>
          <Item>
            <NutritionBoxText nutroboxtext={prodcarb} />

            <Typography variant="caption" sx={{ display: "block" }}>
              Carbs
            </Typography>
          </Item>
        </Stack>
      </Div>
      <CardContent>
        <SubTitleText subTitle={"Benefits"} />
        <Stack direction="row" spacing={0.5}>
          <Chip label="checked" icon={<FitnessCenterTwoTone />} />
          <Chip label="checked" icon={<FitnessCenterTwoTone />} />
          <Chip label="checked" icon={<FitnessCenterTwoTone />} />
          <br />
        </Stack>
      </CardContent>
      <CardActions>
        <Box sx={{ width: "100%" }}>
          <ClickAwayListener onClickAway={handleCartTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleCartTooltipClose}
                open={tooltipOpen}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="This item is already added!"
              >
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  color="success"
                  endIcon={<ShoppingCartIcon />}
                  onClick={handleAddToCart}
                  disabled={disable}
                >
                  Add To Cart
                </Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Box>
      </CardActions>
    </Card>
  );
};
