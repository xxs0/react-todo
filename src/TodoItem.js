import React, {Component} from 'react'

// export default class TodoItem extends Component {
//     constructor(props) {
//         super(props)
//     }
//     toggle(e) {
//        this.props.onToggle(e,this.props.todo)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="checkbox" checked={props.todo.status === 'completed'}
//                        onChange={props.onToggle.bind(null, props.todo)}
//                 />
//                 <span>{this.props.todo.title}</span>
//                 <button>删除</button>
//             </div>
//         )
//     }
// }

export default function(props) {
    return (

            <div>
                <input type="checkbox" checked={props.todo.status === 'completed'}
                       onChange={props.onToggle.bind(null, props.todo)}
                />
                <span>{props.todo.title}</span>
                <button>删除</button>
            </div>
        )

}