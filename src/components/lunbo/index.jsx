import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './style.less'
import Pagination from './pagination'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
class LunBo extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    handlerChangeIndex = index => {
        this.setState({
            index: index
        })
    }
    render() {
        return (
            <div className='lunboWrapper'>
                <AutoPlaySwipeableViews onChangeIndex={this.handlerChangeIndex}>
                    {
                        this.props.shuju.map((ele, index) => {
                            return (
                                <div key={index} className='oneItem'>
                                    <img src={ele} alt="" />
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination index={this.state.index} dots={this.props.shuju.length} />
            </div>
        );
    }
}

export default LunBo;
