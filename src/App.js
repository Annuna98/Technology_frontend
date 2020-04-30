import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUser from "./component/user/ListUser";
import AddUser from "./component/user/AddUser";
import EditUser from "./component/user/EditUser";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <h1 className="text-center" style={style}>React User Application</h1>
          <Switch>
            <Route path="/" exact component={ListUser} />
            <Route path="/users" component={ListUser} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/edit-user" component={EditUser} />
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
