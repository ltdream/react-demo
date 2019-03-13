import React, { Component } from 'react';
import './ui.less'
import { Card, Button, message } from 'antd';

export default class Message extends Component{
    openMessage(type){
        message[type]('恭喜你，React课程晋级成功')
    }
    render(){
        return (
            <div>
                <Card title="全局提示" className="card-wrap">
                    <Button type="primary" onClick={this.openMessage.bind(this,'success')}>Success</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this,'info')}>Success</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this,'warning')}>Success</Button>
                    <Button type="primary" onClick={this.openMessage.bind(this,'error')}>Success</Button>
                </Card>
            </div>
        )
    }
}