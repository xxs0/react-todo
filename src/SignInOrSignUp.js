import React, {Component} from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

export default class SignInOrSignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: '注册'
        }
    }
    switch(e) {
        this.setState({
            selected:e.target.innerText
        })
    }

    render() {
        return (
            <div className="signInOrSignUp">
                <ul>
                    <li className="signUpButton" onClick={this.switch.bind(this)}><a href="#">注册</a></li>
                    <li className="signInButton" onClick={this.switch.bind(this)}><a href="#">登录</a></li>
                </ul>
                <div className="panes">
                    {
                        this.state.selected === '注册' ?
                            <SignUpForm formData={this.props.formData}
                                        onSubmit={this.props.onSignUp}
                                        onChange={this.props.onChange}/>
                            : null
                    }
                    {
                        this.state.selected === '登录' ?
                            <SignInForm formData={this.props.formData}
                                        onSubmit={this.props.onSignIn}
                                        onChange={this.props.onChange}/>
                            : null
                    }

                </div>
            </div>
        )
    }
}