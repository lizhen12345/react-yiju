import React from "react"
import api from '../../api'
import DetailsList from './detailList'
export default class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            details: {},
            comments: {},
        }
    }
    componentWillMount() {
        const id = this.props.match.params.goodsId
        api.details.detailsData(id).then(res => res.json()).then(data => {
            console.log(data);

            this.setState({
                details: data
            })
        })
        api.comments.commentsData(id).then(res => res.json()).then(data => {
            console.log('commets', data);

            this.setState({
                comments: data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.details.imgs ?
                        <DetailsList history={this.props.history} data={this.state.details} comments={this.state.comments} /> : <div>请求中</div>
                }

            </div>
        )
    }
}