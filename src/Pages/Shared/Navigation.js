// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { NavLink } from "react-router-dom";
// import useAuth from "../../hook/useAuth";

//////////////////////////////////////////////////////////

// Not In Use

/////////////////////////////////////////////////////////

// const Navigation = () => {
//   const { user, logOut } = useAuth();
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar sx={{backgroundColor:"#000"}}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Az Security System
//           </Typography>

//           <NavLink
//             style={{ textDecoration: "none", color: "white" }}
//             to="/home"
//           >
//             {" "}
//             <Button color="inherit">Home</Button>
//           </NavLink>
//           <NavLink
//             style={{ textDecoration: "none", color: "white" }}
//             to="/explore"
//           >
//             {" "}
//             <Button color="inherit">Explore</Button>
//           </NavLink>
//           <NavLink
//             style={{ textDecoration: "none", color: "white" }}
//             to="/products"
//           >
//             {" "}
//             <Button color="inherit">Products</Button>
//           </NavLink>

//           {user.email ? (
//             <Box>
//               <NavLink
//                 style={{ textDecoration: "none", color: "white" }}
//                 to="/dashboard"
//               >
//                 <Button color="inherit">Dashboard</Button>
//               </NavLink>

//               <Button
//                 sx={{ backgroundColor: "#000066", p: 1 }}
//                 onClick={logOut}
//                 color="inherit"
//               >
//                 Logout
//               </Button>
//             </Box>
//           ) : (
//             <NavLink
//               style={{ textDecoration: "none", color: "white" }}
//               to="/login"
//             >
//               <Button sx={{ backgroundColor: "#000066", p: 1 }} color="inherit">
//                 Login
//               </Button>
//             </NavLink>
//           )}
//           <Box sx={{ color: "yellow", pl: 1 }}> {user.displayName}</Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navigation;
