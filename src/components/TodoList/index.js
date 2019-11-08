import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
                        console.log({...item})
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
