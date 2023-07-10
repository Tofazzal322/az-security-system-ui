import React, { useState } from "react";
import { Alert } from "@mui/material";
import useAuth from "../../hook/useAuth";
import Button from "@restart/ui/esm/Button";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdminSuccess(true);
        }
        console.log(data, data.modifiedCount);
      });
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1 className="product-title fs-3 w-50"> Make an Admin</h1>
      <form style={{ marginTop: "50px" }} onSubmit={handleAdminSubmit}>
        <input
          className="input-field w-50"
          //   sx={withWidth}
          id="standard-basic"
          label="Email"
          placeholder="Email"
          type="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <Button
          className="make-admin-btn mt-3 w-50"
          sx={{ mt: 2, ml: 2 }}
          variant="outline"
          type="submit"
        >
          {" "}
          Make Admin{" "}
        </Button>
        {adminSuccess && (
          <Alert severity="success">Made Admin successfully!</Alert>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;
