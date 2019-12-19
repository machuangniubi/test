import React, { Component } from 'react';
import './foot.scss'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="foot">
                <div className="footer-content">
                    阿里巴巴集团 Copyright ©1999-2019 版权所有
                </div>
            </div>
         );
    }
}
 
export default App;