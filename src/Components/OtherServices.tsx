import React from "react";

// material-ui styles
import { Container } from "@mui/material";

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
          <OtherServiceCard
            url="https://images.unsplash.com/photo-1611657365907-1ca5d9799f59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Joe Smith"
          />
        </Container>
      </section>
    </div>
  );
};

export default OtherServices;
