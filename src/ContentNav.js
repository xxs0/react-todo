import React, {Component} from 'react'
import './ContentNav.css'
export default class ContentNav extends Component {
    render() {
        return (
            <ul className="App-content-nav">
                <li className={`nav-item ${this.props.navTab === 0 && `selected`}`}>
                    <a onClick={() => this.props.onTabChange(0)}>所有</a>
                </li>
                <li className={`nav-item ${this.props.navTab === 1 && `selected`}`}>
                    <a onClick={() => this.props.onTabChange(1)}>未完成</a>
                </li>
                <li className={`nav-item ${this.props.navTab === 2 && `selected`}`}>
                    <a onClick={() => this.props.onTabChange(2)}>已完成</a>
                </li>
            </ul>
        )
    }
}