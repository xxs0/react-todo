import React from 'react'

export default class ForgotPasswordForm extends React.Component {
    render() {
        return (
            <div className="forgotPassword">
                <h3>密码重置</h3>
                <form className="forgotPassword" onSubmit={this.props.onSubmit}>
                    <div className="row">
                        <label>
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </label>
                        <input type="text" placeholder= "请输入您的邮件获取重置密码"
                               value={this.props.formData.email}
                               onChange={this.props.onChange.bind(null, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button type="submit">发送重置邮件</button>
                        <a href="#" onClick={this.props.onSignIn}>返回登录</a>
                    </div>
                </form>
            </div>
        )
    }
}