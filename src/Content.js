import React, {Component} from 'react'

export default class Content extends Component {
    changeTitle(e) {
        console.log('修改todo input')
        this.props.onChange(e)
    }
    submit(e){
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
    render() {
        return (
            <div className="App-content">
                <h1>我的待办</h1>
                <h4>工作</h4>
                <input type="text" value={this.props.content}
                       onChange={this.changeTitle.bind(this)}
                       onKeyDown={this.submit.bind(this)}
                />
                <ul className="App-content-nav">
                    <li className="nav-item">所有</li>
                    <li className="nav-item">未完成</li>
                    <li className="nav-item">已完成</li>
                </ul>
                <ul className="App-content-todoitem">
                    {
                        this.props.todos.map((todo,index)=>{
                            return (
                                <li key={index}>
                                    <div>
                                        <input type="checkbox"/>
                                        <span>{todo.title}</span>
                                        <button>删除</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}