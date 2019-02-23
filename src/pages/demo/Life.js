import React from 'react'
import Child from './child'
import {Button} from 'antd'
import './index.less'
// import 'antd/dist/antd.css'
 
export default class Life extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick(e){
        this.setState({
            count: this.state.count +1
        })
    }
    render (){
        return <div className="content">
            <p>React生命周期介绍</p>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}/>
            <Button>点击一下</Button>
        </div>
    }
}