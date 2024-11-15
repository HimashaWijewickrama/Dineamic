import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import React, { useState } from "react";
import { PageTitleText } from "../Components/PageTitleText";
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sampleProductsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <div style={{paddingTop: "80px"}}>
      <PageTitleText pagetitletext={"munu list"}/>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {currentProducts.map((product, index) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3 }}>
            {[0].map((elevation) => (
              <Item key={elevation} elevation={elevation}>
                <Badge color="secondary" badgeContent={product.id}>
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
      <ProductPagination
        count={Math.ceil(sampleProductsData.length / productsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}
