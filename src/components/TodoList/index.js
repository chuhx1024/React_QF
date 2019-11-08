import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
                        return (
                            <TodoItem 
                                key={index} 
                                {...item}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
