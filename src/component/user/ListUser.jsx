import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListUser extends Component{
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }

        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
            .then(res => {
                this.setState({message : 'User deleted successfully.'});
                this.setState({users: this.state.users.filter(user => user.id !== userId)});
            })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    calculateUser(id){
        window.localStorage.setItem("userId", id);
        this.props.history.push('/calculate-user');
    }

    render() {
        return(
            <div>
                <h2 className="text-center">User Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Age</th>
                            <th>Desired weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.weight}</td>
                                        <td>{user.height}</td>
                                        <td>{user.age}</td>
                                        <td>{user.desired_weight}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}>Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editUser(user.id)}>Edit</button>
                                            <button onClick={() => this.calculateUser(user.id)}>Calculate</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>

                </table>

                <button className="btn btn-danger" onClick={() => this.addUser()}> Add User</button>
            </div>
        );
    }

}

export default ListUser;