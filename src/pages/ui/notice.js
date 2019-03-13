import React, { Component } from 'react';
import './ui.less'
import { Card, Button, notification } from 'antd';

export default class Notice extends Component{
    openNotification(type,direction){
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message:'嗯',
            description:'上个月考勤1.0'
        })
    }
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={this.openNotification.bind(this,'success')}>success</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'info')}>info</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'warning')}>warning</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'error')}>error</Button>
                </Card>
                <Card title="方向提醒" className="card-wrap">
                    <Button type="primary" onClick={this.openNotification.bind(this,'success','topLeft')}>TOP</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'info','topRight')}>LEFT</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'warning','bottomLeft')}>RIGHT</Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'error','bottomRight')}>BOTTOM</Button>
                </Card>
            </div>
        )
    }
}