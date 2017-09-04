import React from 'react'
import './TodoItems.css'

export default class TodoItems extends React.Component{
    render() {
        return (
            <ol className="App-content-todoitem">
                {
                    this.props.todos.map((todo) =>
                        <li key={todo.id} className="todoItem" onChange={this.props.onToggle.bind(null, todo)}>
                            <div className="todoItem-body">
                                <div>
                                    <input type="checkbox" checked={todo.status === 'completed'}
                                    />
                                </div>
                                <div className={`title-wrapper ` + (todo.status === 'completed' ? 'finished' : '')}>
                                    <span>{todo.title}</span>
                                </div>
                                <button onClick={this.props.onDelete.bind(this, todo)}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </li>
                    )
                }
            </ol>
        )
    }

}