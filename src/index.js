import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {rootUrl} from './utils/urls';

axios.defaults.baseURL = rootUrl;
axios.defaults.headers.post['Content-Type'] = "application/json";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
    });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
