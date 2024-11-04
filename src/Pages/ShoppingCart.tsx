import { Delete, ProductionQuantityLimits } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Stack, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import CartItemController from "../Components/CartItemController";
import { useCart } from "../Contexts/CartProvider";
import { sampleProductsData } from "../data/sampleProductsData";

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const [isButtonDisabled, setButtonDisabled] = React.useState(true);
  const { cartItems, cartCount, removeFromCart } = useCart();

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  // Initialize product counts as an array
  const [itemCounts, setItemCounts] = React.useState(
    sampleProductsData.map(() => 1)
  );

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, product, index) => {
      return total + product.price * itemCounts[index];
    }, 0);
  };

  React.useEffect(() => {
    setButtonDisabled(calculateSubtotal() <= 0);
  }, [itemCounts]); // Re-run effect when itemCounts changes

  const handleCheckoutBtn = () => {
    if (calculateSubtotal() > 0) {
      setButtonDisabled(false);
      navigate("/checkout", { state: { subtotal: calculateSubtotal() } });
    }
  };

  const list = () => (
    <Box sx={{ width: 500 }} onKeyDown={() => toggleDrawer(false)}>
      <List>
        <Stack spacing={2} direction="row" sx={{ my: 1, mx: "auto", p: 2 }}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Your Cart ({cartCount} items)
          </Typography>
        </Stack>
        <Divider />

        {cartItems.map((product, index) => (
          <ImageListItem key={product.id} sx={{ my: 1, mx: "auto", p: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              aria-label="add to shopping cart"
              size="small"
              style={{ marginBottom: "10px" }}
              onClick={() => removeFromCart(product.id)}
            >
              <Delete fontSize="small" /> Remove Item
            </Button>
            <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
              <img
                src={product.imageURL}
                alt={product.name}
                loading="lazy"
                style={{
                  width: "180px",
                  height: "150px",
                  border: "1px solid #",
                  borderRadius: "20px",
                }}
              />
              <Stack
                direction="column"
                spacing={0.5}
                sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  style={{ textTransform: "uppercase" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  style={{ textTransform: "uppercase" }}
                >
                  {product.price} LKR * {itemCounts[index]}
                </Typography>
                <br />
                <Typography style={{ color: "red" }}>
                  {(product.price * itemCounts[index]).toFixed(2)} LKR
                </Typography>
                <br />
                <CartItemController
                  itemCount={itemCounts[index]} // Pass specific item count
                  setItemCount={(
                    count: number | ((prevCount: number) => number)
                  ) => {
                    if (typeof count === "function") {
                      const newCount = count(itemCounts[index]); // Call the function if count is a function
                      const newCounts = [...itemCounts];
                      newCounts[index] = newCount;
                      setItemCounts(newCounts);
                    } else {
                      const newCounts = [...itemCounts];
                      newCounts[index] = count;
                      setItemCounts(newCounts);
                    }
                  }}
                />
              </Stack>
            </Stack>
          </ImageListItem>
        ))}
        <Divider />
        <Stack spacing={2} sx={{ my: 1, mx: "auto", p: 2 }}>
          {cartCount !== 0 ? (
            <>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                style={{
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Subtotal (Including taxes) : <br />
                {calculateSubtotal().toFixed(2)} LKR
              </Typography>
              <Button
                variant="contained"
                onClick={handleCheckoutBtn}
                disabled={isButtonDisabled}
              >
                Check Out
              </Button>
            </>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              Your cart is empty!
              <ProductionQuantityLimits
                style={{ fontSize: "18px", paddingLeft: "5px" }}
              />
            </Typography>
          )}

          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Stack>
      </List>
    </Box>
  );

  return (
    <>
      {(["right"] as const).map(() => (
        <React.Fragment key={"right"}>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <Badge color="error" badgeContent={cartCount} showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
