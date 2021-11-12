import React from "react";
import { Col, Row } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div className="container ">
      <Row>
        <h2 className="product-title mb-4 "> Admin Dashboard </h2>
        <Col xs={8} sm={10} md={3} lg={3} className="total-card bg-primary">
          <h3>Total Orders </h3>
        </Col>
        <Col xs={8} sm={10} md={3} lg={3} className="total-card bg-warning">
          <h3>Total Products </h3>
        </Col>
        <Col xs={8} sm={10} md={3} lg={3} className="total-card bg-danger">
          <h3> Total Reviews </h3>
        </Col>
        <Col xs={8} sm={10} md={3} lg={2} className="total-card bg-success">
          <h3> Total Users</h3>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
