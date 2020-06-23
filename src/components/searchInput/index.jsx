import React, {Component} from 'react';
import './style.less'
class searchInput extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    changevalue = (e) => {
        this.setState({value: e.target.value})
    }
    search(e){
        if(this.state.value.length>0  && e.keyCode === 13){
            this.props.history.push(`/search/${this.state.value}`)
        }
    }
    render() {
        return (
            <div className='middle'>
                <i className='icon-search'></i>
                <input
                    type="text"
                    value={this.state.value}
                    placeholder='搜索'
                    onChange={this.changevalue}
                    onKeyUp = {this.search.bind(this)}
                    />
            </div>

        );
    }
}

export default searchInput;
