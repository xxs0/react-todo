import React, {Component} from 'react'

export default class SidebarExpand extends Component {
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
            this.props.onSubmit(e)
        }
    }
    delete() {
        console.log('删除这个list')
    }
    filter() {

    }
    render() {
        let lists = this.props.lists
            .map((list, index) => {
                return (
                    <li key={index}>
                        <div>
                            <span className="list-catgory">{list}</span>
                            <button>删除</button>
                        </div>
                    </li>
                )
            })
        return (
            <div className="sidebar-open">
                <div className="sidebar-header">
                    <h2>Mac public</h2>
                    <button>登出</button>
                </div>
                <div className="input-wrapper">
                    <input type="text" value={this.props.content}
                           onChange={this.changeList.bind(this)}
                           onKeyDown={this.submit.bind(this)}
                    />
                </div>
                <ul className="sidebar-todolist">
                    <li>
                        <div>
                            <span className="list-catgory">所有</span>
                        </div>
                    </li>
                    {lists}
                </ul>
                <button onClick={this.toggleSidebar.bind(this)}>收缩</button>
            </div>
        )
    }

}