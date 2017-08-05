import React, {Component} from 'react'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [
                {catgory: '家务'}
            ]
        }
    }
    toggleSidebar() {
        this.props.onToggle()
    }
    changeList(e) {
        console.log('修改list input')
        this.props.onChange(e)
    }
    submit(e) {
        console.log('提交新list')
        if (e.key === 'Enter') {

            let list = {catgory: e.target.value}
            this.state.todoList.push(list)
            this.setState(this.state)
        }
    }
    delete() {
        console.log('删除这个list')
    }
    render() {
        let lists = this.state.todoList
        return (
            <div className="App-sidebar">
                { this.props.showSidebar &&
                <div className="sidebar-open">
                    <div className="sidebar-header">
                        <h2>Mac public </h2>
                        <button>登出</button>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" value={this.props.content}
                               onChange={this.changeList.bind(this)}
                               onKeyDown={this.submit.bind(this)}
                        />
                    </div>
                    <ul className="sidebar-todolist">
                        <li>所有</li>
                        {lists.map((list, index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <span className="list-catgory">{list.catgory}</span>
                                            <button onClick={this.delete.bind(this)}>删除</button>
                                        </div>
                                    </li>
                                )

                        }
                        )}
                    </ul>
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