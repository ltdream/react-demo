import React, { Component } from 'react';
import './ui.less'
import { Card, Button, Modal } from 'antd';

export default class Modals extends Component{
    state={
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen(type){
        this.setState({
            [type]: true
        })
    }
    handleClose(type){
        this.setState({
            [type]: false
        })
    }
    handleConfirm(type){
        Modal[type]({
            title:'确认？',
            content:'你确定你学会了React了吗？',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render () {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal1')}>Open</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'confirm')}>confirm</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'info')}>info</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'success')}>success</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'warning')}>warning</Button>
                </Card>
                <Modal 
                    title="React" 
                    visible={this.state.showModal1} 
                    onCancel={this.handleClose.bind(this,'showModal1')}
                >
                    <p>欢迎学习React高级教程</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    onCancel={this.handleClose.bind(this,'showModal2')}
                    okText="好的"
                    cancelText="算了"
                >
                    <p>欢迎学习React高级教程</p>
                </Modal>
                <Modal 
                    style={{top:20}}
                    title="React"
                    visible={this.state.showModal3}
                    onCancel={this.handleClose.bind(this,'showModal3')}
                >
                    <p>欢迎学习React高级教程</p>
                </Modal>
                <Modal 
                    wrapClassName="vertical-center-modal"
                    title="React"
                    visible={this.state.showModal4}
                    onCancel={this.handleClose.bind(this,'showModal4')}
                >
                    <p>欢迎学习React高级教程</p>
                </Modal>
            </div>
        )
    }
}