import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Addcourse from "./Components/AddCourse/Addcourse";
import AddReview from "./Components/Addreview/AddReview";
import AllRegistration from "./Components/AllRegistration/AllRegistration";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Notfound from "./Components/Notfound/Notfound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ServiceCart from "./Components/ServiceCart/ServiceCart";
import UserOrder from "./Components/UserOrder/UserOrder";
function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        
          <PrivateRoute path='/serviceCart/:id'>
            <ServiceCart/>
          </PrivateRoute>
          <PrivateRoute path='/userOrder'>
            <UserOrder></UserOrder>
          </PrivateRoute>
          <PrivateRoute path='/allregistration'>
           <AllRegistration></AllRegistration>
          </PrivateRoute>
          <PrivateRoute path='/addcourse'>
          <Addcourse></Addcourse>
          </PrivateRoute>
          <PrivateRoute path='/addReview'>
         <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
         <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>

          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
