import React, { Component } from 'react';
import './head.scss'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="head">
                <div className="head-middle">
                    <a href="" className="logo-img">
                        <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt=""/>
                    </a>
                <span>|</span>
                <span>社招官网</span>
                <ul>
                    <li><a href=""> 首&nbsp;&nbsp;页</a></li>
                    <li><a href=""> 社会招聘</a></li>
                    <li><a href=""> 校园招聘</a></li>
                    <li><a href=""> 了解阿里</a></li>
                    <li><a href=""> 个人中心</a></li>
                </ul>
                <div className="login">
                    欢迎来到阿里巴巴集团招聘！
                    <a href="">登录</a>
                    |
                    <a href="">注册</a>
                </div>
                </div>
            </div>
        );
    }
}
export default Index;