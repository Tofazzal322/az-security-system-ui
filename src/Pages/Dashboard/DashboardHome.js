import React from 'react';
import { Grid } from "@mui/material";
// import AppointmentData from "./AppointmentData";
import Typography from "@mui/material/Typography";
import MyOrders from './MyOrders';
import Calendar from '../Shared/Calendar';




const DashboardHome = () => {
     const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid sx={{ pe: 8 }} item xs={12} md={8}>
          <Typography sx={{ color: 'blue', fontWeight: 600 }}> PRODUCTS  </Typography>
          {/* <MyOrders></MyOrders> */}
            
          </Grid>
        </Grid>
    );
};

export default DashboardHome;