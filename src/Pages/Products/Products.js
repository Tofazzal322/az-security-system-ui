import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
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
    <Box id="products">
      <Box sx={{ m: 10, mb: 10, mt: 5 }}>
        <Typography className="product-title"
          variant="h4"
          sx={{alignItems: "center", mb: 5 }}
        >
         
          PRODUCTS
        </Typography>
        <Grid
          
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.slice(0, 6).map((item, index) => (
            <Grid  item xs={4} sm={4} md={4} key={index}>
              <Card className="product-card" sx={{ maxWidth: 345, }}>
                <CardActionArea>
                  <Img alt="complex" src={item.productImg} />
                  <CardContent>
                    <Typography sx={{color:"#ff6666"}} gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.slice(0, 150)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    sx={{ textDecoration: "none" }}
                    to={`/purchase/${item._id}`}
                  >
                    <Button className="purchase-btn" variant="outlined"  size="small">
                      Purchase
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <Footer></Footer> */}
    </Box>
  );
};

export default Products;
