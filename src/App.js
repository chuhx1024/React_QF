import React, { Component } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

export default class App extends Component {
    // state = {
    //     title: '待办事列表'
    // }
    constructor () {
        super()
        this.state = {
            title: '待办事列表',
            desc: '今日事 今日毕',
            todos: [
                {id: 1, title: '吃饭', isCompleted: true},
                {id: 2, title: '睡觉', isCompleted: false}
            ]
        }
    }
    addTodoList = (val) => {
        // 此时可以拷贝一个新的数组 
        // let temp = JSON.parse(JSON.stringify(this.state.todos))
        let temp = this.state.todos.slice()
        temp.push({
            id: Math.random(),
            title: val,
            isCompleted: false
        })
        this.setState({
            todos: temp
        })
    }
    // 修改 isCompleted 的值
    onCompleteChange = (id) => {
        this.setState({
            todos: this.state.todos.map((item)=>{
                if (item.id === id) {
                    item.isCompleted = !item.isCompleted
                }
                return item
            })
        })
        
    }


    render() {
        return (
            <div>
                <TodoHeader 
                    desc={this.state.desc} 
                    x={1}
                    >
                    {this.state.title}
                </TodoHeader>
                <TodoInput 
                    btnText="ADD"
                    addTodoList={this.addTodoList}
                    />
                <TodoList
                    todos={this.state.todos}
                    onCompleteChange={this.onCompleteChange}
                    > 
                </TodoList>
                <Like/>
            </div>
        )
    }
}
