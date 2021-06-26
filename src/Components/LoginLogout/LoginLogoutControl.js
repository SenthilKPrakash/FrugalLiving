import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import Header from "../Header";
import fire from '../../firebase';
import { Refresh } from '@material-ui/icons';

// Login Page starts Here
const LoginLogoutControl = () => {

    //Variables
    var isEmailVerifiedGoogle;

    // Sign-up Log-in Switch transition
    const [isSignUp, changeSignUp] = useState(false);

    // Firebase Auth & Error Handling - Email, Password etc.
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');

    //Auth Social Media Signup & Login
    // const googleSignUp = new firebase.auth.GoogleAuthProvider();

    // Sign-up Log-in Switch transition
    const SignUpBtn = () => {
        changeSignUp(!isSignUp);
    };

    const SignInBtn = () => {
        changeSignUp(!isSignUp);
    };

    //Clear Errors
    const clearErrors = () => {
        setEmailErr("");
        setPasswordErr("");
        setRepeatPasswordErr("");
    }

    //Handle Auth => Signup, Login & Logout
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            // .then(console.log("successfully Logged IN"))
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailErr(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordErr(err.message);
                        break;
                    default:
                        setEmailErr(err.message);
                        break;
                }
            })
    };

    const handleSignUp = () => {
        clearErrors();
        if (password !== repeatPassword) {
            console.log("Password not Match");
            setRepeatPasswordErr("The Password does not match");
        } else {
            console.log("Password Matched");
            fire
                .auth()
                .createUserWithEmailAndPassword(email, password).then(function () {
                    console.log("successfully Signed UP & Next to send mail verification");
                    sendVerification();
                })
                .catch(err => {
                    switch (err.code) {
                        case "auth/email-already-in-use":
                        case "auth/invalid-email":
                            setEmailErr(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordErr(err.message);
                            break;
                        default:
                            setEmailErr(err.message);
                            break;
                    }
                })
        }
    };

    const handleLogOut = () => {
        console.log("Signing Out");
        fire.auth().signOut();
        Refresh();
    };

    const sendVerification = () => {
        const user = fire.auth().currentUser;

        user.sendEmailVerification()
            .then(function () {
                console.log("Email Sent");
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    //Auth listener
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Inside OnAuthState with successful User");
                setUser(user);
                clearErrors();
                isEmailVerifiedGoogle = false;

                if (user !== null) {
                    console.log("Inside OnAuthState-userNotNull with successful User");
                    if (user.emailVerified === true) {
                        isEmailVerifiedGoogle = true;
                        console.log("Inside OnAuthState-userNotNull with successful User & mail verified = " + isEmailVerifiedGoogle);
                    } else {
                        isEmailVerifiedGoogle = false;
                        console.log("Inside OnAuthState-userNotNull with successful User & mail not verified = " + isEmailVerifiedGoogle);
                    }
                }

            } else {
                console.log("Inside OnAuthState without User");
                // setUser("");
            }
        })
    };

    useEffect(() => {
        authListener();
    });

    return (
        <div>
            {user && (isEmailVerifiedGoogle === true) ? (
                <Header
                    handleLogOut={handleLogOut}
                    isEmailVerifiedGoogle={isEmailVerifiedGoogle}
                    sendVerification={sendVerification}
                />
            ) : (
                <LoginPage
                    isSignUp={isSignUp}
                    SignInBtn={SignInBtn}
                    SignUpBtn={SignUpBtn}
                    email={email}
                    setEmail={setEmail}
                    emailErr={emailErr}
                    password={password}
                    setPassword={setPassword}
                    passwordErr={passwordErr}
                    repeatPasswordErr={repeatPasswordErr}
                    repeatPassword={repeatPassword}
                    setRepeatPassword={setRepeatPassword}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                />
            )}
        </div>
    )
};

export default LoginLogoutControl;