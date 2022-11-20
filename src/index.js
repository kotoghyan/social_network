import './index.css';
import React from 'react';
import App from './App';
import store from './redux/Store.ts';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

