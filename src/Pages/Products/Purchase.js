import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../hook/useAuth";
import Footer from "../Shared/Footer";

const Purchase = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { productId } = useParams();
  const [products, setProducts] = useState({});

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/explore";

  // /////// Specific items Api//////////////
  useEffect(() => {
    const url = `https://fathomless-shelf-34125.herokuapp.com/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [productId]);
  console.log(products);
  //////////////////////////////////////////////////////////

  const onSubmit = (data) => {
    fetch("https://fathomless-shelf-34125.herokuapp.com/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(!status);
        alert(" Your Order Placed Successfully  ");
        reset();
        history.push(redirect_uri);
      })
      .catch((err) => console.log(err));
  };

  return (
      <div>
          <div className="px-3 mb-5 container">
      <Row className="mt-5 ">
        <Col className="pe-5" xs={12} md={6}>
          <Image className="w-50" src= {products?.productImg} alt="" />
          <h2 className="product-name"> {products?.name}</h2>
          <h4 className="text-danger fw-bold fs-4"> Price: ${products?.price} </h4>
          <p className="text-dark"> {products?.description} </p>
        </Col>

        <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mt-2 price-header">
              <p>
                {" "}
                Starts From : ${" "}
                <span className="fs-4 text-warning fw-bold">
                  {products?.price}
                </span>
              </p>
            </div>
            <h3 className="mt-2 text-center ">
              <span className="productKey">ID: {products?.productId}</span>{" "}
              <span className="">Purchase</span>{" "}
            </h3>

            <Row className="mb-3">
              <Col>
                <h5>Product Name *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  defaultValue={products?.name}
                  {...register("productName")}
                />
              </Col>
              <Col>
                <h5>Product Price *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  defaultValue={products?.price}
                  {...register("productPrice")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Email *</h5>
                <input
                  className="w-100 h-75"
                  defaultValue={user?.email}
                  {...register("email")}
                />
              </Col>
              <Col>
                <h5>Name *</h5>
                <input
                  className="w-100 h-75"
                  defaultValue={user?.displayName}
                  {...register("buyerName")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Product ID *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  defaultValue={products?.productId}
                  {...register("productId")}
                />
              </Col>
              <Col>
                <h5>Status *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  defaultValue={products?.status}
                  {...register("status")}
                />
                </Col>
                <Col>
                <h5>Date *</h5>
                <input
                  type="date"
                  placeholder="Date"
                  className="w-100 h-75"
                  {...register("date")}
                />
              </Col>
              
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Address *</h5>
                <input
                  className="w-100 h-75"
                  placeholder="Address"
                  {...register("Address")}
                />
              </Col>
              <Col>
                <h5>Mobile *</h5>
                <input
                  type="number"
                  placeholder="Mobile"
                  className="w-100 h-75"
                  {...register("mobile")}
                />
              </Col>
            </Row>

            {/* <Row className="mt-4">
              <Col>
                <h5>Your Message</h5>
                <input
                  className="w-100 h-100"
                  defaultValue={products?.src}
                  {...register("message")}
                />
              </Col>
            </Row> */}
            <Row className="mt-4">
              <Col>
                <h5>Your Message</h5>
                <textarea
                  className="w-100 h-100"
                  placeholder="Your Massage"
                  {...register("message")}
                />
              </Col>
            </Row>

            <input className="mt-5 bookingBtn w-100" type="submit" />
          </form>
        </Col>
          </Row>
          
          </div>
          <Footer></Footer>
    </div>
  );
};

export default Purchase;

