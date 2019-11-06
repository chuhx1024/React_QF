import React from 'react'
import { render } from "react-dom"

// 给元素动态设置 类名的第三方包   
import classNames from 'classnames'

import './index.css'

// 定义组件的第二个方式 使用类 继承

class App extends React.Component {
  
    render () {
        const style = {
            color: 'red'
        }
        console.log(this.props)
        return (
            <div>
                <h style={style}>我就是类创建出来的组件</h>
                <div className="has-text-red">{this.props.msg}</div>
                <div className={classNames('a',{b: true}, {c: false})}>{this.props.msg}</div>
            </div>
        )    
    }
}


render(
    <App msg="测试的数据"/>,
    document.querySelector('#root')
)