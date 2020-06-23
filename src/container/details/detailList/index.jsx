import React from "react"
import Header from '../../../components/Header'
import Lunbo from '../../../components/lunbo'
import Banner1 from '../../../static/images/banner1.png'
import Banner2 from '../../../static/images/banner2.png'
import Banner3 from '../../../static/images/banner3.png'
import './style.less'
import Tabs from '../../../components/Tabs'
import Comments from './comments'
export default class DetailsList extends React.Component {

    render() {
        const Banners = [Banner1, Banner2, Banner3]
        const data = this.props.data
        const comments = this.props.comments
        return (
            <div className='detail-info'>
                <Header history={this.props.history} title={'详情页'} />
                <Lunbo shuju={Banners} />
                <Tabs>
                    <div className = '房屋信息'>
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{data.price}/月</span>
                                    <p>租金</p>
                                </li>
                                <li>
                                    <span>{data.info.type}/月</span>
                                    <p>房型</p>
                                </li>
                                <li>
                                    <span>{data.houseType}</span>
                                    <p>面积</p>
                                </li>
                            </ul>
                        </div>
                        <div className="info">
                            <div className="info-list">
                                <p>楼层：{data.info.level}</p>
                                <p>装修：{data.info.style}</p>
                            </div>
                            <div className="info-list">
                                <p>类型：{data.info.type}</p>
                                <p>朝向：{data.info.orientation}</p>
                            </div>
                            <div className="info-list">
                                <p>年代：{data.info.years}</p>
                            </div>
                        </div>
                    </div>
                    <div className = '房屋评论'>
                        <Comments comments = {comments}/>
                    </div>
                </Tabs>

            </div>
        )
    }
}