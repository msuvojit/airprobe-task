import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// Import custom components
import UserPanel from "./user-panel.component";

class Sidebar extends Component {
    state = {selectedPath: "1", mainmenu: []};
    onItemSelection = (arg, e) => {
        this.setState({selectedPath: arg.path});
    };

    componentWillMount() {
        if (this.props.auth.isAuthenticated) {
            let menuitemelist = [
                {
                    path: "/map-view",
                    title: "Map",
                    icon: "announcement",
                    sidebartitle: "General",
                    type: "link"
                },
                {
                    path: "/user-list",
                    title: "User List",
                    icon: "announcement",
                    type: "link"
                }
            ];
            this.setState({
                mainmenu: menuitemelist
            });
        }
    }

    componentDidMount() {
        var currentUrl = window.location.pathname;

        this.state.mainmenu.filter(items => {
            if (!items.children) {
                if (items.path === currentUrl) this.setNavActive(items);
                return false;
            }
            items.children.filter(subItems => {
                if (subItems.path === currentUrl) this.setNavActive(subItems);
                if (!subItems.children) return false;
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl) this.setNavActive(subSubItems);
                });
            });
        });
    }

    setNavActive(item) {
        this.state.mainmenu.filter(menuItem => {
            if (menuItem != item) menuItem.active = false;
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true;
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item))
                        menuItem.active = true;
                    if (submenuItems != item) submenuItems.active = false;
                });
            }
        });
        item.active = !item.active;

        this.setState({
            mainmenu: this.state.mainmenu
        });
    }

    render() {
        const theme = {
            selectionColor: "#C51162"
        };

        const mainmenu = this.state.mainmenu.map((menuItem, i) => (
            <li className={`${menuItem.active ? "active" : ""}`} key={i}>
                {menuItem.sidebartitle ? (
                    <div className="sidebar-title">{menuItem.sidebartitle}</div>
                ) : (
                    ""
                )}

                {menuItem.type === "link" ? (
                    <Fragment>
                        <a href={menuItem.path} className={`sidebar-header ${menuItem.active ? "Active" : ""}`}>
                            <i className={`icon-${menuItem.icon}`}></i>
                            <span>{menuItem.title}</span>
                            {menuItem.children ? (
                                <i className="fa fa-angle-right pull-right"></i>
                            ) : (
                                ""
                            )}
                        </a>
                    </Fragment>

                ) : (
                    ""
                )}

            </li>
        ));

        return (
            <div className="page-sidebar custom-scrollbar page-sidebar-open">
                <UserPanel/>
                <ul className="sidebar-menu">{mainmenu}</ul>
            </div>
        );
    }
}

Sidebar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(Sidebar);
