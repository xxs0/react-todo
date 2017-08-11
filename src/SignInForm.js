import React from 'react'

export default (props) => {
    return (
        <form className="signIn" onSubmit={props.onSubmit}>
            <div className="row">
                <label>用户名</label>
            </div>
            <div className="row">
                <input type="text" value={props.formData.username}
                       onChange={props.onChange.bind(null, 'username')}
                />
            </div>
            <div className="row">
                <label>密码</label>
            </div>
            <div className="row">
                <input type="password" value={props.formData.password}
                       onChange={props.onChange.bind(null, 'password')}
                />
            </div>
            <div className="row actions">
                <button type="submit">登录</button>
                <a href="#" onClick={props.onForgotPassword}>忘记密码</a>
            </div>
        </form>
    )
}