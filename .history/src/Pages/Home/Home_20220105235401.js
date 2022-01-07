import { Box } from "@mui/system";
import React from "react";
import Products from "../Products/Products";
import Footer from "../Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Products> </Products>
      
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
