import React from 'react';
import { connect } from 'react-redux';
import { logInUser } from './actions/actions';
import UserIcon from './UserIcon';
import { fetchLogIn, fetchRegister } from './actions/fetch';
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';






class LogInBtn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            openedLogInForm: false,
            mainBtnName: 'LOG IN',
            openedRegisterForm: false,
        }
    }

    render() {
        let {classN, user, dispatch } = this.props;
        let { openedLogInForm, openedRegisterForm, mainBtnName } = this.state;
                
        let toggleMenu = () => this.setState({openedLogInForm: !openedLogInForm, openedRegisterForm: false});
        let openRegisterForm = () => {
            this.setState({
                openedLogInForm: false, 
                openedRegisterForm: true,
                mainBtnName: 'REGISTER'
            })
        }
        let openLogInForm = () => {
            this.setState({
                openedLogInForm: true,
                openedRegisterForm: false,
                mainBtnName: 'LOG IN',
            })
        }
        let closeMenu = () => {
            this.setState({openedLogInForm: false, openedRegisterForm: false, mainBtnName: 'LOG IN'})
        }

        return (
            <div>
                {user.loggedIn ?
                    <UserIcon user={user}/>
                :
                    <button 
                    className={classN}
                    onClick={toggleMenu}>
                        {mainBtnName}
                    </button>
                }
                {openedLogInForm && 
                    <div>
                        <LogInForm dispatch={dispatch} closeForm={closeMenu}/>
                        <button 
                            className='xtra-register' 
                            onClick={openRegisterForm}
                        >Register
                        </button>
                    </div>
                }
                {openedRegisterForm &&
                    <div>
                        <RegisterForm dispatch={dispatch} closeForm={closeMenu}/>
                        <button
                            className='xtra-login'
                            onClick={openLogInForm}
                        >Log in
                        </button>
                    </div>
                }
            </div>
            
        )
    }
}

export default connect(
    (state,props) => ({
        classN: props.classN,
        user: state.user,
    })
)(LogInBtn);