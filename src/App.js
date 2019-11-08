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
                    />
                <TodoList todos={this.state.todos}/>
                <Like/>
            </div>
        )
    }
}
