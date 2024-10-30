import { useParams } from "react-router-dom";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import {
  PageContainer,
  PageContainerToolbar,
} from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import CustomBreadcrumb from "./CustomBreadcrumb";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Badge, Chip, Typography } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
];

const NAVIGATION: Navigation = [
  {
    segment: "orders",
    title: "Orders",
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function PageContainerBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter("/orders");
  const theme = useTheme();
  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      window={demoWindow}
      branding={{
        title: "ACME Inc.",
      }}
    >
      <Paper sx={{ p: 2, width: "100%" }}>
        <CustomBreadcrumb />
        <PageContainer
        //   slots={{
        // toolbar: PageToolbar,
        //   }}
        >
          <Grid container spacing={1}>
            <Grid size={12}>
              <Stack direction="row" spacing={1}>
                <Chip label="New" color="success" />
                <Chip label="High Protein" color="warning" />
                <Chip label="Low Glutein" color="secondary" />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography style={{ fontSize: "36px", fontWeight: "600" }}>
                  Chicken Strew
                </Typography>
              </Stack>
              <Typography>LKR 650 (350g)</Typography>
            </Grid>
            <Grid size={12}>
            <Stack direction="row" spacing={1} >
            <ImageList sx={{ width: 700, height: 550 }} cols={4}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "300",
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Stack>
            <Stack direction="row" spacing={1}>

            </Stack>
            </Grid>
          </Grid>
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
