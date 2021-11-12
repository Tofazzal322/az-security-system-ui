import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Explore from "./Pages/Products/Explore";
import Products from "./Pages/Home/Products";
import NotFound from "./Pages/Shared/NotFound";
import Purchase from "./Pages/Products/Purchase";
import MenuBar from "./Pages/Shared/MenuBar";
import '../src/Pages/Style/Style.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navigation> </Navigation> */}
        <MenuBar> </MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/explore">
            <Explore></Explore>
          </Route>
          <Route  path="/products">
            <Products></Products>
          </Route>
          <PrivateRoute  path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
