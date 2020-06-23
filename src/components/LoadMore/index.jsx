import React from 'react'

class LoadMore extends React.Component {

    componentDidMount() {
        // const height = document.documentElement.clientHeight
        // const that = this
        // let timer = null
        window.addEventListener('scroll', function () {
            // let TopHeight = that.refs.load.getBoundingClientRect().top
            // console.log(timer);
            
            // if(!timer){
            //     timer = setTimeout(()=>{
            //         if (TopHeight < height) {
            //                     // 该加载数据的时候
            //                     that.props.onLoadMore();
            //                 timer=null

            //                 }

            //     },3000)
            // // }
            // if (timer) {
            //     clearTimeout(timer);
            // }
            // timer = setTimeout(function(){
            //     if (TopHeight < height) {
            //         // 该加载数据的时候
            //         that.props.onLoadMore();
            //     }
            // },300)


        })
    }
    // componentDidMount(){
    //     window.removeEventListener('scroll')
    // }
    render() {
        return (
            <div ref='load'>
                LoadMore
            </div>
        )
    }
}
export default LoadMore