import React from 'react';
import "./style.less"

export default class HotCity extends React.Component {

    clickHandler(cityName) {
        this.props.getCity(cityName)
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <div className="clear-fix">
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '北京')}>北京</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '上海')}>上海</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '广州')}>广州</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '武汉')}>武汉</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '南京')}>南京</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '苏州')}>苏州</span>
                    </div>
                    <div className='oneItem'>
                        <span onClick={this.clickHandler.bind(this, '北京')}>北京</span>
                    </div>
                </div>
            </div>
        )
    }
}