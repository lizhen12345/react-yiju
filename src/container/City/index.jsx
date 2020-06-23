import React, { Component } from 'react';
import Head from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
import { connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cityActions from "../redux/actions/city"
class City extends Component {
    setCity(city){
        window.history.back()
        console.log(this)
        this.props.cityActions.updateCity({
            cityName:city
        })
        
    }
    render() {

        return (
            <div>
                <Head title={'城市选择'} history={this.props.history} />
                {/* 这里把路由的history对象传入 */}
                <CurrentCity city={this.props.city} />
                <HotCity getCity={this.setCity.bind(this)} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)