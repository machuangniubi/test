// info属性为展示信息  speed属性为滚动速度

import React, { Component,Fragment } from 'react';
import "./SeamlessRolling.scss"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // time:''
         }
        this.aaa = null
    }
    componentDidMount(){
        this.start()
    }
    start(){
        // this.setState({
        //     time:setInterval(this.move,this.props.speed)
        // })
        this.aaa = setInterval(this.move,this.props.speed)
    }
    move(){
        var demo=document.getElementById("demo");
        var demo2=document.getElementById("scroll-second");
        var demo1=document.getElementById("scroll-first");
        demo2.innerHTML=demo1.innerHTML
        if(demo.scrollTop>=demo1.offsetHeight){
                demo.scrollTop=0;
        }
        else{
            demo.scrollTop=demo.scrollTop+1;
        }
    }
    stop(){
        // clearInterval(this.state.time)
        clearInterval(this.aaa)
        // this.setState({
        //     time:null
        // })
    }
    render() { 
        console.log(this.props)
        return ( 
             <div className="repeat">
                <div className="more-positon">
                    最新职位
                    <a href="">更多</a>
                </div>
                <div id="demo" onMouseEnter={this.stop.bind(this)} onMouseLeave={this.start.bind(this)} ref={(demo)=>{this.demo=demo}}>
                <ul id="scroll-first" ref={(demo1)=>{this.demo1=demo1}}>
                {
                    this.props.info.map(item=>{
                        return(
                            <li key={item.code}>
                            <a href="">{item.name}</a>
                            <em className="time">{item.applyTimeDesc}</em>
                            <em className="city">{item.workLocation}</em>
                        </li>
                       ) 
                    })
                }
                </ul>
                <ul id="scroll-second" ref={(demo2)=>{this.demo2=demo2}}></ul>
                </div>
            </div>
         );
    }
}
 
export default App;