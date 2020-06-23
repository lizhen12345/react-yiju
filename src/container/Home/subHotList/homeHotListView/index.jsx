import React, { Component } from 'react';
class HomeHotListView extends Component {

    render() {
        const data = this.props.data
        console.log(data)
        const title = this.props.title
        const wangzhi = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592373153044&di=be74ead2f25735d08aeabe53d0174611&imgtype=0&src=http%3A%2F%2Fimg1.soufunimg.com%2Fviewimage%2Fzxb%2F2014_07%2F18%2F82%2F54%2Fpic%2F007827065300%2F312x312c.jpg'
        return (
            <div className='hotWrapper'>
                <h1>{title}</h1>
                <div className='dataWrapper'>
                    {
                        data.map((ele, index) => {
                            return (
                                <div key={index} className='oneItem'>
                                    <a className='aWrapper' href={ele.link}>
                                        <div className='imgWrapper'>
                                            <img className='imgWrapper' src={wangzhi} alt={ele.title} />

                                        </div>
                                        <span className='spanWrapper'>{ele.title}</span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default HomeHotListView;
