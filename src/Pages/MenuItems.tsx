import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { SingleProduct } from "../Components/SingleProduct";

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

export default function MenuItems() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            {[0].map((elevation) => (
              <Item key={elevation} elevation={elevation}>
                <Badge color="secondary" badgeContent={index + 1}>
                  <SingleProduct
                    prodtitle="Cheese Lasagna"
                    prodimageurl="https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    prodimagealt="cheese lasagna"
                  />
                </Badge>
              </Item>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
