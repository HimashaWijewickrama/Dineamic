import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const products = [
  {
    name: "SUSHI",
    desc: "795 LKR * 1",
    price: "795.00 LKR",
  },
  {
    name: "CHICKEN STEW",
    desc: "550 LKR * 2",
    price: "1100 LKR",
  },
];

export default function Info() {

  const location = useLocation();
  const subtotal = location.state?.subtotal;

  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        Sub Total (Including Taxes)
      </Typography>
      <Typography variant="h4" gutterBottom>
        {subtotal?.toFixed(2)} LKR
        <br />
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
