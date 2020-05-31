import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddUser extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            fname: '',
            surname: '',
            gender: '',
            weight: '',
            height: '',
            age: '',
            desired_weight: '',
            message: null
        };
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, password: this.state.password, fname: this.state.fname,
            surname: this.state.surname, gender: this.state.gender, weight: this.state.weight,
            height: this.state.height, age: this.state.age, desired_weight: this.state.desired_weight};

        ApiService.addUser(user)
            .then(res => {
                this.setState({message: 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value });
        console.log(this.state);
    }


    render() {
        return(
            <div>
                <div className="menuAddForm">
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="fname" name="fname" className="form-control" value={this.state.fname} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="surname" name="surname" className="form-control" value={this.state.surname} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="gender" name="gender" className="form-control" value={this.state.gender} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="weight" name="weight" className="form-control" value={this.state.weight} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="height" name="height" className="form-control" value={this.state.height} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="desired_weight" name="desired_weight" className="form-control" value={this.state.desired_weight} onChange={this.onChange}/>
                    </div>

                    <button  class="save" onClick={this.saveUser}><span>✓</span>Save</button>
                </form>
                </div>
            </div>
        );
    }

}

export default AddUser;