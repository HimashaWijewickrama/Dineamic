import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Contexts/CartProvider";

export default function Info() {
  const location = useLocation();
  const { cartItems } = useCart();
  const subtotal = location.state?.subtotal || 0; // Default to 0 if undefined
  const itemCounts = location.state?.itemCounts || []; // Default to an empty array if undefined

  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Sub Total (Including Taxes)
      </Typography>
      <Typography variant="h4" gutterBottom>
        {subtotal.toFixed(2)} LKR
        <br />
      </Typography>
      <List disablePadding>
        {cartItems.map((product, index) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={`${product.price} LKR * ${itemCounts[index] || 0}`} // Use itemCounts for quantity with default
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {(product.price * (itemCounts[index] || 0)).toFixed(2)} LKR 
              {/* // Calculate total price with default */}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}