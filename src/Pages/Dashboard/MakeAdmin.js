import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import useAuth from "../../hook/useAuth";
import { TextField } from "@mui/material";

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
    fetch("http://localhost:5000/users/admin", {
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
    <div>
      <h1> Make an Admin</h1>
      <form style={{marginTop:"50px"}} onSubmit={handleAdminSubmit}>
        <TextField
        //   sx={withWidth}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          onBlur={handleOnBlur}
        />
        <Button sx={{mt:2, ml:2}} variant="contained" type="submit">
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
