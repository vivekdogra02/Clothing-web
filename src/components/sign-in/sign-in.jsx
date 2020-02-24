import React, { useState } from 'react'
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        const { } = this.props;

        emailSignInStart(email, password);

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }
    return (
        <div className='sign-in'>
            <h2>I Already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' value={email} type='email' handleChange={handleChange}
                    label='Email'
                    required />
                <FormInput name='password' value={password} type='password'
                    handleChange={handleChange} label='password' required />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);