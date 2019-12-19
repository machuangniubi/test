import React, { Component } from 'react';
import './banner.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="banner">
                <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                <div className="banner-mean">
                </div>
                <div className="index-mid-box">
                    <div className="float-mid">
                        <p>If not now, when?</p>
                        <p>If not me, who?</p>
                        <p>此时此刻，非我莫属！</p>
                        <div className="search-box">
                            <div className="in-box">
                            </div>
                            <input type="text" name="" id="" placeholder="请输入职位关键词"/>
                            <input type="button" value="搜索"/>
                        </div>
                        <div className="hot-text">
                            热门标签：
                            <a href="">JAVA</a>
                            <a href="">IOS</a>
                            <a href="">数据</a>
                            <a href="">安全</a>
                            <a href="">搜索</a>
                            <a href="">算法</a>
                            <a href="">运营</a>
                            <a href="">视觉</a>
                            <a href="">交互</a>
                            <a href="">前端</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}
 
export default Index;