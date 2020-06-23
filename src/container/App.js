import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cityActions from "./redux/actions/city"

class App extends Component {
    componentDidMount(){
        this.props.cityActions.initCity({
            cityName:'北京'
        })
    }
    render() {
        console.log('pros',this.props);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        city:state.city
    }
}

function mapDispatchToProps (dispatch){
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)