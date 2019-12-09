import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Form} from "reactstrap";
import {login} from "../../actions/user.actions";

var images = require.context("../../assets/images/", true);

class Samplepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {}
        };

        this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.setState({style: {display: "none"}});
            }.bind(this),
            1000
        );
    }

    handleLoginButtonClick(e) {
        // prevent default form submission
        e.preventDefault();

        // get email and password from react state
        let {email, password} = this.state;
        console.log(email, password);
        this.props.login(email, password);
        // post to user login
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
                        {/*login page start*/}
                        <div className="authentication-main">
                            <div className="row">

                                <div className="col-md-12 p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box" style={{margin: "auto"}}>
                                            <h4>LOGIN</h4>
                                            <h6>
                                                Enter your Username and Password For Login or Signup
                                            </h6>
                                            <div className="card mt-4 p-4 mb-0">
                                                <Form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Email</label>
                                                        <input
                                                            required
                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            onChange={event =>
                                                                this.setState({email: event.target.value})
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input
                                                            required
                                                            type="password"
                                                            className="form-control form-control-lg"
                                                            onChange={event =>
                                                                this.setState({password: event.target.value})
                                                            }
                                                        />
                                                    </div>
                                                    <div className="checkbox p-0">
                                                        <input id="checkbox1" type="checkbox"/>
                                                        <label htmlFor="checkbox1">Remember me</label>
                                                    </div>
                                                    <div className="form-group form-row mt-3">
                                                        <div className="col-md-3">
                                                            <button
                                                                onClick={this.handleLoginButtonClick}
                                                                className="btn btn-secondary"
                                                            >
                                                                LOGIN
                                                            </button>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="text-left mt-2 m-l-20">
                                                                Dont have an account?&nbsp;&nbsp;
                                                                <a
                                                                    href="/user/register"
                                                                    className="btn-link text-capitalize"
                                                                >
                                                                    Signup
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*login page end*/}
                    </div>
                </div>
                {/*page-wrapper Ends*/}
            </div>
        );
    }
}

Samplepage.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {login})(Samplepage);
