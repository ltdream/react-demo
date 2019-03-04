import React, { Component } from 'react';
import { Button, Card, Radio } from 'antd';
import './ui.less'

export default class Buttons extends Component{
  state={
    loading: true,
    size: 'default'
  }
  handleCloseLoading(){
    this.setState({
      loading:false
    })
  }
  handleChangeSize(e){
    this.setState({
      size:e.target.value
    })
  }
  render () {
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button type="primary" shape="circle" icon="search"></Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={true}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={true}>点击加载</Button>
          <Button shape="circle" loading={true}></Button>
          <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">前进</Button>
            <Button type="primary" icon="right">返回</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChangeSize.bind(this)}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Imooc</Button>
          <Button type="primary" size={this.state.size}>Imooc</Button>
          <Button size={this.state.size}>Imooc</Button>
          <Button size={this.state.size}>Imooc</Button>
        </Card>
      </div>
    )
  }
}
