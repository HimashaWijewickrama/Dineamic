import { Delete } from "@mui/icons-material";
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
import CartItemController from "../Components/CartItemController";
import { sampleProductsData } from "../data/sampleProductsData";

type Anchor = "right";

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // Initialize product counts as an array
  const [itemCounts, setItemCounts] = React.useState(
    sampleProductsData.map(() => 0)
  );

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
            Your Cart ({itemCounts.reduce((a, b) => a + b, 0)} items)
          </Typography>
        </Stack>
        <Divider />

        {sampleProductsData.map((sampleProducts, index) => (
          <ImageListItem
            key={sampleProducts.imageURL}
            sx={{ my: 1, mx: "auto", p: 2 }}
          >
            <Button
              variant="outlined"
              color="primary"
              aria-label="add to shopping cart"
              size="small"
              style={{ marginBottom: "10px" }}
            >
              <Delete fontSize="small" /> Remove Item
            </Button>
            <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
              <img
                src={sampleProducts.imageURL}
                alt={sampleProducts.name}
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
                  {sampleProducts.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  style={{ textTransform: "uppercase" }}
                >
                  ${sampleProducts.price} AUD * {itemCounts[index]}
                </Typography>
                <br />
                <Typography style={{ color: "red" }}>
                  ${(sampleProducts.price * itemCounts[index]).toFixed(2)} AUD
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
                  }} // This now matches the expected type
                />
              </Stack>
            </Stack>
          </ImageListItem>
        ))}
        <Divider />
        <Stack spacing={2} sx={{ my: 1, mx: "auto", p: 2 }}>
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
            Subtotal (Including taxes) <br />
            $110.50 AUD
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Check Out
          </Button>
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
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleDrawer(anchor, true)}
          >
            <Badge color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}
