import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from '../container/Home'
import Mine from '../container/Mine'
import Service from '../container/Service'
import Shop from '../container/Shop'
class SubRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/mine' component={Mine}></Route>
                <Route path='/shop' component={Shop}></Route>
                <Route path='/service' component={Service}></Route>
            </Switch>
        );
    }
}

export default SubRouter;
