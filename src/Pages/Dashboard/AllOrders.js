import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

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
    
    return (
        <div>
            <h1> All Orders Here {allOrders.length} </h1>
        </div>
    );
};

export default AllOrders;