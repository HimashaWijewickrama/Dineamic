import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import ProductPagination from "../Components/ProductPagination";
import { SingleProduct } from "../Components/SingleProduct";
import { sampleProductsData } from "../data/sampleProductsData";

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
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sampleProductsData.map((product, index) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
            {[0].map((elevation) => (
              <Item key={elevation} elevation={elevation}>
                <Badge color="secondary" badgeContent={index + 1}>
                  <>
                    <SingleProduct
                      prodid={product.id}
                      prodtitle={product.name}
                      prodimageurl={product.imageURL}
                      prodimagealt={product.name}
                      prodprice={product.price}
                      prodingredient={product.ingredient}
                      prodquantity={product.quantity}
                      prodprotein={product.protein}
                      prodfat={product.fat}
                      prodcarb={product.carb}
                    />
                  </>
                </Badge>
              </Item>
            ))}
          </Grid>
        ))}
      </Grid>
      <ProductPagination />
    </>
  );
}
