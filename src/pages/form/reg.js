import React from 'react';
import {Card, Button, InputNumber, Form, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message} from 'antd'
import moment from 'moment';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select
const { TextArea } = Input

class FormReg extends React.Component{
    state = {
        imageUrl: '',
        loading: false
    }
    handleChange(info){
        console.log(info)
        if(info.file.status === 'uploading'){
            this.setState({loading: true})
            return
        }
        if(info.file.status === 'done'){
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false
            }))
        }
    }
    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
      }
    getBase64 = (img, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load',()=>callback(reader.result))
        reader.readAsDataURL(img)
    }
    handleSubmit(){
        let info = this.props.form.getFieldsValue()
        console.log(info)
        info = JSON.stringify(info)
        message.success(`${info.username} 恭喜你，注册成功`)
    }

    render (){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol:{
                xs: 24,
                sm: 12
            }
        }
        const rowObject = {
            minRows: 4, maxRows: 6
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
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
                        <FormItem {...formItemLayout} label="是否已婚">
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName: 'checked',
                                    initialValue: false
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="生日">
                            {
                                getFieldDecorator('birth',{
                                    initialValue: moment('2018-08-08')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD" />
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="联系地址">
                            {
                                getFieldDecorator('address',{
                                    initialValue: '广东省 深圳市 南山区'
                                })(
                                    <TextArea autosize={ rowObject }/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="早期时间">
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem {...formItemLayout} label="头像">
                            {
                                getFieldDecorator('avatar')(
                                    <Upload 
                                        listType="picture-card"
                                        showUploadList={false}
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        {this.state.imageUrl?<img src={this.state.imageUrl} />:<Icon type={this.state.loading?'loading': 'plus'} />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('aggree')(
                                    <Checkbox>
                                        我已阅读过<a href="#">协议</a>
                                    </Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('submit')(
                                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
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