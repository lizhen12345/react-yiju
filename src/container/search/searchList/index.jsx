import React from "react"
import api from '../../../api'
import SearchListView from './searchListView'
import LoadMore from '../../../components/LoadMore'
export default class searchList extends React.Component {
    constructor() {
        super()
        this.state = {
            hasMore: false,
            Searchdata: []
        }
    }
    componentDidMount() {//初始化时进行请求数据，就是当在home页点击搜索时，进入search页面进行请求数据
        const city = this.props.city
        const key = this.props.keyWords
        api
            .search
            .searchData(city, key, 0)
            .then(res => res.json())
            .then(data => {
                this.setState({ hasMore: data.hasMore, Searchdata: this.state.Searchdata.concat(data.data) })
            })
    }
    LoadMore = () => {//下拉加载请求数据
        const city = this.props.city
        const key = this.props.keyWords

        api
            .search
            .searchData(city, key, 0)
            .then(res => res.json())
            .then(data => {
                this.setState({ hasMore: data.hasMore, Searchdata: this.state.Searchdata.concat(data.data) })
            })
    }
    componentDidUpdate(preProps,preState) {//页面更新请求数据，即我在search页面时进行搜索时
        const city = this.props.city
        const key = this.props.keyWords
        console.log("preProps",preProps);
        if(key===preProps.keyWords){
            return
        }
        this.setState({
            Searchdata:[]
        })
        api
            .search
            .searchData(city, key, 0)
            .then(res => res.json())
            .then(data => {
                this.setState({ hasMore: data.hasMore, Searchdata: this.state.Searchdata.concat(data.data) })
            })
    }
    render() {
        console.log(this.state.Searchdata)
        var ha = [...this.state.Searchdata]
        var hasMore = this.state.hasMore
        console.log('ha', ha);

        return (
            <div>
                {
                    ha ?
                        <SearchListView data={ha} />
                        : <div>数据正在加载...</div>
                }
                {
                    hasMore ? <LoadMore onLoadMore={this.LoadMore} /> : <div>到底了</div>
                }
            </div>
        )
    }
}