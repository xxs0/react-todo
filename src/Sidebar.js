import React, {Component} from 'react'

export default class Sidebar extends Component {
    toggleSidebar() {
        this.props.onToggle()
    }
    render() {
        return (
            <div className="App-sidebar">
                { this.props.showSidebar &&
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
                    <button onClick={this.toggleSidebar.bind(this)}>收缩</button>
                </div>
                }
                {!this.props.showSidebar &&
                <div className="sidebar-close">
                    <span>图像</span>
                    <button onClick={this.toggleSidebar.bind(this)}>展开</button>
                </div>
                }

            </div>
        )
    }
}