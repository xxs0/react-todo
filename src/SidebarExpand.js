import React, {Component} from 'react'
import './SIdebarExpand.css'
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
    takeAList(e) {
        console.log('take')
        this.props.onChoose(e)
    }
    render() {
        let lists = this.props.lists
            .map((list, index) => {
                return (
                    <li key={index} className="list-group-item">
                        <i className="fa fa-folder fa-fw" aria-hidden="true"></i>
                        <span className="list-catgory"
                              onClick={this.takeAList.bind(this,list)}>
                            {list}
                        </span>
                        <i className="fa fa-trash" aria-hidden="true">
                            <button onClick={this.delete.bind(this)}></button>
                        </i>

                    </li>
                )
            })
        return (
            <div className="sidebar-open">
                <div className="sidebar-header">
                    <h2>Mac public</h2>
                    <button className="logout">登出</button>
                </div>
                <div className="input-wrapper">
                    <input type="text" value={this.props.content}
                           onChange={this.changeList.bind(this)}
                           onKeyDown={this.submit.bind(this)}
                    />
                </div>
                <ul className="sidebar-todolist list-group">
                    {/*<li>*/}
                        {/*<div>*/}
                            {/*<span className="list-catgory">所有</span>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {lists}
                </ul>
                <button onClick={this.toggleSidebar.bind(this)}>收缩</button>
            </div>
        )
    }

}