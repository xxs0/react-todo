import React, {Component} from 'react'
import './UserDialog.css'
import SignInOrSignUp from "./SignInOrSignUp"
import {signUp, signIn} from "./leanCloud"

export default class UserDiag extends Component {
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
    signUp(e){
        console.log('q')
        e.preventDefault()
        let {email, username, password} = this.state.formData,
            success = (user) => {
                console.log(user)
            },
            error = (user) => {
                console.log(error)
            }
        signUp(email, username, password, success, error)
    }
    signIn(e){
        e.preventDefault()
        let {username, password} = this.state.formData,
            success = (user) => {

            }
    }
    changeFormData(key, e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.formData[key] = e.target.value
        this.setState(stateCopy)
    }
    render() {
        return(
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <SignInOrSignUp formData={this.state.formData}
                                    onSignUp={this.signUp.bind(this)}
                                    onSignIn={this.signIn.bind(this)}
                                    onChange={this.changeFormData.bind(this)}
                    />
                </div>
            </div>
        )
    }
}