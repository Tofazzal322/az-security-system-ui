import { Box } from "@mui/system";
import React from "react";
import Products from "../Products/Products";
import Footer from "../Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import RecentProjects from "./RecentProjects";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Products> </Products>
      <RecentProjects></RecentProjects>
      <Reviews></Reviews>
      <S
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
