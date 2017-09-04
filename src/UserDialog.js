import React, {Component} from 'react'
import './UserDialog.css'
import SignInOrSignUp from "./SignInOrSignUp"
import {signUp, signIn, sendPasswordResetEmail} from "./leanCloud"
import ForgotPasswordForm from "./ForgotPasswordForm";

export default class UserDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'signInOrSignUp',
            formData: {
                username: '',
                password: '',
                email: ''
            }
        }
    }

    signUp(e) {
        console.log('q')
        e.preventDefault()
        let {email, username, password} = this.state.formData,
            success = (user) => {
                this.props.onSignUp.call(null, user)
            },
            error = (error) => {
                switch (error.code) {
                    case 202:
                        alert('用户名已经被占用')
                        break
                    case 203:
                        alert('电子邮箱地址已经被占用')
                        break
                    case 217:
                        alert('无效的用户名，不允许空白用户名')
                        break
                    case 218:
                        alert('无效的密码，不允许空白密码')
                        break
                    default:
                        alert(error.code)
                        break
                }
            }
        signUp(email, username, password, success, error)
    }

    signIn(e) {
        e.preventDefault()
        let {username, password} = this.state.formData,
            success = (user) => {
                this.props.onSignIn.call(null, user)
            },
            error = (error) => {
                switch (error.code) {
                    case 210:
                        alert('用户名和密码不匹配')
                        break
                    case 211:
                        alert('找不到用户')
                        break
                    case 217:
                        alert('无效的用户名，不允许空白用户名')
                        break
                    case 218:
                        alert('无效的密码，不允许空白密码')
                        break
                    case 219:
                        alert('登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码')
                        break
                    default:
                        alert(error.code)
                        break
                }
            }
        signIn(username, password, success, error)
    }

    changeFormData(key, e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }

    showForgotPassword() {
        console.log('重置?')
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'forgotPassword'
        this.setState(stateCopy)
    }

    resetPassword(e) {
        console.log('发送重置邮件')
        e.preventDefault()
        sendPasswordResetEmail(this.state.formData.email)
    }

    returnSignIn() {
        console.log('返回登录')
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.selectedTab = 'signInOrSignUp'
        stateCopy.selected = 'signIn'
        this.setState(stateCopy)
    }

    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <div className="LoginPaper">
                        <h3>Plan your activities and control your progress online</h3>
                    </div>
                    {this.state.selectedTab === 'signInOrSignUp' ?
                        <SignInOrSignUp formData={this.state.formData}
                                        onSignUp={this.signUp.bind(this)}
                                        onSignIn={this.signIn.bind(this)}
                                        onChange={this.changeFormData.bind(this)}
                                        onForgotPassword={this.showForgotPassword.bind(this)}/>
                        :
                        <ForgotPasswordForm formData={this.state.formData}
                                            onSubmit={this.resetPassword.bind(this)}
                                            onChange={this.changeFormData.bind(this)}
                                            onSignIn={this.returnSignIn.bind(this)}
                        />
                    }
                </div>
            </div>
        )
    }
}