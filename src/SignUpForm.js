import React from 'react'

export default (props) => {
    return (
        <form className="signUp" onSubmit={props.onSubmit}>
            <div className="row">
                <label>邮箱</label>
            </div>
            <div className="row">
                <input type="text" value={props.formData.email}
                       onChange={props.onChange.bind(null, 'email')}/>
            </div>
            <div className="row">
                <label>用户名</label>
            </div>
            <div className="row">
                <input type="text" value={props.formData.username}
                       onChange={props.onChange.bind(null, 'username')}/>
            </div>
            <div className="row">
                <label>密码</label>
            </div>
            <div className="row">
                <input type="password" value={props.formData.password}
                       onChange={props.onChange.bind(null, 'password')}/>
            </div>
            <div className="row">
                <label>注册</label>
            </div>
        </form>
    )
}