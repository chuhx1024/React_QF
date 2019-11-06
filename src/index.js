import React from 'react'
import { render } from "react-dom"

// 定义组件的第二个方式 使用类

class App extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h>我就是类创建出来的组件</h>
                <div>{this.props.msg}</div>
            </div>
        )    
    }
}


render(
    <App msg="测试的数据"/>,
    document.querySelector('#root')
)