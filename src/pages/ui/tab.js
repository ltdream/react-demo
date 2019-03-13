import React, { Component } from 'react';
import './ui.less'
import { Card, Tabs, message, Icon } from 'antd';
export default class Tab extends Component{
    newTabIndex = 3
    callback(key){
           message.info('Hi,您选择了页面：'+key) 
    }
    onChange(activeKey){
        this.setState({
            activeKey
        })
        message.info('Hi,您选择了页面：'+activeKey) 
    }
    onEdit(targetKey, action){
        this[action](targetKey)
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab'+this.newTabIndex, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }
    
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key: '1'
            },{
                title:'Tab 2',
                content:'Tab 2',
                key: '2'
            },{
                title:'Tab 3',
                content:'Tab 3',
                key: '3'
            },
        ]
        this.setState({
            panes
        })
    }
    render(){
        const TabPane = Tabs.TabPane
        return (
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                        <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                        <TabPane tab={<span><Icon type="download"/>Tab 4</span>} key="4">Content of Tab Pane 4</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab动态页签" className="card-wrap">
                    <Tabs 
                        defaultActiveKey="1" 
                        onChange={this.onChange.bind(this)} 
                        type="editable-card" 
                        activeKey={this.state.activeKey}
                        onEdit={this.onEdit.bind(this)}
                    >
                    {this.state.panes.map((item) => 
                        <TabPane tab={<span><Icon type="plus"/>{item.title}</span>} key={item.key}>{item.content}</TabPane>
                    )}
                    </Tabs>
                </Card>
            </div>
        )
    }
}