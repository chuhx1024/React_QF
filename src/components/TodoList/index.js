import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })).isRequired,
        onCompleteChange: PropTypes.func
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((item, index) => {
                        return (
                            <TodoItem 
                                key={index} 
                                {...item}
                                onCompleteChange={this.props.onCompleteChange}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}
