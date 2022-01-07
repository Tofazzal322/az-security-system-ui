import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = React.useState(2);

  useEffect(() => {
    fetch("https://fathomless-shelf-34125.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
      <div className="news-bg container-fluid">
      <h2 className="text-center  fs-1">
        Happy Client <span className="title-1">Says</span>
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
  );
};

export default Reviews;
