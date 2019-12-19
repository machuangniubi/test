import React, { Component } from 'react';
import './content.scss'
import SeamlessRolling from "./SeamlessRolling"
import axios from 'axios';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    
    componentDidMount(){
        //设置代理处理跨域
        axios.get('/ali/zhaopin/latestPosition/doLatestPosition.json')
        .then((res) => {
          this.setState({
            list: res.data.returnValue
          })
        // console.log(res.data.returnValue)
        })
    }
    render() { 
        return ( 
            <div className="content">
                <div className="newPosition-content">
                    <div className="content-left">
                        { this.state.list.length && <SeamlessRolling info={this.state.list} speed={40}></SeamlessRolling> }
                    </div>
                    <div className="content-right">
                    <a href="">
                        <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt="阿里云"></img>
                    </a>
                    <a href="">
                        <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="阿里智能"></img>
                    </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;