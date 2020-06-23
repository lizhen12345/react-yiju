import React from "react"
import "./style.less"

export default class Header extends React.Component {

    handlerBack=()=>{
        console.log(this)
        // this.props.history.push("/")此方法不完美
        // this.props.history.replace("/")
        window.history.back(-1)
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handlerBack}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}