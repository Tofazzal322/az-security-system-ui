import { Rating } from "@mui/material";
import { startOfYear } from "date-fns/esm";
// import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { addReviews } from "../../Features/reviewsSlice";

const Reviews = () => {
  // const latestNews = useSelector((addReviews)=>{addReviews.addReviews} );
  // console.log(latestNews);
  // const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(4.3);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://az-security.onrender.com/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // const [latestNews, setLatestNews] = useState([]);

  // useEffect(() => {
  //   fetch("https://pacific-meadow-17159.herokuapp.com/happyreview")
  //     .then((res) => res.json())
  //     .then((data) => dispatch("addReviews"(data)));
  // }, []);

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

      {/* <Carousel
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
      </Carousel> */}
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
