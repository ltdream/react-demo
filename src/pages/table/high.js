import React from 'react'
import {Card, Table} from 'antd'
export default class High extends React.Component{
    state = {
        dataSource:[]
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
            </div>
        )
    }
}