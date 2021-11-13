import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders);

  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("https://fathomless-shelf-34125.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>;
          </Spinner>;
        } else {
          setAllOrders(data);
        }
      });
  }, []);
  ///////////////////////////////////////////////////////////////////////

  // /////////////Delete orders  option////////////////

  const handleDelete = (id) => {
    const url = `https://fathomless-shelf-34125.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deleteCount !== 1) {
          alert(" Are you sure want to delete the items?");
          const remaining = allOrders.filter((orders) => orders._id !== id);
          setAllOrders(remaining);
          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };
  /////////////////////////////////////////////////////

  return (
    <>
      <div className="container">
        <Row className="table-header">
          <Col md={3}>
            <h5 className=" text-danger"> User Email </h5>
          </Col>
          <Col md={3} className="table-data">
            <h5 className=" text-danger">User Name </h5>
          </Col>
          <Col md={1}>
            <h5 className=" text-danger "> Product Price </h5>
          </Col>
          <Col md={1} className="table-data">
            <h5 className=" text-danger"> Product ID </h5>
          </Col>
          <Col md={1} className="table-data">
            <h5 className=" ms-5 text-danger"> Status </h5>
          </Col>
          <Col>
            <h5 md={3} className=" ms-5 text-danger">
              {" "}
              Update & Delete{" "}
            </h5>
          </Col>
        </Row>
        {allOrders?.map((item,index) => (
          <Row key={item._id} className=" all-product-row mt-2 mb-3 py-3">
            <Col md={3}>
              <h6 className="w-50"> {item.email} </h6>
            </Col>
            <Col md={3}>
              <h5 className="table-data"> {item.buyerName} </h5>
            </Col>
            <Col md={1}>
              <h5 className="text-danger"> ${item.productPrice}</h5>
            </Col>
            <Col md={1}>
              <h5 className="table-data">{item.productId}</h5>
            </Col>
            <Col md={1}>
              <h5 className="ms-5 text-danger">{item.status}</h5>
            </Col>
            <Col md={3}>
              <div className="action-btn">
                <Link to={`/UpdateOrders/${item._id}`}>
                  <Button className="purchase-btn"> Update </Button>{" "}
                </Link>

                <Button
                  onClick={() => handleDelete(item._id)}
                  className="purchase-btn"
                >
                  Cancel{" "}
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
};

export default AllOrders;