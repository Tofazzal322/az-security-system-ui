import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Products from "../Products/Products";
import Footer from "../Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import RecentProjects from "./RecentProjects";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";

const Home = () => {

  useEffect(() => {
    fetch("https://pacific-meadow-17159.herokuapp.com/happyreview")
      .then((res) => res.json())
      .then((data) => dispatch(reviews(data)));
  }, []);
  return (
    <Box>
      <Banner></Banner>
      <Products> </Products>
      <RecentProjects></RecentProjects>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <About></About>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
