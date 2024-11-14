import React from "react";

// material-ui styles
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Container,
} from "@mui/material";

//import icons
import { DeliveryDining, MenuBook } from "@mui/icons-material";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";

//import custom components
import { HomeSectionTitle } from "./HomeSectionTitle";
import OtherServiceCard from "./OtherServiceCard";

//import styles files
import "../Styles/OtherServices.css";

const OtherServices: React.FC = () => {
  return (
    <div className="otherservice-section">
      <HomeSectionTitle homesectiontitle="why choose us ?" />

      <section className="services">
        <Container className="container">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            p={4}
            margin="auto"
          >
            {/* Left section for contact text */}
            <Box flex={2}>
              <List
                sx={{ width: "100%", bgcolor: "transparent", color: "white" }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className="listItemAvatar">
                      <MdOutlineHealthAndSafety className="listItemIcon" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Health & Hygiene"
                    secondary="We strictly adhere to the present health and hygiene"
                    className="listItemText"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className="listItemAvatar">
                      <DeliveryDining className="listItemIcon" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="24 x 7 Delivery Service"
                    secondary="We are delivered your all orders 24 x 7 hours"
                    className="listItemText"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className="listItemAvatar">
                      <SiCodefresh className="listItemIcon" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Freshness Guaranteed"
                    secondary="Freshness and high quality is always guaranteed"
                    className="listItemText"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className="listItemAvatar">
                      <MenuBook className="listItemIcon" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Menu Variety"
                    secondary="We offer a wide range of menus to choose from"
                    className="listItemText"
                  />
                </ListItem>
              </List>
            </Box>
            {/* Right section for the form */}
            <Box flex={1} mr={{ md: 4 }} mb={{ xs: 4, md: 0 }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <OtherServiceCard
                  url="https://images.unsplash.com/photo-1611657365907-1ca5d9799f59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Joe Smith"
                />
                <OtherServiceCard
                  url="https://images.unsplash.com/photo-1593929976216-f746e488aa45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Joe Smith"
                />
                <OtherServiceCard
                  url="https://images.unsplash.com/photo-1558736119-77819403c711?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Joe Smith"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default OtherServices;
