import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useData from "../../hook/useData";

const Products = () => {
  const { data } = useData();

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "200px",
    maxHeight: "150px",
  });
  return (
    <Box sx={{ m: 10, mb: 10, mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.slice(0,6).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: 380 }}>
              <CardActionArea>
                <Img  alt="complex" src={item.productImg} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description.slice(0, 150)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/purchase/${item._id}`}>
                  <Button size="small" variant="contained" color="primary">
                    Purchase
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
