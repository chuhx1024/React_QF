import React, { Component } from 'react'

export default class Like extends Component {
    constructor () {
        super()
        this.state = {
            isLiked: false
        }
    }
    handleLikeClick = () => {
        // 此方法是异步的
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                    {this.state.isLiked ? '取消👍' : '喜欢🤓'}
                </span>
            </div>
        )
    }
}
