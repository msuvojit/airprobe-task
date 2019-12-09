import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class UserPanel extends Component {
    render() {

        return (
            <div className="sidebar-user text-center">
                <div>
                    <img
                        className="img-50 rounded-circle"
                        src={require("./../../../assets/images/user/1.jpg")}
                        alt="#"
                    />
                </div>
                <h6 className="mt-3 f-12">
                    {this.props.auth.isAuthenticated && (
                        <span>{this.props.auth.name}</span>
                    )}
                </h6>
                <a href="#">
                    <i className="fa fa-circle text-success"></i> Online
                </a>
            </div>
        );
    }
}

UserPanel.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(UserPanel);
