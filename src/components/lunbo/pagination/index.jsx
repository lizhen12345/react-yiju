import React, { Component } from 'react';
import './style.less'
class Pagination extends Component {

    render() {
        const dots = this.props.dots
        let dotsArr = new Array(dots)
        let currentIndex = this.props.index
        dotsArr.fill(1)
        return (
            <div className='Pagination'>
                {dotsArr.map((ele, index) => {
                    return (
                        <div key={index} className={`oneItem ${index===currentIndex? "select":''}`}></div>
                    )
                })
                }
            </div>
        );
    }
}

export default Pagination;
