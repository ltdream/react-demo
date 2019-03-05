import React, { Component } from 'react';
import './ui.less'
import { Card, Button, Spin, Icon, Alert } from 'antd';

export default class Loadings extends Component{
    render(){
        const icon = <Icon type="plus" style={{fontSize:24}}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin size="default" style={{margin:'0 10px'}}></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={icon} style={{marginLeft: 10}} spinning={true}></Spin>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        style={{marginBottom:10}}
                        message="React"
                        description="欢迎来到React学习网站"
                        type="info"
                    />
                    <Spin spinning={false}>
                        <Alert
                            message="React"
                            description="欢迎来到React学习网站"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎来到React学习网站"
                            type="success"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}