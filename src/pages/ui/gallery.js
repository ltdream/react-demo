import React from 'react'
import {Card, Row, Col, Modal} from 'antd'
import './ui.less'

export default class Gallery extends React.Component{
    // visible = false
    state={
        imgSrc:'',
        visible:false
    }
    openGallery(imgSrc){
        this.setState({
            imgSrc: '/gallery/'+imgSrc,
            visible: true
        })
    }
    render (){
        const imgs = [
            ['1.png','2.png','3.png','4.png','5.png'],
            ['6.png','7.png','8.png','9.png','10.png'],
            ['11.png','12.png','13.png','14.png','15.png'],
            ['16.png','17.png','18.png','19.png','10.png'],
            ['21.png','22.png','23.png','24.png','25.png']
        ]
        const imgList = imgs.map((list)=>
            <Col md={4}>
                {list.map((item)=>
                    <Card  className="card-wrap" cover={<img src={'/gallery/'+item} />} onClick={this.openGallery.bind(this,item)}>
                        <Card.Meta title="React Admin" description="i ike lt" />
                    </Card>
                )}
            </Col>
        )
        return (
            <div>
                <Row gutter={10}>
                    {imgList}
                </Row>
                <Modal 
                    title="画廊图片"
                    visible={this.state.visible} 
                    width={300} 
                    height={500} 
                    onCancel={()=>{this.setState({visible:false})}} 
                    footer={null}
                >
                    {<img src={this.state.imgSrc} style={{width:'100%'}}/> }   
                </Modal>  
            </div>
        )
    }
}