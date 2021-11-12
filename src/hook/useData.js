import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const useData = () => {
  const [data, setData] = useState([]);
  
  // console.log(data);

///////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>;
          </Spinner>;
        } else {
          setData(data);
        }
      });
  }, []);
/////////////////////////////////////////////////////////////////
  

 

  return {
    data,
    setData,
    
  };
};

export default useData;