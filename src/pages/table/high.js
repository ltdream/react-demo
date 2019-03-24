import React from 'react'
import {Card, Table,Badge, Modal} from 'antd'
import axios from '../../axios'
import { message ,Button} from 'antd';

export default class High extends React.Component{
    state = {
        dataSource:[],
        dataSource2:[],
        dataSource3:[]
    }
    params = {
        page:1
    }
    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page,
                },
                isShowLoading: true
            }
        }).then((res)=>{
            if(res.code === 0){
                // 消除控制台红色警告
                res.result.list.map((item,index)=>{
                    item.key = index
                })
                this.setState({
                    dataSource: res.result.list,
                })
            }
        })
    }
    handleOnchange(pagination,filters,sorter){
        this.setState({
            sortOrder: sorter.order
        })
    }
    handleDelete(item){
        let id = item.id
        Modal.confirm({
            title:'删除提示',
            content:'确定删除此数据'+id,
            onOk:()=>{
                message.success('删除成功')
                this.request()
            }
        })
    }
    componentDidMount(){
        this.request()
    }
    render (){
        const colums = [{
            title: 'id',
            dataIndex: 'id',
            width:80,
            fixed:'left'
        },{
            title: '用户名',
            dataIndex: 'username'
        },{
            title: '性别',
            dataIndex: 'sex'
        },{
            title: '状态',
            dataIndex: 'status'
        },{
            title: '爱好',
            dataIndex: 'interest'
        },{
            title: '生日',
            dataIndex: 'birth'
        },{
            title: '地址',
            dataIndex: 'address'
        }]
        const colums3 = [{
            title: 'id',
            dataIndex: 'id',
        },{
            title: '用户名',
            dataIndex: 'username'
        },{
            title: '性别',
            dataIndex: 'sex'
        },{
            title: '年龄',
            dataIndex: 'age',
            sorter: (a,b)=>{
                return a.age - b.age
            },
            sortOrder: this.state.sortOrder
        },{
            title: '状态',
            dataIndex: 'status'
        },{
            title: '爱好',
            dataIndex: 'interest'
        },{
            title: '生日',
            dataIndex: 'birth'
        },{
            title: '地址',
            dataIndex: 'address'
        }]
        const colums4 = [{
            title: 'id',
            dataIndex: 'id',
        },{
            title: '用户名',
            dataIndex: 'username'
        },{
            title: '性别',
            dataIndex: 'sex'
        },{
            title: '年龄',
            dataIndex: 'age',
        },{
            title: '状态',
            dataIndex: 'status',
            render (status) {
                let config = {
                    '1': <Badge status="success" text="咸鱼"/>,
                    '2': '学霸'
                }
                return config[status]
            }
        },{
            title: '爱好',
            dataIndex: 'interest'
        },{
            title: '生日',
            dataIndex: 'birth'
        },{
            title: '操作',
            render:(text,item)=>{
                return <Button onClick={this.handleDelete.bind(this,item)}>删除</Button>
            }
        }]
        return (
            <div>
                <Card title="头部固定" className="card-wrap">
                    <Table
                        columns={colums}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false} 
                        scroll={{y:240}}       
                    />
                </Card>
                <Card title="左侧固定" className="card-wrap">
                    <Table
                        columns={colums}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}     
                        scroll={{x:1020}}   
                    />
                </Card>
                <Card title="表格排序" className="card-wrap">
                    <Table
                        columns={colums3}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}     
                        onChange={this.handleOnchange.bind(this)}
                    />
                </Card>
                <Card title="删除按钮" className="card-wrap">
                    <Table
                        columns={colums4}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}     
                    />
                </Card>
            </div>
        )
    }
}