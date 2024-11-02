import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import BenefitList from "./BenefitList";
import { useNavigate } from "react-router-dom";

const smoothieImage = {
  width: "80%",
  height: "500px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const avatarImages = [
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1577194509876-4bb24787a641?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1660808600062-defd9cc275d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = React.useState(
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const handleAvatarClick = (image: string) => {
    setSelectedImage(image);
  };

  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={selectedImage}
              style={smoothieImage}
              alt="Ginger + Greens Smoothie"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
            {avatarImages.map((image, index) => (
              <Avatar
                key={index}
                src={image}
                variant="rounded"
                sx={{
                  width: 100,
                  height: 80,
                  mr: 2,
                  cursor: "pointer",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                onClick={() => handleAvatarClick(image)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            style={{ fontWeight: "600" }}
          >
            CHICKEN STEW
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ margin: "10px 0" }}
          >
            550 LKR | 350G
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ margin: "10px 0" }}
          >
            29 reviews
          </Typography>
          <Stack direction="row" spacing={1} sx={{ margin: "10px 0" }}>
            <Chip label="Vegan" color="warning" />
            <Chip label="Gluten-free" color="warning" />
            <Chip label="Dairy-free" color="warning" />
          </Stack>
          <Typography variant="h6" component="h3" gutterBottom>
            Ingredients
          </Typography>
          <Typography variant="body1" component="p" sx={{ margin: "10px 0" }}>
            Chat Potato (50%) (Potatoes, Olive Oil, Salt), Grass-Fed Beef (27%),
            Salsa (23%) (Red Capsicum, Red Onion, Lemon Juice [Preservative
            (223)], Olive Oil, Parsley, Red Wine Vinegar, Crushed Garlic, Salt,
            Crushed Chilli, Spices, Pepper), Paprika.
            <br />
            May Contain: Gluten, Wheat, Fish, Crustacean, Egg, Mollusc, Milk,
            Peanut, Soy, Tree Nuts, Sulphites, Sesame.
          </Typography>
          <Typography variant="h6" component="h3">
            Product Claims
          </Typography>
          <Typography variant="body1" component="p">
            <BenefitList />
          </Typography>
          <Divider sx={{ margin: "20px 0" }} />
          <Button
            variant="contained"
            sx={{ margin: "20px 0", justifyContent: "center" }}
            onClick={() => navigate("/home")}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
