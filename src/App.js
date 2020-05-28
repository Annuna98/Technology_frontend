import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUser from "./component/user/ListUser";
import AddUser from "./component/user/AddUser";
import EditUser from "./component/user/EditUser";
import CalculateUser from "./component/user/CalculateUser"

function App() {
  return (

    <div className="container">


      <Router>
        <div className="col-md-6">

          <Switch>
            <Route path="/" exact component={ListUser} />
            <Route path="/users" component={ListUser} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/edit-user" component={EditUser} />
            <Route path="/calculate-user" component={CalculateUser}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
const style = {
  color: 'red',
  margin: '10px'
}

export default App;
