import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUser from "./component/user/ListUser";
import AddUser from "./component/user/AddUser";
import EditUser from "./component/user/EditUser";
import CalculateUser from "./component/user/CalculateUser"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { trackPromise } from 'react-promise-tracker';

function App() {

  return (

    <div>

        <Navbar bg="dark" variant="dark">
          <div className="container">
          <Navbar.Brand href="http://localhost:3000/users">User Calculate</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3000/users">List User</Nav.Link>
            <Nav.Link href="http://localhost:3000/add-user">Add User</Nav.Link>

          </Nav>
          </div>
        </Navbar>

    <div className="container">


      <Router>
        {/*<div className="col-md-6">*/}

          <Switch>
            <Route path="/" exact component={ListUser} />
            <Route path="/users" component={ListUser} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/edit-user" component={EditUser} />
            <Route path="/calculate-user" component={CalculateUser}/>
          </Switch>
        {/*</div>*/}
      </Router>
    </div>
    </div>
  );
}
const style = {
  color: 'red',
  margin: '10px'
}

export default App;
