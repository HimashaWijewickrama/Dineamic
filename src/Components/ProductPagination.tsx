import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface ProductPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function ProductPagination({
  count,
  page,
  onChange,
}: ProductPaginationProps) {
  return (
    <Stack spacing={2} style={{ alignItems: "center" }}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        variant="outlined"
        size="large"
      />
    </Stack>
  );
}
