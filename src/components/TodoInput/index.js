import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    static defaultProps = {
        btnText: '我就是默认值'
    }
    constructor () {
        super()
        this.state = {
            inputValue: 'xxx'
        }
    }
    // 处发 添加事件
    handleAddTodoList = () => {
        this.props.addTodoList(this.state.inputValue)
    }
    // input的 change事件
    changeVal = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.changeVal} value={this.state.inputValue} type="text"/>
            <button
                onClick={this.handleAddTodoList}
                >
                {this.props.btnText}
            </button>
            </div>
        )
    }
}


