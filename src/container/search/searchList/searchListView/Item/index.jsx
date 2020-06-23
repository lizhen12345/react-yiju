import React from "react"
import "./style.less"
import { Link } from 'react-router-dom'
export default class Item extends React.Component {
    render() {
        var item = this.props.oneData;
        const wangzhi = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592373153044&di=be74ead2f25735d08aeabe53d0174611&imgtype=0&src=http%3A%2F%2Fimg1.soufunimg.com%2Fviewimage%2Fzxb%2F2014_07%2F18%2F82%2F54%2Fpic%2F007827065300%2F312x312c.jpg'
        return (
            <div className="list-item">
                <Link to={`/details/${item.id}`}>
                    <img src={wangzhi} alt="" />
                    <div className="mask">
                        <div className="left">
                            <p>{item.title}</p>
                            <p>{item.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="btn">
                                {item.rentType}
                            </div>
                            {/* dangerouslySetInnerHTML:识别标签结构 */}
                            <p dangerouslySetInnerHTML={{ __html: item.price + "/月" }} />
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
}