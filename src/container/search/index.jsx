import React, { Component } from 'react';
import SearchHead from './searchHead'
import SearchList from './searchList'
import {connect} from 'react-redux'
class Search extends Component {
    
    render() {

        return (
            <div>
                <SearchHead history = {this.props.history} title={'搜索页面'}/>
                <SearchList keyWords = {this.props.match.params.keyWords} city = {this.props.city}/>
            </div>
        );
    }
}
function mapStateToProps(state){
    // debugger
    //  console.log('statecity',state);
    
    return{
        city:state.city
    }
}
export default connect(
    mapStateToProps
)(Search);
