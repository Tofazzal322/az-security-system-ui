import { Button, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import aboutImg from "../../images/DUBAI FZE.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "300px",
  WebkitBorderRadius: "5px",
});

const About = () => {
  return (
    <Box sx={{ m: 3, p: 3 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
        sx={{ display: "flex" }}
      >
        <Grid item xs={4} sm={8} md={6} lg={8}>
          <Typography sx={{ color: "#b3b300", fontWeight: 700 }} variant="h4">
            ABOUT US
          </Typography>
          <Typography sx={{ color: " #4d4d00", py: 1 }} variant="body1">
            Az Security is a world leading IoT solution provider with video as
            its core competency. Featuring an extensive and highly skilled R&D
            workforce, Az Security manufactures a full suite of comprehensive
            products and solutions for a broad range of vertical markets. In
            addition to the security industry, Az Security extends its reach to
            smart home tech, industrial automation, and automotive electronics
            industries to achieve its long-term vision. Az Security products
            also provide powerful business intelligence for end users, which can
            enable more efficient operations and greater commercial success.
          </Typography>
          <Button sx={{ backgroundColor: "#000" }} variant="contained">
            {" "}
            Read More
          </Button>
        </Grid>
        <Grid item xs={4} sm={8} md={6} lg={8}>
          <Img alt="complex" src={aboutImg} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
