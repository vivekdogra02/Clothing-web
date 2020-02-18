import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

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
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('Password dont match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'> 
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name={displayName} value={displayName} handleChange={this.handleChange} label='Display Name'></FormInput>
                    <FormInput type='email' name={email} value={email} handleChange={this.handleChange} label='Email'></FormInput>
                    <FormInput type='password' name={password} value={password} handleChange={this.handleChange} label='Password'></FormInput>
                    <FormInput type='password' name={confirmPassword} value={confirmPassword} handleChange={this.handleChange} label='Confirm Password'></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;