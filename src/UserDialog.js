import React, {Component} from 'react'
import './UserDialog.css'
import SignInOrSignUp from "./SignInOrSignUp"


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
    signUp(){

    }
    signIn(){

    }
    changeFormData() {

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