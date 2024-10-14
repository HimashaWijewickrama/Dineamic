import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { Button, ButtonGroup, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: "100%",
  border: "1px solid #1B2125",
}));

export default function CartItemController() {
  const [itemCount, setItemCount] = useState(0);

  const OnClickAddItem = () => {
    setItemCount(itemCount + 1);
  };
  const OnClickRemoveItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    } else {
      setItemCount(itemCount);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      {[0].map((elevation) => (
        <Stack direction="row" spacing={2}>
          <Item key={elevation} elevation={elevation}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
              sx={{ width: "100%" }}
            >
              {" "}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "30%" }}
                onClick={OnClickAddItem}
              >
                <AddShoppingCart sx={{ fontSize: 30 }} />
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "40%" }}
                disabled
                style={{ color: "#000000", fontWeight: 600, fontSize: "20px" }}
              >
                {itemCount}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ width: "30%" }}
                onClick={OnClickRemoveItem}
              >
                <RemoveShoppingCart sx={{ fontSize: 30 }} />
              </Button>
            </ButtonGroup>
          </Item>
        </Stack>
      ))}
    </Box>
  );
}
