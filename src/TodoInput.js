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
            <input type="text" value={this.props.content}
                   onChange={this.changeTitle.bind(this)}
                   onKeyDown={this.submit.bind(this)}
            />
        )
    }

}