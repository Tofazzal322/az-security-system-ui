import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://fathomless-shelf-34125.herokuapp.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(!status);
        alert("Successfully Added A Product into database....  ");
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-3 mb-5 ">
      <h3 className="mb-3 product-title w-50 ms-5">
        {" "}
        New Products Add to Database{" "}
      </h3>
      <Row className="align-center container">
        <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col>
                <h5>Product Name *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  placeholder="Products Name"
                  {...register("name")}
                />
              </Col>
              <Col>
                <h5>Product Price *</h5>
                <input
                  type="number"
                  className="w-100 h-75"
                  placeholder="Products Price"
                  {...register("price")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Product Model *</h5>
                <input
                  className="w-100 h-75"
                  placeholder="Product Model"
                  {...register("model")}
                />
              </Col>
              <Col>
                <h5>Default Status *</h5>
                <input
                  className="w-100 h-75"
                  defaultValue="Pending"
                  {...register("status")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Product ID *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  placeholder="Product Id"
                  {...register("productId")}
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
                <h5>Product Img URL *</h5>
                <input
                  className="w-100 h-75"
                  placeholder="Product Img URL"
                  {...register("productImg")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Description</h5>
                <textarea
                  className="w-100 h-100"
                  placeholder="Products Description"
                  {...register("description")}
                />
              </Col>
            </Row>

            <input className="mt-5 bookingBtn w-100" type="submit" />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default AddProducts;
