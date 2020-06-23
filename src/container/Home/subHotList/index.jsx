import React, { Component } from 'react';
import api from "../../../api"
import HomeHotListView from './homeHotListView'
class SubHotList extends Component {
    constructor() {
        super()
        this.state = {
            hotdata1: [],
            hotdata2: []
        }

    }
    componentDidMount() {
        const city = '北京';
        api.homehot.homehot1Data(city)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    hotdata1: data
                })
            })

        api.homehot.homehot2Data(city)
            .then(res => res.json())
            .then(data => {
               console.log(data)
            })
    }
    render() {
        return (
            <div>
                SubHotList
                {
                    this.state.hotdata1.length > 0 ?
                        <HomeHotListView data={this.state.hotdata1} title={'热销单品'} /> : <div>数据正在加载中</div>

                }
                {
                    this.state.hotdata2.length > 0 ?
                        <HomeHotListView data={this.state.hotdata2} title={'家庭常用'} /> : <div>数据正在加载中</div>

                }
            </div>
        );
    }
}

export default SubHotList;
