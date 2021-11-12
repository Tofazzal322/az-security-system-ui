import React from 'react';
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Calendar from '../Shared/Calendar';
import { Col, Row } from 'react-bootstrap';




const DashboardHome = () => {
     const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid sx={{ pe: 8 }} item xs={12} md={8}>
          <Typography sx={{ color: 'blue', fontWeight: 600 }}>  </Typography>
          <Row>
        <h2 className="product-title mb-4 "> User Dashboard </h2>
        <Col xs={12} sm={10} md={3} lg={3} className="total-card bg-primary">
          <h3>Total Orders </h3>
        </Col>
        <Col xs={12} sm={10} md={3} lg={3} className="total-card bg-warning">
          <h3>Total Received </h3>
        </Col>
        <Col xs={12} sm={10} md={3} lg={3} className="total-card bg-danger">
          <h3> My Reviews </h3>
        </Col>
        <Col xs={12} sm={10} md={3} lg={3} className="total-card bg-success">
          <h3> Recent Orders </h3>
        </Col>
      </Row>
            
          </Grid>
        </Grid>
    );
};

export default DashboardHome;