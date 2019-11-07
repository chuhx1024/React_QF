import React, { Component } from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoHeader desc="今日事, 今日毕">
                    待办事列表
                </TodoHeader>
                <TodoInput/>
                <TodoList/>
            </div>
        )
    }
}
