// import { setAlert } from "./alert";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "../constants/actionTypes";
// import setAuthToken from "../utils/setAuthToken";

// Load User

// Register User
export const register = (
    name,
    email,
    password
) => dispatch => {

    // get the users from the localstorage
    let users_str = localStorage.getItem('users');

    // convert the localstorage string to json object
    let users_arr = JSON.parse(users_str) || [];

    // create user object
    let user = {
        name: name,
        email: email,
        password: password,
        createdAt: new Date()
    };

    // check if user object exist with same email id
    let _user = users_arr.find(function(item){
        return item.email === email;
    });

    // check if the user already exist
    if (!_user) {
        // push the user object to the users array
        users_arr.push(user);

        // create string from the json array of object
        let users_arr_str = JSON.stringify(users_arr);

        // save the users list in localstorage
        localStorage.setItem('users', users_arr_str);
    } else {
        alert("User already registered");
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    try {
        // print proper value
        console.log(email, password);

        // get the users from the localstorage
        let users_str = localStorage.getItem('users');

        // convert the localstorage string to json object
        let users_arr = JSON.parse(users_str) || [];

        // check if user object exist with same email id
        let _user = users_arr.find(function(item){
            return item.email === email;
        });

        console.log({_user});

        // dispatch proper event based on the result
        if (_user) {

            // check password
            if (_user.password !== password) {
                alert("Incorrect password");

                dispatch({
                    type: LOGIN_FAIL
                })

                return
            }

            // using current time for timestamp
            _user.token = new Date().getTime();

            console.log({_user});

            dispatch({
                type: LOGIN_SUCCESS,
                payload: _user
            });
        } else {
            dispatch({
                type: LOGIN_FAIL
            })
        }
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            // errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
};
