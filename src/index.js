import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import {Provider} from "react-redux"
import configtureStore from "./container/redux/store"
import './static/css/common.less'
import './static/css/font.css'
import './static/css/iconfont.css'

const store = configtureStore();
ReactDOM.render(
    <Provider store={store}>
    <AppRouter/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA