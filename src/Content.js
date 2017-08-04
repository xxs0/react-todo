import React, {Component} from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className="App-content">
                <h1>我的待办</h1>
                <h4>工作</h4>
                <input type="text" value='添加todo'/>
                <ul className="App-content-nav">
                    <li className="nav-item">所有</li>
                    <li className="nav-item">未完成</li>
                    <li className="nav-item">已完成</li>
                </ul>
                <ul className="App-content-todoitem"></ul>
            </div>
        )
    }
}