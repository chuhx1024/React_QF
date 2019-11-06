import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                我就是TodoList组件
                <TodoItem/>
            </div>
        )
    }
}
