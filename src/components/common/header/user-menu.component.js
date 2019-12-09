import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../../actions/user.actions";
import {Link} from "react-router-dom";
import {compose} from "redux";
import {withRouter} from "react-router";

class UserMenu extends Component {
    logOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <Fragment>
                {!this.props.auth.isAuthenticated ? (
                    <div className="media  align-items-center">
                        <div className="media-body">
                            <Link to="/user/login">
                                <button className="btn btn-link m-0 txt-dark f-16 pr-2">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <li className="onhover-dropdown">
                        <div className="media  align-items-center">
                            <img
                                className="align-self-center pull-right mr-2"
                                src={require("../../../assets/images/dashboard/user.png")}
                                alt="header-user"
                            />
                            <div className="media-body">
                                <h6 className="m-0 txt-dark f-16">
                                    My Account
                                    <i className="fa fa-angle-down pull-right ml-2"></i>
                                </h6>
                            </div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div p-20">
                            <li>
                                <a href="#" onClick={this.logOut.bind(this)}>
                                    <i className="icon-power-off"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                )}
            </Fragment>
        );
    }
}

UserMenu.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logout})
)(UserMenu);
