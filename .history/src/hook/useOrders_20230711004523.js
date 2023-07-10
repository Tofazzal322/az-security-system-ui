import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const useOrders = () => {
  const [order, setOrder] = useState([]);
  
  // console.log(order);

///////////////////////////////////////////////////////////////
    useEffect(() => {
    fetch("https://az-security.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>;
          </Spinner>;
        } else {
          setOrder(data);
        }
      });
  }, []);

/////////////////////////////////////////////////////////////////
  

 

  return {
    order,
    setOrder,
    
  };
};

export default useOrders;
