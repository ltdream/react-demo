import React from 'react'
import {Card, Carousel} from 'antd'
import './ui.less'
export default class Carousels extends React.Component{
    render(){
        return (
            <div>
                <Card title="文字背景轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div><h3>ant motion banner -- react</h3></div>
                        <div><h3>ant motion banner -- vue</h3></div>
                        <div><h3>ant motion banner -- angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片背景轮播" className="card-wrap slider-wrap">
                    <Carousel autoplay effect="fade" className="">
                        <div><img src="/carousel-img/carousel-1.jpg"/></div>
                        <div><img src="/carousel-img/carousel-2.jpg"/></div>
                        <div><img src="/carousel-img/carousel-3.jpg"/></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}