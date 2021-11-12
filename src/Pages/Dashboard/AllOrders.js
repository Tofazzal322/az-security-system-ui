import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllOrders = () => {
const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders);
    
/////////////////////////////////////////////////////////////// 
  useEffect(() => {
    fetch("http://localhost:5000/orders")
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
    const url = `http://localhost:5000/orders/${id}`;
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
        <div>
        <h1> All Orders Here {allOrders.length} </h1>
        {
          allOrders.map(item => <Row>
            <Col>
              <Link to={`/updateOrders/${item._id}`}> Update </Link>
            </Col>
            <Col><Button onClick={()=> handleDelete(item._id)}> Delete </Button> </Col>
          </Row>)
        }
        </div>
    );
};

export default AllOrders;