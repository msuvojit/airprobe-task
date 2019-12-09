import React, {Component} from 'react';
import UserMenu from './user-menu.component';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            sidebar: true,
            navMenus: false
        }
    }

    openCloseSidebar = () => {
        if (this.state.sidebar) {
            this.setState({sidebar: false})
            document.querySelector(".page-body-wrapper").classList.add('sidebar-close');
        } else {
            this.setState({sidebar: true})
            document.querySelector(".page-body-wrapper").classList.remove('sidebar-close');
        }
    }

    toggle() {
        this.setState(prevState => ({
            navMenus: !prevState.navMenus
        }));
    }

    componentWillMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) <= 991) {
            this.setState({sidebar: false})
        }
    }

    componentDidMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) <= 991) {
            document.querySelector(".page-body-wrapper").classList.add('sidebar-close');
        }
    }

    render() {
        return (
            <div className="page-main-header">
                <div className="main-header-left">
                    <div className="logo-wrapper">
                        <a href="/">
                            <img src={require('../../../assets/images/logo-light.png')} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="main-header-right row">
                    <div className="mobile-sidebar">
                        <div className="media-body text-right switch-sm">
                            <label className="switch">
                                <input type="checkbox" id="sidebar-toggle" defaultChecked={this.state.sidebar}
                                       onClick={this.openCloseSidebar}/>
                                <span className="switch-state"></span>
                            </label>
                        </div>
                    </div>
                    <div className="nav-right col">
                        <ul className={"nav-menus " + (this.state.navMenus ? 'open' : '')}>
                            <UserMenu/>
                        </ul>
                        <div className="d-lg-none mobile-toggle" onClick={() => this.toggle()}>
                            <i className="icon-more"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header