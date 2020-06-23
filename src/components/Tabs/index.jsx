import React, {Component} from 'react';
import './style.less'
class Tabs extends Component {
    constructor(){
        super()
        this.state ={
            currentIndex :0
        }
    }
    changeIndex(index){
        this.setState({
            currentIndex:index
        })
    }
    render(){
        return(
            <div>
                <div className='Tab-title'>
                    {
                      React.Children.map(this.props.children,(ele,index)=>{
                          console.log('this',this);
                          
                          return(
                          <div className={`oneItem ${index === this.state.currentIndex ? 'light':''}`} onClick={this.changeIndex.bind(this,index)}>{ele.props.className}</div>
                          )
                      })
                    }
                </div>
                <div className='Tab-main'>
                    {
                      React.Children.map(this.props.children,(ele,index)=>{
                          return(
                          <div className = {index === this.state.currentIndex? 'show':'hide'}>{ele}</div>
                          )
                      })
                    }
                </div>
            </div>
        )
    }
}
export default Tabs