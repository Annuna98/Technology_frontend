import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import {renderIntoDocument} from "react-dom/test-utils";

class CalculateUser extends Component{
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
            BMR: 0,
            value: '',
            valueOld: '',
            changed: false,
        }
        this.calculateUser = this.calculateUser.bind(this);
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

    inputChange = (e) => {
        let next = this.state;
        next.value = e.target.value;
        next.changed = next.value !== next.valueOld;
        this.setState(next);
    }


    calculateUser() {
        var BMR = 0;
        if (this.state.gender === "M"){

            BMR = 88.36 + (13.4*(+this.state.weight)) + (4.8*(+this.state.height)) - (5.7*(+this.state.age));
        } else if (this.state.gender === "F"){
            BMR = 447.6 + (9.2*(+this.state.weight)) + (3.1*(+this.state.height)) - (4.3*(+this.state.age));
        }
     //   alert(BMR);
       // return BMR;
        BMR = Math.trunc(BMR);
       return this.setState((state) => {return {...state, BMR}});
    }
    render() {
        return(
            <div className="menuCalculateForm">
                <h2 className="text-center">Calculate User</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username}/>
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="password" name="password" className="form-control" value={this.state.password} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="fname" name="fname" className="form-control" value={this.state.fname} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="surname" name="surname" className="form-control" value={this.state.surname} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="gender" name="gender" className="form-control" value={this.state.gender} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="weight" name="weight" className="form-control" value={this.state.weight} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="height" name="height" className="form-control" value={this.state.height} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="age" name="age" className="form-control" value={this.state.age} />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="desired_weight" name="desired_weight" className="form-control" value={this.state.desired_weight} />
                    </div>

                    <button type="button"  className="save" onClick={this.calculateUser}><span>✓</span>Calculate</button>
                </form>
                <form>
                    <a className="tef">Ваше суточное потребление калорий:</a>
                    <input disabled type="text"  name="username" className="form-control" value={this.state.BMR} />
                </form>

            </div>

        );
    }
}

export default CalculateUser;