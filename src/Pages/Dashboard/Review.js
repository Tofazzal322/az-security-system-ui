import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";

const Review = () => {
    const { user } = useAuth();
    const [status, setStatus] = useState(false);
  const { register, handleSubmit,reset } = useForm();
//   const { submitData, setSubmitData } = useState();

    const onSubmit = (data) => {
    // setSubmitData(data);
        fetch("http://localhost:5000/reviews", {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Customer Review Submit</h1>
      <input
        className="d-flex mb-2 w-50 center"
        defaultValue={user.displayName || " "}
        {...register("reviewerName")}
      />
      <input
        className="d-flex mb-2 w-50 center"
        defaultValue={user.email}
        {...register("email")}
      />
      <input
        className="d-flex mb-2 w-50 center"
        type="number"
        placeholder="Mobile "
        {...register("mobile", { required: true, maxLength: 20 })}
      />
      <input
        className="d-flex mb-2 w-50 center"
        placeholder="Rating Number Ex. 0-5"
        type="number"
        {...register("rating",{maxLength: 20})}
      />
      <textarea
        className="d-flex mb-2 w-50 "
        placeholder="Review Text"
        {...register("reviewText")}
      />

      <input
        className="d-flex bg-dark text-light border rounded px-3 py-1 "
        type="submit"
      />
    </form>
  );
};

export default Review;
