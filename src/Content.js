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
    toggle(e){
        debugger
        console.log(this.props.todo)
        this.props.onToggle(e,this.props.todo)
    }
    render() {}
}