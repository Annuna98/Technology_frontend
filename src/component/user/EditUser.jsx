import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: '',
            fname: '',
            surname: '',
            gender: '',
            weight: '',
            height: '',
            age: '',
            desired_weight: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }
    componentDidMount() {
        this.loadUser();
    }

    loadUser(){
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {
                let user = res.data.result;
                this.setState({
                    id: user.id,
                    username: user.username,
                    fname: user.fname,
                    surname: user.surname,
                    gender: user.gender,
                    weight: user.weight,
                    height: user.height,
                    age: user.age,
                    desired_weight: user.desired_weight,
                })
                });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, password: this.state.password, fname: this.state.fname,
            surname: this.state.surname, gender: this.state.gender, weight: this.state.gender,
            height: this.state.height,age: this.state.age, desired_weight: this.state.desired_weight };
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }
    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label>User name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" placeholder="fname" name="fname" className="form-control" value={this.state.fname} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Surname:</label>
                        <input type="text" placeholder="surname" name="surname" className="form-control" value={this.state.surname} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Gender:</label>
                        <input type="text" placeholder="gender" name="gender" className="form-control" value={this.state.gender} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Weight:</label>
                        <input type="text" placeholder="weight" name="weight" className="form-control" value={this.state.weight} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Height:</label>
                        <input type="text" placeholder="height" name="height" className="form-control" value={this.state.height} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Desired weight:</label>
                        <input type="text" placeholder="desired_weight" name="desired_weight" className="form-control" value={this.state.desired_weight} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditUser;