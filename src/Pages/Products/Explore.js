import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useData from "../../hook/useData";
import Footer from "../Shared/Footer";

const Explore = () => {
  const { data } = useData();
  return (
    <div>
      
        <h2 className="container product-title mt-5 mx-5 py-3"> EXPLORE OUR NEW PRODUCTS</h2>  
      
    <Row xs={1} md={2} lg={4} className="m-5 g-4">
      {data?.map((product, idx) => (
        <Col className="mb-2"  key={product._id}>
          <Card className="explore-card mb-2">
            <Image className="explore-img " variant="top"  src={product.productImg} />
            <Card.Body>
              <Card.Title className="text-primary"> <span className="product-name">{product.name}</span> </Card.Title>
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
    
    <Footer></Footer>
    </div>
  );
};

export default Explore;
