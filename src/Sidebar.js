import React, {Component} from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="App-sidebar">
                <div className="sidebar-open">
                    <div className="sidebar-header">
                        <h2>Mac public </h2>
                        <button>登出</button>
                    </div>
                    <ul className="sidebar-todolist">
                        <li>所有</li>
                        <li>工作</li>
                    </ul>
                    <input type="text" value='新增列表'/>
                    <button>收缩</button>
                </div>
                <div className="sidebar-close">
                    <span>图像</span>
                    <button>展开</button>
                </div>
            </div>
        )
    }
}