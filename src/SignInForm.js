import React from 'react'

export default (props) => {
    return (
        <form className="signIn" onSubmit={props.onSubmit}>
            <div className="row">
                <label>
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                </label>
                <input type="text" placeholder="用户名"
                       value={props.formData.username}
                       onChange={props.onChange.bind(null, 'username')}
                />
            </div>
            <div className="row">
                <label>
                    <i className="fa fa-key" aria-hidden="true"></i>
                </label>
                <input type="password" placeholder="密码"
                       value={props.formData.password}
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