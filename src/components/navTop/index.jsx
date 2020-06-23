import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.less'
import SearchInput from '../searchInput'
class NavTop extends Component {
    // goSearch(keyWords){
    //     this.props.history.push(`/search/${keyWords}`)
    // }
    render() {
        return (
            <div className='topWrapper'>
                <div className='left'>
                    <Link to='/city'>
                        <span>{this.props.city}</span>
                        <i className='icon-angle-down'></i>
                    </Link>

                </div>
                <SearchInput history = {this.props.history}/>
                <div className='right'>
                    <i className='iconfont icon-car'></i>
                </div>
            </div>
        );
    }
}

export default NavTop;
