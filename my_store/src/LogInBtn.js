import React from 'react';

// let LogInBtn = ({classN}) => {
//     return <button className={classN}>LOG IN</button>
// }


class LogInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
        }
    }

    render() {
        let { email, password } = this.state;

        let typeEmail = (event) => this.setState({email: event.target.value})
        let typePassword = (event) => this.setState({password: event.target.value})
        let logIn = () => console.log(email, password )


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
                    onClick={logIn}
                >
                    Submit
                </button>
            </div>
        )
    }
}

class LogInBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            logedIn: false,

            signUpForm: false,
        }
    }

    render() {
        let {classN } = this.props;
        let { openMenu } = this.state;

        let toggleMenu = () => this.setState({openMenu: !openMenu});


        return (
            <div>
                <button 
                className={classN}
                onClick={toggleMenu}>
                    LOG IN
                </button>
                {openMenu && <LogInForm/>}
                
            </div>
            
        )
    }
}

export default LogInBtn;