import {Rating,  } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";

const Reviews = () => {
  const [value, setValue] = useState(4.3);

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
       <div className="news-bg container-fluid">
      <h2 className="text-center  fs-1">
        Happy Client <span className="title-1">Says</span> 
        <br />
          <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </h2>
    
      <Carousel
        className="mt-4 carousel-container "
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(0, 4).map((news) => (
              <Col>
                <Card className="news-card">
                  <Card.Img
                    className="img-size mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {news.name}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(2, 6).map((news) => (
              <Col>
                <Card className="news-card">
                  <Card.Img
                    className="img-size mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {" "}
                      {news.name}{" "}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={2} md={4} className="g-2">
            {latestNews.slice(0, 4).map((news) => (
              <Col>
                <Card className="news-card">
                  <Card.Img
                    className="img-size mx-auto rounded-circle"
                    variant="top"
                    src={news.img}
                  />
                  <Card.Body>
                    <Card.Title className="title-1 text-center">
                      {" "}
                      {news.name}{" "}
                    </Card.Title>
                    <Card.Text className="text-primary text-center">
                      {news.comment.slice(0, 120)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>


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
