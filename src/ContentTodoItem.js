import React, {Component} from 'react'

export default class ContentTodoItem extends Component {
    changeTitle(e) {
        this.props.onChange(e)
    }
    submit(e) {
        console.log('新增')
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
    render() {
        let todos = this.props.todos.map((todo, index) => {
            return (
                <li key={index}>
                    <div>
                        <input type="checkbox" checked={todo.status === 'completed'}
                        />
                        <span>{todo.title}</span>
                        <button>删除</button>
                    </div>
                </li>
            )
        })
        return (
            <div>
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
                    {todos}
                </ul>
            </div>
        )
    }
}