import React from "react"
import "./style.less"
import SearchInput from '../../../components/searchInput'
export default class searchHeader extends React.Component {

    handlerBack=()=>{
        // console.log(this)
        // this.props.history.push("/")此方法不完美
        // this.props.history.replace("/")
        window.history.back(-1)
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
            <span className="back-icon float-left" onClick={ this.handlerBack }>
                <i className="icon-chevron-left"></i>
            </span>
                <SearchInput history={ this.props.history }/>
        </div>
        )
    }
}