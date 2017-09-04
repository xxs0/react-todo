import React from 'react'

export default (props) => {
    return (
        <form className="signUp" onSubmit={props.onSubmit}>
            <div className="row">
                <label>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </label>
                <input type="text" placeholder="邮箱"
                       value={props.formData.email}
                       onChange={props.onChange.bind(null, 'email')}/>
            </div>
            <div className="row">
                <label>
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                </label>
                <input type="text" placeholder="用户名"
                       value={props.formData.username}
                       onChange={props.onChange.bind(null, 'username')}/>
            </div>
            <div className="row">
                <label>
                    <i className="fa fa-key" aria-hidden="true"></i>
                </label>
                <input type="password" placeholder="密码"
                       value={props.formData.password}
                       onChange={props.onChange.bind(null, 'password')}/>
            </div>
            <div className="row">
                <button>注册</button>
            </div>
        </form>
    )
}