import React from 'react'
import {Card, Table} from 'antd'
// import axios from 'axios';
import axios from '../../axios'
export default class Basic extends React.Component{
    state = {
        dataSource:[],
        dataSource2:[],
        dataSource3:[]
    }
    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                username: 'jack',
                sex: '1',
                status: '1',
                interest: '1',
                birth:'2018-08-08',
                address:'广州省深圳市',
            }
        ]
        this.setState({
            dataSource
        })
        this.request()
    }
    request = ()=>{
        // let baseUrl = 'https://www.easy-mock.com/mock/5c905559a4c09335165f464d/mockapi'
        // axios.get(baseUrl + '/table/list').then((res)=>{
        //     if(res.status === 200 && res.data.code === 0){
        //         this.setState({
        //             dataSource2: res.data.result
        //         })
        //     }
            
        // })
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1,
                },
                isShowLoading: true
            }
        }).then((res)=>{
            if(res.code === 0){
                this.setState({
                    dataSource2: res.result
                })
            }
        })
    }
    render (){
        const colums = [{
            title: 'id',
            dataIndex: 'id'
        },{
            title: '用户名',
            dataIndex: 'username'
        },{
            title: '性别',
            dataIndex: 'sex',
            render(sex){
                return sex === 1 ? '男' : '女'
            }
        },{
            title: '状态',
            dataIndex: 'status',
            render (status){
                let config = {
                    '1':'咸鱼',
                    '2':'学渣',
                    '3': '学霸'
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
            title: '地址',
            dataIndex: 'address'
        }]
        let rowSelection = {
            
        }
        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        columns={colums}
                        dataSource={this.state.dataSource}
                        bordered
                        pagination={false}        
                    />
                </Card>
                <Card title="动态数据表格" style={{margin:'10px 0'}}>
                    <Table
                        columns={colums}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={false}        
                    />
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table
                        columns={colums}
                        rowSelection={rowSelection}
                        dataSource={this.state.dataSource3}
                        bordered
                        pagination={false}        
                    />
                </Card>
            </div>
        )
    }
}