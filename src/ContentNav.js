import React, {Component} from 'react'

export default class ContentNav extends Component {
    render() {
        return (
            <ul className="App-content-nav">
                <li className="nav-item">所有</li>
                <li className="nav-item">未完成</li>
                <li className="nav-item">已完成</li>
            </ul>
        )
    }
}