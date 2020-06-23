import React from "react"
import "./style.less"
import Item from './Item'
export default class SearchListView extends React.Component {


    render() {
        const data = this.props.data
        return (
            <div className = 'list-container'>
                {
                    data.map((ele,index) => {
                       return <Item key ={index} oneData = {ele}/>
                    })
                }
            </div>
        )
    }
}