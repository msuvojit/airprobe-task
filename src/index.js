import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ScrollContext} from "react-router-scroll-4";
import "./index.scss";

import {store, persistor} from "./store";
import App from "./components/app";

import UserList from "./components/applications/users/user-list";
import MapView from "./components/applications/users/map-view";

// Pages
import UserLogin from "./components/pages/user-login";
import UserRegister from "./components/pages/user-register";

import PrivateRoute from "./routing/PrivateRoute";
import {PersistGate} from "redux-persist/lib/integration/react";

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter basename={"/"}>
                        <ScrollContext>
                            <Switch>
                                <Route exact path={`/`} component={UserLogin}/>

                                <Route exact path={`/user/register`} component={UserRegister}/>
                                <Route exact path={`/user/login`} component={UserLogin}/>

                                <App>

                                    {/* map view with multiple marker */}
                                    <PrivateRoute
                                        exact
                                        path={`/map-view`}
                                        component={MapView}
                                    />

                                    {/* show available users list with private route*/}
                                    <PrivateRoute
                                        exact
                                        path={`/user-list`}
                                        component={UserList}
                                    />

                                </App>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
