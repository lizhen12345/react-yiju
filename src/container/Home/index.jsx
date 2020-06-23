import React, { Component } from 'react';
import Navfooter from '../../components/footer'
import NavTop from '../../components/navTop'
import LunBo from '../../components/lunbo'
import Banner1 from '../../static/images/banner1.png'
import Banner2 from '../../static/images/banner2.png'
import Banner3 from '../../static/images/banner3.png'
import SubHotList from './subHotList'
import {connect }  from 'react-redux'
class Home extends Component {
    render() {
        const Banners = [Banner1,Banner2,Banner3]
        console.log(this.props.city)
        return (
            <div>
                <NavTop city={this.props.city.cityName} history={this.props.history}/>
                <LunBo shuju = {Banners}/>
                <SubHotList/>
                <Navfooter/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Home);
