import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ProductPagination() {
  return (
    <Stack spacing={2} style={{alignItems: "center"}}>
      <Pagination count={3} variant="outlined" size="large"/>
    </Stack>
  );
}
