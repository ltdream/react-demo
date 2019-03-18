import React from 'react';
import {Card, Button, InputNumber, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message} from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select;

class FormReg extends React.Component{
    
    render (){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol:{
                xs: 24,
                sm: 20
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem {...formItemLayout} label="用户名">
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[{
                                        required: true,
                                        message: "请输入用户名"
                                    }]
                                })(
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="密码">
                            {
                                getFieldDecorator('pwd',{
                                    initialValue:'',
                                    rules:[{
                                        required: true,
                                        message: "请输入密码"
                                    }]
                                })(
                                    <Input type="password" placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="性别">
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                    
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="年龄">
                            {
                                getFieldDecorator('age',{
                                    initialValue: 18,
                                    
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="当前状态">
                            {
                                getFieldDecorator('state',{
                                    initialValue: '1',
                                    
                                })(
                                    <Select>
                                        <Option value="1">咸鱼</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="兴趣爱好">
                            {
                                getFieldDecorator('state',{
                                    initialValue: ['1','2'],
                                    
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">咸鱼</Option>
                                        <Option value="2">辣椒</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormReg)