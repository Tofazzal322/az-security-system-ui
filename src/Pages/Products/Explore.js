import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hook/useData";

const Explore = () => {
  const { data } = useData();
  return (
    <Row xs={1} md={2} lg={4} className="m-5 g-4">
      {data.map((product, idx) => (
        <Col className="mb-2"  key={product._id}>
          <Card className="explore-card mb-2">
            <Image className="explore-img " variant="top"  src={product.productImg} />
            <Card.Body>
              <Card.Title className="text-primary">{product.name}</Card.Title>
                      <Card.Text>{product.description.slice(0, 120)}</Card.Text>
                      <div className="d-flex justify-between">
                          <Link to={`/purchase/${product._id}`}>
                              <Button className="buyNow-btn"> Buy Now</Button>
                          </Link>
                      <Card.Text className="card-price"> ${product.price}</Card.Text>
                      </div>
                  </Card.Body>
                  
              </Card>
              
        </Col>
      ))}
    </Row>
  );
};

export default Explore;
