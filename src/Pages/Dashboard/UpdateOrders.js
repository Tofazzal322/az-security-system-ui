import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hook/useAuth";

const UpdateOrders = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { ordersId } = useParams();
    const [manageOrders, setManageOrders]   = useState({});
    console.log(ordersId, manageOrders);
    
    useEffect(() => {
        const url = `http://localhost:5000/orders/${ordersId}`;
        fetch(url)
            .then(res => res.json())
        .then(data=>setManageOrders(data))
    },[])




  const onSubmit = (data) => {
    const url = `http://localhost:5000/orders/${ordersId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
        if (data.modifiedCount > 0) {
          alert("Successfully Update one document.");
          setManageOrders({});
          reset()
        } else {
          alert("No documents matched the query. Update 0 documents.");
        }
      });
    // console.log("object");
  };

    


  return (
    <div className="px-3 container">
      <h2 className="text-center mt-2 text-danger">This is Booking 2 page  </h2>
      <Row className="mt-5 ">
        <Col className="pe-5" xs={12} md={6}>
          <Image className="w-100" src={manageOrders?.productImg} alt="" />
          <h2>{manageOrders?.name}</h2>
          <h4> {manageOrders?.price} </h4>
          {/* <h5> {manageOrders.duration} </h5> */}
          <p> {manageOrders?.description} </p>
        </Col>

        <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center mt-2 price-header">
              <p>
                {" "}
                Starts From :{" "}
                <span className="fs-4 text-warning fw-bold">
                  {manageOrders?.price}
                </span>
              </p>
            </div>
            <h3 className="mt-2 text-center ">
              <span className="categories">{manageOrders?.name}</span>{" "}
              <span className="">UPDATE BOOKING</span>{" "}
            </h3>

            <Row className="mb-3">
              <Col>
                <h5>Package Name *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  defaultValue={manageOrders?.name}
                  {...register("name")}
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
                  {...register("name")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Status *</h5>
                <input
                  type="text"
                  className="w-100 h-75"
                  // defaultValue={manageOrders.key}
                  placeholder="Pending"
                  {...register("status")}
                />
              </Col>
              <Col>
                <h5>Address *</h5>
                <input
                  className="w-100 h-75"
                  placeholder="Address"
                  {...register("Address")}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <h5>Date *</h5>
                <input
                  type="date"
                  placeholder="Date"
                  className="w-100 h-75"
                  {...register("date")}
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
  );
};

export default UpdateOrders;
