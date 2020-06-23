import React, { Component } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom"
import App from '../container/App'
import Home from '../container/Home'
import Mine from '../container/Mine'
import Service from '../container/Service'
import Shop from '../container/Shop'
import NotFound from '../container/NotFound'
import City from '../container/City'
import Search from '../container/search'
import Details from '../container/details'
// import SubRouter from './SubRouter'
class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App path='/'>
                    <Switch>
                        <Route exact path = '/' component = {Home}></Route>
                        <Route path = '/mine' component = {Mine}></Route>
                        <Route path = '/shop' component = {Shop}></Route>
                        <Route path = '/service' component = {Service}></Route>
                        <Route path = '/city' component = {City}></Route>
                        <Route path = '/search/:keyWords' component = {Search}></Route>
                        <Route path = '/details/:goodsId' component = {Details}></Route>
                        <Route path = '*' component = {NotFound}></Route>
                    </Switch>
                    {/* <SubRouter/> */}
                </App>
            </HashRouter>
        );
    }
}

export default AppRouter;
