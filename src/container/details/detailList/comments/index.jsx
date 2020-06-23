import React from "react"
import Item from './Item'
import './style.less'
export default class comments extends React.Component {


    render() {
        console.log('com', Object.prototype.toString.call(this.props.comments.data));
        const data = this.props.comments.data || []
        console.log('data' ,data);
        
        console.log('data',Array.isArray(data));

        return (
            <div className="comment-list">
                {data.map((item, index) => {
                    return <Item key={index} data={item} />
                })}
            </div>
        )
    }
}