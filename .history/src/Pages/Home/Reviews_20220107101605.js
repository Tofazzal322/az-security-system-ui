import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Card, Carousel, Col, Row } from "react-bootstrap";

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(4.3);

  // useEffect(() => {
  //   fetch("https://fathomless-shelf-34125.herokuapp.com/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [latestNews, setLatestNews] = useState([]);
  console.log(latestNews);

  useEffect(() => {
    fetch("https://pacific-meadow-17159.herokuapp.com/happyreview")
      .then((res) => res.json())
      .then((data) => setLatestNews(data));
  }, []);

  return (
      


    //   <Box sx={{ border: "1px solid blue ", mx:1, my:10, p:2}}>
    //   <Grid container sx={{ justifyContent: "center" }}>
    //     <Grid sx={{ textAlign: "center" }}>
    //       <Typography sx={{ color: "#0000ff" }} variant="h4">
    //         Trusted by our customers
    //       </Typography>
    //       <Typography sx={{ color: "#ff1a1a" }}>
    //        ({reviews.length})  customer reviews on TestFreaks
    //       </Typography>
    //       <Typography sx={{ color: "#0000ff" }}>
    //         Very good
    //         <Box
    //           sx={{
    //             "& > legend": { mt: 2 },
    //           }}
    //         >
    //           <Rating
    //             name="simple-controlled"
    //             value={value}
    //             onChange={(event, newValue) => {
    //               setValue(newValue);
    //             }}
    //           />
    //         </Box>
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={2} sx={{ display: "flex" }}>
    //     {reviews.map((item) => (
    //       <Grid item xs={12} md={4} lg={3} key={item._id}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             "& > :not(style)": {
    //               m: 1,
    //               width: 300,
    //               height: 200,
    //             },
    //           }}
    //         >
    //           <Paper sx={{ p: 2 }} variant="outlined" square>
    //             <Typography variant="h6"> {item.reviewerName} </Typography>
    //             <Typography> {item.reviewText.slice(0,100)} </Typography>
    //             <Typography sx={{color:"red", fontWeight:"500"}}>Rating: {item.rating} </Typography>
    //             <Rating
    //               name="simple-controlled"
    //               value={item.rating}
    //               onChange={(event, newValue) => {
    //                 setValue(newValue);
    //               }}
    //             />
    //           </Paper>
    //         </Box>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>

   
  );
};

export default Reviews;
