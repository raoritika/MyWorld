import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import Persons from "./Persons"; 
import AddUser from './AddUser';
import EditUser from './EditUser';
import { Redirect, Route, Switch } from "react-router-dom";
import ViewUser from './ViewUser';
import Signin from './Signin';
import Profile from './Profile';

const App = () => {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/persons" component={Persons} />
      <Route exact path="/users/add" component={AddUser} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route exact path="/users/:id" component={ViewUser} />
      <Route exact path="/profile" component={Profile} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    <br/>
  </>
  );
};

export default App;
