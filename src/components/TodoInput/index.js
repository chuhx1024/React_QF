import React, { Component, createRef} from 'react'
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
        // 在这里创建ref
        this.inputDOM = createRef()
    }
    // 处发 添加事件
    handleAddTodoList = () => {
        this.props.addTodoList(this.state.inputValue)
        this.setState({
            inputValue: ''
        }, () => {
            this.inputDOM.current.focus()
        })
    }
    // input的 change事件
    changeVal = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    // 绑定enter事件
    upEnter = (e) => {
        if (e.keyCode === 13) {
            this.handleAddTodoList()
        }
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.changeVal} 
                    onKeyUp={this.upEnter} 
                    value={this.state.inputValue}
                    ref={this.inputDOM}
                    type="text"
                />
                <button
                    onClick={this.handleAddTodoList}
                    >
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}


