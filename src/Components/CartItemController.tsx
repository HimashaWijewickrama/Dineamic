import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { Button, ButtonGroup, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: "100%",
  border: "1px solid #1B2125",
}));

interface CartItemControllerProps {
  itemCount: number;
  setItemCount: (count: number | ((prevCount: number) => number)) => void;
}

export default function CartItemController({
  itemCount,
  setItemCount,
}: CartItemControllerProps) {
  const OnClickAddItem = () => {
    setItemCount((prevCount) => prevCount + 1); // Use functional update
  };

  const OnClickRemoveItem = () => {
    setItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Use functional update
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" spacing={2}>
        <Item>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{ width: "100%" }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "30%" }}
              onClick={OnClickAddItem}
            >
              <AddShoppingCart sx={{ fontSize: 30 }} />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "40%" }}
              disabled
              style={{ color: "#000000", fontWeight: 600, fontSize: "20px" }}
            >
              {itemCount}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "30%" }}
              onClick={OnClickRemoveItem}
            >
              <RemoveShoppingCart sx={{ fontSize: 30 }} />
            </Button>
          </ButtonGroup>
        </Item>
      </Stack>
    </Box>
  );
}
