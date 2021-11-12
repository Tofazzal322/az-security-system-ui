import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
// import useData from "../../hook/useData";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import useAuth from "../../hook/useAuth";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState();
  // const { data } = useData();
  
  // const [order, setOrder] = useState();
  console.log(myOrders, user.email);

  useEffect(() => {
    // const url = `http://localhost:5000/products?email=${user.email}&date=${date}`;
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  // /////////////Delete orders  option////////////////

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deleteCount !== 1) {
          alert(" Are you sure want to delete the items?");
          const remaining = myOrders.filter((orders) => orders._id !== id);
          setMyOrders(remaining);
          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
      });
  };
  /////////////////////////////////////////////////////

  return (
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
      {myOrders?.map((item) => (
        <Box>
          <Grid
            sx={{ mt: 2, p: 2, border: "1px solid gray" }}
            container
            spacing={2}
          >
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                {/* {data.filter(item === item.productId).map((item) => (
                  <Img alt="complex" src={item.productImg} />
                ))} */}
                <Img alt="complex" src={item.productImg} />
                
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    sx={{ color: "#000066", fontWeight: 700 }}
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ color: "dark", fontWeight: 700 }}
                    variant="body1"
                    gutterBottom
                  >
                    <span className="text-danger">Product Name: </span> {item?.productName}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="body2"
                    color="#000066"
                  >
                    Product ID: {item.productId}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="body2"
                    color="red"
                  >
                   Status:  {item?.status}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="body2"
                    color="#000066"
                  >
                    Buyer Name: {item.buyerName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <Button variant="contained"> Confirm order</Button>
                    <Button
                      onClick={() => handleDelete(item._id)}
                      
                      sx={{ m: 1 }}
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ color: "red", fontWeight: 700 }}
                  variant="subtitle1"
                  component="div"
                >
                  ${item.productPrice}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Paper>
  );
};
export default MyOrders;
