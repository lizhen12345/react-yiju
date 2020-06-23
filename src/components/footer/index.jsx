import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './style.less'
class Navfooter extends Component {
    render() {
        return (
            <div className='footerWrapper'>
                <div className='oneItem'>
                    <NavLink exact to='/'>
                        <i className='iconfont icon-home'></i>
                        <p>首页</p>
                    </NavLink>
                </div>
                <div className='oneItem'>
                    <NavLink to='/shop'>
                        <i className="iconfont icon-shop"></i>
                        <p>商城</p>
                    </NavLink>
                </div>
                <div className='oneItem'>
                    <NavLink to='/service'>
                        <i className="iconfont icon-trophy"></i>
                        <p>生活服务</p>
                    </NavLink>
                </div>
                <div className='oneItem'>
                    <NavLink to='/mine'>
                        <i className="iconfont icon-team"></i>
                        <p>我的</p>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navfooter;
