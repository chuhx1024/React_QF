import React from 'react'
import ReactDOM from 'react-dom'
// const createApp = (props) => {
//     return (
//         <div>
//             {/* 只要是要写js 就加一层花括号  注释也是js 所以也要加 */}
//             <h1>{props.title}</h1>
//             <p>{props.name}</p>
//         </div>
//     ) 
// }
// const app = createApp({
//     title: '你好',
//     name: '夏明'
// })
// 第一种创建组件的方式  函数式   上边就是原理  
const App = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.title}</p>
        </div>
    )
}
ReactDOM.render(
    <App title="你好" name="小明"/>,
    document.querySelector('#root')
)
