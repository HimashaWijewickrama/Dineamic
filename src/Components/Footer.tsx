import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Logo from "../assets/logo.png";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      <Link color="text.secondary" href="https://mui.com/"></Link>
      {"© "} &nbsp; 2024 Dineamic . | All rights reserved
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: { xs: 2, sm: 4 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <img
              src={Logo}
              alt="Dineamic."
              loading="lazy"
              style={{ height: 250 }}
            />
            {/* <Typography variant="body2" sx={{ fontWeight: 600, mt: 2 }}>
              Healthy Prepared Meals To Your Door Step
            </Typography> */}
            <div>
              <Copyright />
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 600, mt: 2 }}
          >
            Join the newsletter |
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
            Subscribe for weekly updates. No spams ever!
          </Typography>
          <InputLabel htmlFor="email-newsletter">Email</InputLabel>
          <Stack direction="row" spacing={1} useFlexGap>
            <TextField
              id="email-newsletter"
              hiddenLabel
              size="small"
              variant="outlined"
              fullWidth
              aria-label="Enter your email address"
              placeholder="Your email address"
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                },
              }}
              sx={{ width: "250px" }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ flexShrink: 0 }}
            >
              Subscribe
            </Button>
          </Stack>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: 600, mt: 2 }}
          >
            Follow us on |
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://www.facebook.com"
              aria-label="Facebook"
              sx={{ alignSelf: "center" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.instagram.com"
              aria-label="Instagram"
              sx={{ alignSelf: "center" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.whatsapp.com"
              aria-label="Whatsapp"
              sx={{ alignSelf: "center" }}
            >
              <WhatsApp />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
