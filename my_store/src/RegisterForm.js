import React from 'react';
import { fetchRegister } from './actions/fetch';
import { logInUser } from './actions/actions';

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            username: null,
        }
    }

    render() {
        let { dispatch, closeForm } = this.props;

        let typeEmail = (event) => this.setState({email: event.target.value})
        let typePassword = (event) => this.setState({password: event.target.value})
        let typeUserName = (event) => this.setState({username: event.target.value})
        let register = () => {
            fetchRegister(this.state)
                .then( (res) => logInUser({dispatch, res}))
        }


        return (
            <div className='login-form'>
                <input 
                    id='login-email' 
                    placeholder='email'
                    onChange={typeEmail}
                ></input>
                <input 
                    id='login-password' 
                    placeholder='password'
                    onChange={typePassword}
                ></input>
                <input 
                    id='login-username' 
                    placeholder='username'
                    onChange={typeUserName}
                ></input>
                <button
                    onClick={() => {
                        register();
                        closeForm();
                    }}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default RegisterForm;