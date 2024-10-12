import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import RecipeReviewCard from "../RecipeReviewCard";

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
                <Badge color="secondary" badgeContent={index+1}>
                  <RecipeReviewCard />
                </Badge>
              </Item>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
