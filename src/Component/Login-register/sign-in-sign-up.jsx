import React from 'react';
import "./signinsignup.scss"
import SignIn from './Sign-In/signin'
import SignUp from './Sign-up/Signup'
const SignInAndSignup = () =>{
        return(
                <div className="sign-in-and-sign-up">
                        <SignIn />
                        <SignUp /> 
                </div>
        )
}
export default SignInAndSignup