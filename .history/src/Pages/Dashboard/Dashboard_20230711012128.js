import React from "react";
import PropTypes from "prop-types";
import PostAddIcon from '@mui/icons-material/PostAdd';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import StorageIcon from '@mui/icons-material/Storage';
import DashboardHome from "./DashboardHome";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Button from "@mui/material/Button";
import MakeAdmin from "./MakeAdmin";
import useAuth from "../../hook/useAuth";
import AdminRoute from "./AdminRoute";
import AddProducts from "./AddProducts";
import AllProducts from "./AllProducts";
import MyOrders from "./MyOrders";
import Payments from "./Payments";
import AllOrders from "./AllOrders";
import Review from "./Review";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AdminDashboard from "./AdminDashboard";

// import UpdateOrders from "./UpdateOrders";

const drawerWidth = 230;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      {/* <Toolbar /> */}
      {/* <Divider /> */}

      <List
        sx={{
         
          backgroundColor: "#ff9999",
          color: "#660000",
          height: "100vh",
          paddingLeft: "10px",
          pt:5
        }}
      >
        
        {!admin && (
          <Box>
            <Link style={{ color: "#660000", textDecoration: "none" }} to={`${url}`}>
          <Button color="inherit">
            {" "}
            <DashboardIcon sx={{ mr: 1 }} /> Dashboard
          </Button>
        </Link>
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/myOrders`}
            >
              <Button color="inherit">
                {" "}
                <AccountBoxIcon sx={{ mr: 1 }} /> My Orders{" "}
              </Button>
            </Link>

            <br />
            <Link
              style={{
                color: "#660000",
                textDecoration: "none",
              }}
              to={`${url}/payments`}
            >
              <Button color="inherit">
                {" "}
                <PaymentIcon sx={{ mr: 1 }} /> Payment{" "}
              </Button>
            </Link>

            <br />
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/review`}
            >
              <Button color="inherit">
                {" "}
                <RateReviewIcon sx={{ mr: 1 }} /> Reviews{" "}
              </Button>
            </Link>
          </Box>
        )}
        {/* Check Admin Role  */}
        {admin && (
          <Box>
            <Link style={{ color: "#660000", textDecoration: "none" }} to={`${url}/adminDashboard`}>
          <Button color="inherit">
            {" "}
            <DashboardIcon sx={{ mr: 1 }} /> Admin Dashboard
          </Button>
        </Link>
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/allOrders`}
            >
              <Button color="inherit">
                {" "}
                <StorageIcon sx={{ mr: 1 }} /> Manage All Orders
              </Button>
            </Link>
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/allProducts`}
            >
              <Button color="inherit">
                {" "}
                <StorageIcon sx={{ mr: 1 }} /> Manage All Products
              </Button>
            </Link>
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/addProducts`}
            >
              <Button color="inherit">
                {" "}
                <PostAddIcon sx={{ mr: 1 }} /> Add A Products
              </Button>
            </Link>
            <br />
            <Link
              style={{ color: "#660000", textDecoration: "none" }}
              to={`${url}/makeAdmin`}
            >
              <Button color="inherit">
                {" "}
                <EnhancedEncryptionIcon sx={{ mr: 1 }} /> Make Admin
              </Button>
            </Link>
          </Box>
        )}
        <Link
          style={{ color: "#660000", textDecoration: "none", display: "block" }}
          to={`${url}`}
        >
          <Button onClick={logOut} color="inherit">
            <ExitToAppIcon sx={{ mr: 1 }} />
            LogOut
          </Button>
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Box
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Box>
        <Box
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/adminDashboard`}>
            <AdminDashboard></AdminDashboard>
          </Route>
          {/* <Route  path={`${path}/updateOrders/:updateOrder/:id2`}>
            <UpdateOrders></UpdateOrders>
          </Route> */}
          <Route  path={`${path}/payments/:payId`}>
            <Payments></Payments>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/allOrders`}>
            <AllOrders></AllOrders>
          </AdminRoute>
          
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/allProducts`}>
            <AllProducts></AllProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};
Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
