import React, { useState, useEffect } from 'react';
import fire from '../../firebase';

import LoginPage from './LoginPage';
import Entry from '../Pages/Entry';

// Firebase Database
const db = fire.database();

// Login Page starts Here
const LoginLogoutControl = () => {

    // Firebase Auth & Error Handling - Email, Password etc.
    const [user, setUser] = useState('');

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneErr, setPhoneErr] = useState('');

    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');

    const [isMailVerified, setMailVerified] = useState('');

    //Clear Errors
    const clearErrors = () => {
        setEmailErr("");
        setPasswordErr("");
        setRepeatPasswordErr("");
        setPhoneErr("");
    }

    //Handle Auth => Signup, Login & Logout
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
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
            setRepeatPasswordErr("The Password does not match");
        } else if ((phone === undefined) || (phone === null)) {
            setPhoneErr("Please enter a valid phone number");
        } else {
            fire
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    user.user.sendEmailVerification();

                    const usrRef = db.ref().child("usr01");
                    const newUsrRef = usrRef.push();
                    newUsrRef.set({
                        email: email,
                        password: password,
                        phone: phone
                    });

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
        fire.auth().signOut();
    };

    //Auth listener
    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user !== null) {
                setUser(user);
                if (user.emailVerified === true) {
                    setMailVerified(true);
                } else {
                    setMailVerified(false);
                }
            } else {
                setUser('');
                setMailVerified(false);
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
            {user ? (
                <Entry
                    email={email}
                    isMailVerified={isMailVerified}
                    handleLogOut={handleLogOut}
                />
            ) : (
                <LoginPage
                    email={email}
                    setEmail={setEmail}
                    emailErr={emailErr}

                    phone={phone}
                    setPhone={setPhone}
                    phoneErr={phoneErr}

                    password={password}
                    setPassword={setPassword}
                    passwordErr={passwordErr}

                    repeatPassword={repeatPassword}
                    setRepeatPassword={setRepeatPassword}
                    repeatPasswordErr={repeatPasswordErr}

                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                />
            )}
        </div>
    )
};

export default LoginLogoutControl;