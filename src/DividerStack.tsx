import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

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
export default function DividerStack() {
  return (
    <Div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={6}
      >
        <Typography
          variant="caption"
          gutterBottom
          sx={{ display: "block" }}
          style={{ fontWeight: 600, fontSize: "28px" }}
        >
          $11.50
        </Typography>
        <Typography
          variant="caption"
          gutterBottom
          sx={{ display: "block" }}
          style={{ fontWeight: 600, fontSize: "28px" }}
        >
          360g
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
            38.6g
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
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
            14.9g
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
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
            28.4g
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
            Carbs
          </Typography>
        </Item>
      </Stack>
    </Div>
  );
}
