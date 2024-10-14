import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { sampleProductsData } from "../data/sampleProductsData";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Stack, Typography } from "@mui/material";
import CartItemController from "../Components/CartItemController";
import { Padding } from "@mui/icons-material";

type Anchor = "right";

export default function ShoppingCart() {
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
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Stack spacing={2} direction="row" sx={{ my: 1, mx: "auto", p: 2 }}>
          {/* {sampleProductsData.map(sampleProducts => ( */}
          {/* <ImageList sx={{ width: 500, height: 450 }} cols={1} rowHeight={150} style={{marginBottom: "10px"}}> */}
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            Your Cart (2 items)
          </Typography>
        </Stack>
        <Divider />

        {sampleProductsData.map((sampleProducts) => (
          <ImageListItem
            key={sampleProducts.imageURL}
            sx={{ my: 1, mx: "auto", p: 2 }}
          >
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
                sx={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  style={{ textTransform: "uppercase" }}
                >
                  {sampleProducts.name}
                </Typography>
                <br />
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  style={{ textTransform: "uppercase" }}
                >
                  ${sampleProducts.price} AUD
                </Typography>
                <br />
                <CartItemController />
              </Stack>
            </Stack>
          </ImageListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={toggleDrawer(anchor, true)}
          >
            <Badge badgeContent={17} color="error">
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
