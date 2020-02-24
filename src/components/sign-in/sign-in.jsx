import React from 'react'
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} type='email' handleChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput name='password' value={this.state.password} type='password'
                        handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);