import React, { Component } from 'react';
import './style.less'
class CurrentCity extends Component {
    
    render() {
        return (
            <div className="current-city">
            <h2>当前城市：{ this.props.city.cityName }</h2>
        </div>
        )
    }
}

export default CurrentCity;
