import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {register} from "../../actions/user.actions";

var images = require.context("../../assets/images/", true);

class Samplepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            phone: "",
            dob: "",
            style: {}
        };
        this.handleSignupButtonClick = this.handleSignupButtonClick.bind(this);
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({style: {display: "none"}});
            }.bind(this),
            1000
        );
    }

    handleSignupButtonClick(e) {
        // prevent default form submission
        e.preventDefault();

        // get form data from react state object
        let {name, email, password} = this.state;

        // print the values
        console.log(name, email, password);

        //make user signup request
        this.props.register(name, email, password);
    }

    render() {
        if (this.props.auth.isAuthenticated)
            return <Redirect to="/user-list"/>;

        let style = this.state.style;
        const background = require("../../assets/images/auth-layer.png");

        return (
            <div>
                {/* Loader starts */}
                <div className="loader-wrapper" style={style}>
                    <div className="loader bg-white">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <h4>
                            Have a great day at work today <span>&#x263A;</span>
                        </h4>
                    </div>
                </div>
                {/* Loader ends */}

                {/*page-wrapper Start*/}
                <div className="page-wrapper">
                    <div className="container-fluid">
                        {/*sign up page start*/}
                        <div className="authentication-main">
                            <div className="row">

                                <div className="col-md-12 p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box" style={{margin: "auto"}}>
                                            <h3 className="text-center">NEW USER</h3>
                                            <h6 className="text-center">
                                                Enter your Username and Password For Login or Signup
                                            </h6>
                                            <div className="card mt-4 p-4">
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control"
                                                            placeholder="Enter Name"
                                                            onChange={event =>
                                                                this.setState({name: event.target.value})
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <label className="col-form-label">Email</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="form-control"
                                                            placeholder="Enter email"
                                                            onChange={event =>
                                                                this.setState({email: event.target.value})
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input
                                                            type="password"
                                                            required
                                                            className="form-control"
                                                            placeholder="**********"
                                                            onChange={event =>
                                                                this.setState({password: event.target.value})
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-row">
                                                        <div className="col-sm-3">
                                                            <button
                                                                className="btn btn-secondary"
                                                                onClick={this.handleSignupButtonClick}
                                                            >
                                                                Sign Up
                                                            </button>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="text-left mt-2 m-l-20">
                                                                Are you already user?&nbsp;&nbsp;
                                                                <a
                                                                    href="/user/login"
                                                                    className="btn-link text-capitalize"
                                                                >
                                                                    Login
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*sign up page Ends*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Samplepage.propTypes = {
    register: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {register})(Samplepage);
