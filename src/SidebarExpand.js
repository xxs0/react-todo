import React, {Component} from 'react'
import './SIdebarExpand.css'
export default class SidebarExpand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeList:''
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
            this.props.onSubmit(e)
        }
    }
    delete(e) {
        console.log('删除这个list')
        this.props.onDelete(e)
    }
    filter() {

    }
    takeAList(e) {
        console.log('take')
        this.props.onChoose(e)
    }
    switchList(e) {
        console.log('switch',e)

    }
    render() {
        let lists = this.props.lists
            .map((list, index) => {
                return (
                    <li key={index} className="list-group-item" onClick={this.switchList.bind(this)}>
                        <div>
                            <i className="fa fa-folder fa-fw" aria-hidden="true"></i>
                        </div>
                        {/*<div>*/}
                            {/*<span className="list-catgory"*/}
                                  {/*onClick={this.takeAList.bind(this,list)}>*/}
                            {/*{list}*/}
                        {/*</span>*/}
                        {/*</div>*/}
                        <div className="list-catgory"
                             onClick={this.takeAList.bind(this,list)}>
                            {list}
                        </div>
                        <div onClick={this.delete.bind(this, list)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </div>
                    </li>
                )
            })
        return (
            <div className="sidebar-open">
                <div className="sidebar-header">
                    <button onClick={this.toggleSidebar.bind(this)}>
                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    </button>
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

            </div>
        )
    }

}