import React from 'react';
import "./Login.css";
import LoginPic from "../../Assets/Couple RV Trip.png";
import SignupPic from "../../Assets/Couple Outdoors 2.png";

const LoginPage = (props) => {

    const {
        isSignUp,
        SignInBtn,
        SignUpBtn,
        email,
        setEmail,
        emailErr,
        password,
        setPassword,
        repeatPassword,
        setRepeatPassword,
        passwordErr,
        repeatPasswordErr,
        handleLogin,
        handleSignUp,
    } = props;

    return (
        <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>

            {/* SignUp LogIn Form */}
            <div className="forms-container">
                <div className="signin-signup">

                    {/* LogIn */}
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Log In</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input
                                type="text"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email / Phone" />
                        </div>
                        <p className="errorMsg">{emailErr}</p>

                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </div>
                        <p className="errorMsg">{passwordErr}</p>

                        <input
                            type="submit"
                            onClick={handleLogin}
                            value="Log In"
                            className="btn solid" />

                        <p className="social-text">
                            Log in with social platforms
                        </p>

                        <div className="social-media">
                            <a href="www.facebook.com" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="www.google.com" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="www.twitter.com" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="www.apple.com" className="social-icon">
                                <i className="fab fa-apple" />
                            </a>
                        </div>

                    </form>

                    {/* SignUp */}
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <i className="fas fa-envelope" />
                            <input
                                type="text"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" />
                        </div>
                        <p className="errorMsg">{emailErr}</p>

                        <div className="input-field">
                            <i className="fas fa-phone-alt" />
                            <input
                                type="tel"
                                required
                                placeholder="Phone" />
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create Password" />
                        </div>
                        <p className="errorMsg">{passwordErr}</p>

                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input
                                type="password"
                                required
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                placeholder="Repeat Password" />
                        </div>
                        <p className="errorMsg">{repeatPasswordErr}</p>

                        <input
                            type="submit"
                            onClick={handleSignUp}
                            value="Sign Up"
                            className="btn solid" />

                        <p className="social-text">
                            Sign Up with social platforms
                        </p>

                        <div className="social-media">
                            <a href="www.facebook.com" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="www.google.com" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="www.twitter.com" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="www.apple.com" className="social-icon">
                                <i className="fab fa-apple" />
                            </a>
                        </div>

                    </form>
                </div>
            </div>

            {/* Left & Right Panel to display / hide forms, images */}
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Explore the World!</h3>
                        <p>Explore the world for free! One Life - One World. Expierence Life at Fullest!</p>
                        <button
                            onClick={SignUpBtn}
                            className="btn transparent" id="sign-up-btn">Sign Up</button>
                    </div>

                    <img src={SignupPic}
                        className="image" alt="Couple_RV_Pic.png"></img>
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>Welcome Back!</h3>
                        <p>More Exciting Journey & More Exploration yet to be discovered!</p>
                        <button
                            onClick={SignInBtn}
                            className="btn transparent" id="sign-in-btn">Log In</button>
                    </div>

                    <img src={LoginPic}
                        className="image" alt="Outdoor_Couple_Pic.png"></img>
                </div>

            </div>
        </div>
    )
};

export default LoginPage;