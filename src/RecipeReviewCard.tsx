import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicRating from "./BasicRating";
import TypographyTheme from "./TypographyTheme";
import DividerStack from "./DividerStack";
import { Button, ButtonGroup, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: "#fff",
  ...theme.typography.body2,
  width: "100%",
  border: "1px solid #1B2125",
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   ...theme.applyStyles("dark", {
  //     backgroundColor: "#1A2027",
  //   }),
}));

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid #1B2125" }}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites" color="secondary">
            <FavoriteIcon />
          </IconButton>
        }
        title={
          <Typography
            variant="overline"
            gutterBottom
            sx={{ display: "block" }}
            style={{ fontSize: "24px" }}
          >
            Cheese Lasagna
          </Typography>
        }
        subheader="Quantity Of Per Serving is 350g"
      />
      <CardMedia
        component="img"
        height="250"
        // image="https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551500758-d88f876073d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1550586554-a5a846e56593?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1575980967953-d812d957dca5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // image="https://images.unsplash.com/photo-1557665223-671ea12d4d5d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        image="https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cheese and sasauge lasagna"
      />
      <BasicRating />
      <DividerStack />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <TypographyTheme />
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
        >
          <IconButton color="secondary" aria-label="add an alarm">
            <FavoriteBorderIcon />{" "}
          </IconButton>
          <Button variant="outlined" color="secondary">
            <AddShoppingCart /> Add To Cart
          </Button>
        </Stack> */}

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
                  >
                    <AddShoppingCart /> Add
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ width: "40%" }}
                    disabled
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    10
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ width: "30%" }}
                  >
                    <RemoveShoppingCart /> Remove
                  </Button>
                </ButtonGroup>
              </Item>
            </Stack>
          ))}
        </Box>
        {/* <Button variant="outlined" startIcon={<DeleteIcon />} > */}
        {/* </Button>
        <h6>1</h6>
        <Button variant="outlined" startIcon={<DeleteIcon />} >
        </Button> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    </Card>
  );
}
