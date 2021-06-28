import React from 'react';
import "./Login.css";

const MailSentPage = (props) => {

    const {
        email,
        handleLogOut
    } = props;


    if (email) {
        return (
            <div className="mail-sent-page">
                <p className="mail-sent-msg">Verification mail Sent your mailbox
                    @<a href="https://mail.google.com/">{email}</a>,
                    please verify & click below Login again back button!</p>

                <button
                    className="mail-sent-btn"
                    onClick={handleLogOut}>Login Back</button>

                <p>Did not receive any mail? Please check your spam folders.</p>
            </div>
        )
    } else {
        handleLogOut();
    }
}

export default MailSentPage;