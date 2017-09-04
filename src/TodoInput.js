import React, {Component} from 'react'

export default class TodoInput extends Component{
    changeTitle(e) {
        this.props.onChange(e)
    }
    submit(e){
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }
    render() {
        return (
            <div className="todoInputWrapper">
                <input type="text" value={this.props.content} placeholder="输入新的待办事项，按Enter添加"
                       // content={this.props.catgory}
                       onChange={this.changeTitle.bind(this)}
                       onKeyDown={this.submit.bind(this)}
                />
            </div>

        )
    }

}