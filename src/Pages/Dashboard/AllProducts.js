import React, { useEffect, useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
// import SingleAppointment from "./SingleAppointment";

///////////////////// Mui Table Code ///////////////////////////////
const columns = [
  { id: "productName", label: "Product Name", minWidth: 100 },
  { id: "productId", label: "Product ID", minWidth: 100 },
  { id: "productPrice", label: "Product Price", minWidth: 100 },
  {
    id: "serviceName",
    label: "Action",
    minWidth: 80,
    align: "center",
    format: (value) => value,
  },
];
///////////////////// Mui Table Code ///////////////////////////////

//////////////////////////////////////////////////////////////////
const AllProducts = ({ data }) => {
  // const { user,token } = useAuth();
  const [allProducts, setAllProducts] = useState([]);
  // console.log(data);
  ///////////////////// Mui Table Code Start ///////////////////////////////
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  ///////////////////// Mui Table Code End ///////////////////////////////

  ////////////////////////// Search With Date And  Email /////////////////////////////////////////
  // useEffect(() => {
  //   const url = `http://localhost:5000/products?email=${user.email}&date=${date}`;
  //   fetch(url, {
  //     headers: {
  //       'authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, [user.email,token,date]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  /////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container">
      <Row className="table-header">
        <Col>
          <h5 className=" text-danger"> Product Image </h5>
        </Col>
        <Col className="table-data">
          <h5 className=" text-danger"> Product Name </h5>
        </Col>
        <Col className="table-data">
          <h5 className=" text-danger ms-5"> Product Price </h5>
        </Col>
        <Col className="table-data">
          <h5 className=" text-danger"> Product ID </h5>
        </Col>
        <Col>
          <h5 className=" text-danger"> Update & Delete </h5>
        </Col>
      </Row>
      {allProducts.map((item) => (
        <Row className=" all-product-row mt-2 mb-3 py-3">
          <Col md={2}>
            <Image className="w-50" src={item.productImg} />
          </Col>
          <Col md={4}>
            <h5 className="table-data"> {item.name} </h5>
          </Col>
          <Col md={2}>
            <h5> {item.price}</h5>
          </Col>
          <Col md={1}>
            <h5 className="table-data">{item.productId}</h5>
          </Col>
          <Col md={3}>
            <div className="action-btn">
              <Button className="purchase-btn"> Update</Button>
              <Button className="purchase-btn">Delete </Button>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default AllProducts;

