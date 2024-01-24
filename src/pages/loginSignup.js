import React from "react";
import './loginSignup.css';
const Login_Signup = () => {
    return (
        <div className="login-signup-block">
            <div className="main-block">
                <h2>Sign Up</h2>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <p>Already have an account?<span className="login-link"> Login here</span></p>

                <span className="privacy-policy">
                    <input type="checkbox" />
                    <p>By continuing , i agree to the term of use & privacy policy.</p>
                </span>
            </div>
        </div>
    )
}

export default Login_Signup;