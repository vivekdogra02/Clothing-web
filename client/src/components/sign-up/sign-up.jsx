import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { useState } from 'react';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState( {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value });
    }
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange} label='Display Name' required></FormInput>
                    <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email'></FormInput>
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password'></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} label='Confirm Password'></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);