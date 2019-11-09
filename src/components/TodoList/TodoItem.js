import React, { Component } from 'react'

export default class TodoItem extends Component {
    // 给input绑定onChange 事件
    checkboxChange = () => {
        // this.props.onCompleteChange(this.props.id)
        let { onCompleteChange, id} = this.props
        onCompleteChange && onCompleteChange(id)
    }
    

    render() {
        let {isCompleted, id, title} = this.props
        return (
            <li>
                <input
                    checked={isCompleted}
                    onChange={this.checkboxChange}
                    type="checkbox"
                />
                <span>{id} {title} {isCompleted ? '已完成' : '未完成'}</span>
            </li>
        )
    }
}
