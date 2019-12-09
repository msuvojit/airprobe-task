import React, { Component } from 'react';

// Import custom components
import Header from './common/header/header.component';
import Sidebar from './common/sidebar/sidebar.component';
import Footer from './common/footer/footer.component';


class App extends Component {
    render(){
        return (
            <div className="page-wrapper">
                <Header />
                <div className="page-body-wrapper">
                    <Sidebar />
                    <div className="page-body">
                        {this.props.children}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App