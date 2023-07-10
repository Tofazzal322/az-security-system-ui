import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  //   const { submitData, setSubmitData } = useState();

  const onSubmit = (data) => {
    // setSubmitData(data);
    fetch("https://fathomless-shelf-34125.herokuapp.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(!status);
        alert(" Successfully added your Reviews ");
        reset();
        // history.push(redirect_uri);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row>
      <Col xs={12} md={12} lg={6}>
        <form className="review-form " onSubmit={handleSubmit(onSubmit)}>
          <h1 className="product-title fs-3 "> Customer Review Submit</h1>
          <input
            className="input-field d-flex mb-2 w-100 center"
            defaultValue={user.displayName || " "}
            {...register("reviewerName")}
          />
          <input
            className="input-field d-flex mb-2 w-100 center"
            defaultValue={user.email}
            {...register("email")}
          />
          <input
            className="input-field d-flex mb-2 w-100 center"
            type="number"
            placeholder="Mobile "
            {...register("mobile", { required: true, maxLength: 20 })}
          />
          <input
            className="input-field d-flex mb-2 w-100 center"
            placeholder="Rating Number Ex. 0-5"
            type="number"
            {...register("rating", { maxLength: 20 })}
          />
          <textarea
            className="input-field d-flex mb-2 w-100 "
            placeholder="Review Text"
            {...register("reviewText")}
          />

          <input className="purchase-btn d-flex   py-1 " type="submit" />
        </form>
      </Col>
      <Col xs={12} md={12} lg={6}>
        {/* <img src="https://st.depositphotos.com/1003593/3852/i/600/depositphotos_38523273-stock-photo-review-blue-marker.jpg"></img> */}
      </Col>
    </Row>
  );
};

export default Review;
