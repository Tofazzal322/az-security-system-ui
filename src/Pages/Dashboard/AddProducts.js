import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [imageAdd, setImageAdd] = useState(null);

  const onSubmit = (data) => {
    if (!imageAdd) {
      return alert(" Please Add an image");
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("model", data.model);
    formData.append("status", data.status);
    formData.append("productId", data.productId);
    formData.append("date", data.date);
    formData.append("description", data.description);
    formData.append("imageAdd", imageAdd);

    fetch("https://fathomless-shelf-34125.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          console.log("Successfully added Products");
        }
        
        setStatus(!status);
        alert("Successfully Added A Product into database....  ");
        reset();
      })
      .catch((err) => console.log(err));
  };

  // const onSubmit = (data) => {

  //   fetch("http://localhost:5000/products", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),

  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log("Success", result);
  //       setStatus(!status);
  //       alert("Successfully Added A Product into database....  ");
  //       reset();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="px-3 mb-5 ">
      <h3 className="mb-3 product-title w-50 ms-5">
        New Products Add to Database
      </h3>
      <Row className="align-center container">
        <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col>
                <h5>Product Name *</h5>
                <input
                  required
                  type="text"
                  className="w-100 h-75"
                  placeholder="Products Name"
                  {...register("name")}
                />
              </Col>
              <Col>
                <h5>Product Price *</h5>
                <input
                  required
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
                  required
                  className="w-100 h-75"
                  placeholder="Product Model"
                  {...register("model")}
                />
              </Col>
              <Col>
                <h5>Default Status *</h5>
                <input
                  required
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
                  required
                  type="text"
                  className="w-100 h-75"
                  placeholder="Product Id"
                  {...register("productId")}
                />
              </Col>
              <Col>
                <h5>Date *</h5>
                <input
                  required
                  type="date"
                  placeholder="Date"
                  className="w-100 h-75"
                  {...register("date")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Product Img *</h5>
                <input
                  accept="image/*"
                  required
                  className="w-100 h-75"
                  type="file"
                  onChange={(e) => setImageAdd(e.target.files[0])}
                  // placeholder="Product Img URL"
                  // {...register("productImg")}
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
