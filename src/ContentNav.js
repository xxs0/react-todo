import React from 'react'
import './ContentNav.css'
export default class ContentNav extends React.Component {
    render() {
        return (
            <ul className="App-content-nav">
                <li className={`nav-item ${this.props.navTab === 0 && `selected`}`}
                    onClick={() => this.props.onTabChange(0)}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <a>未完成</a>
                </li>
                <li className={`nav-item ${this.props.navTab === 1 && `selected`}`}
                    onClick={() => this.props.onTabChange(1)}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <a>已完成</a>
                </li>
                <li className={`nav-item ${this.props.navTab === 2 && `selected`}`}
                    onClick={() => this.props.onTabChange(2)}>
                    <i className="fa fa-list" aria-hidden="true"></i>
                    <a>所有</a>
                </li>
            </ul>
        )
    }
}