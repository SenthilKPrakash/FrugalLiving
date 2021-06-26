import React from 'react';
import './Header.css';
import StartingPage from './StartingPage';
import MailSentPage from './LoginLogout/MailSentPage';

const Header = (props) => {

    const {
        handleLogOut,
        isEmailVerifiedGoogle,
        sendVerification
    } = props;

    const isVerified = () => {
        console.log("Inside IsVerified = " + isEmailVerifiedGoogle);
    }

    return (
        <div>
            {isVerified(), isEmailVerifiedGoogle ? (
                < StartingPage
                    handleLogOut={handleLogOut}
                />
            ) : (
                <MailSentPage
                    handleLogOut={handleLogOut}
                    sendVerification={sendVerification}
                />
            )}
        </div>
    )
}

export default Header;