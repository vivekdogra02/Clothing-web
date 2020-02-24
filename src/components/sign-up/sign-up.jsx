import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required></FormInput>
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email'></FormInput>
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password'></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password'></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);