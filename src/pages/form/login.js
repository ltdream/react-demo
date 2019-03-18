import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox} from 'antd';
import './form.less'
const FormItem = Form.Item
class FormLogin extends React.Component{
    handleSubmit(){
        let userInfo = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.username} 恭喜你，通过了表单验证，密码为${userInfo.password}`)
            }else{
                message.error(`${userInfo.username} 恭喜你，通过了表单验证，密码为${userInfo.password}`)
            }
        })
    }
    render () {
        const {getFieldDecorator} = this.props.form
        return(
            <div>
                <Card title="登录行内表单" className="card-wrap">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card-wrap">
                    <Form layout="horizontal" className="form-wrap">
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'Jack',
                                    rules:[{
                                        required: true,
                                        message: '用户名不能为空'
                                    }]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'123456',
                                    rules:[{
                                        min:6,
                                        max:12,
                                        message:'密码在6-12位之间'
                                    }]
                                })(
                                    <Input type="password" prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)