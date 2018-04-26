import React from 'react';
import { fetchLogIn} from './actions/fetch';
import { logInUser } from './actions/actions';


class LogInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
        }
    }

    render() {
        let { dispatch, closeForm } = this.props;

        let typeEmail = (event) => this.setState({email: event.target.value})
        let typePassword = (event) => this.setState({password: event.target.value})
        let logIn = () => {
            fetchLogIn(this.state)
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
                <button
                    onClick={() => {
                        logIn();
                        closeForm();
                    }}
                >
                    Submit
                </button>
            </div>
        )
    }
}

export default LogInForm;