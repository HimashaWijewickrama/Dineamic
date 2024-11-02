import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";

import BenefitList from "./BenefitList";
import { useProductContext } from "./ProductProvider";

const productImage = {
  width: "80%",
  height: "500px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { products } = useProductContext();

  // Initialize state for selected image and avatar images
  const [selectedImage, setSelectedImage] = useState("");
  const [avatarImages, setAvatarImages] = useState<string[]>([]);

  // Find the product based on the ID
  const product = products.find((p) => p.id === Number(id));

  // Handle the case where the product is not found
  useEffect(() => {
    if (product) {
      const images = [
        product.imageURL,
        product.sampleURL1,
        product.sampleURL2,
      ].filter(Boolean); // Filter out any null URLs

      setAvatarImages(images); // Update the avatarImages state

      // Set the initial selected image to the first image
      if (images.length > 0) {
        setSelectedImage(images[0]);
      }
    }
  }, [product]); // Dependency on product ensures this runs when the product changes

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const handleAvatarClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src={selectedImage} style={productImage} alt={product.name} />
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
            variant="overline"
            gutterBottom
            sx={{ display: "block" }}
            style={{ fontSize: "28px", marginBottom: 0 }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            sx={{ margin: "10px 0", display: "block" }}
            style={{ fontWeight: 600, fontSize: "20px" }}
          >
            {product.price} LKR | {product.quantity}
          </Typography>
          <Typography
            variant="overline"
            style={{ fontSize: "10px", color: "red" }}
            // sx={{ margin: "10px 0" }}
          >
            *Quantity Of Per Serving is {product.quantity}
          </Typography>
          <br />

          <Rating name="read-only" value={4} readOnly />
          <Typography
            variant="subtitle2"
            component="p"
            sx={{ margin: "10px 0" }}
          >
            29 reviews
          </Typography>
          <Stack direction="row" spacing={1} sx={{ margin: "15px 0" }}>
            <Chip label="Vegan" color="warning" />
            <Chip label="Gluten-free" color="warning" />
            <Chip label="Dairy-free" color="warning" />
          </Stack>

          <Typography
            variant="caption"
            sx={{ margin: "10px 0", display: "block" }}
            style={{
              fontWeight: 600,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            Ingredients
          </Typography>
          <Typography variant="body1" component="p" sx={{ margin: "10px 0" }}>
            Chat Potato (50%) (Potatoes, Olive Oil, Salt), Grass-Fed Beef (27%),
            Salsa (23%)...
            <br />
            May Contain: Gluten, Wheat, Fish, Crustacean, Egg, Mollusc, Milk,
            Peanut, Soy, Tree Nuts, Sulphites, Sesame.
          </Typography>
          <Typography
            variant="caption"
            sx={{ display: "block" }}
            style={{
              fontWeight: 600,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
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
