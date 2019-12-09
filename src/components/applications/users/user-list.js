import React, {Component} from "react";
import moment from "moment"
import Breadcrumb from "../../common/breadcrumb.component";

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        // get the users from the localstorage
        let users_str = localStorage.getItem('users');

        // convert the localstorage string to json object
        let users_arr = JSON.parse(users_str) || [];

        // save the users list to the component state object
        this.setState({users: users_arr});
    }

    render() {


        console.log("-------");
        console.log(this.state.users);
        console.log("-------");


        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Users" parent=""/>
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="edit-profile">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        {/*<h4 className="card-title mb-0">Make payments</h4>*/}
                                        <div className="card-options">
                                            <a
                                                href="#"
                                                className="card-options-collapse"
                                                data-toggle="card-collapse"
                                            >
                                                <i className="fe fe-chevron-up"/>
                                            </a>
                                            <a
                                                href="#"
                                                className="card-options-remove"
                                                data-toggle="card-remove"
                                            >
                                                <i className="fe fe-x"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Registration Time</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {this.state.users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.name}</td>
                                                    <td>
                                                        <span className="status-icon bg-success"></span>{" "}
                                                        {user.email}
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-inherit">
                                                            {moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Payments;
