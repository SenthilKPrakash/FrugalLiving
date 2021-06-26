import React from 'react';

const MailSentPage = (props) => {

    const {
        handleLogOut,
        sendVerification
    } = props;

    return (
        <div>
            <h1>Please check your mail & verify!
                <br />Once verified click
                <a href='/' onClick={handleLogOut}> here </a>
                to login back
                <br />Not Recived your mail? Click
                <a href='/' onClick={sendVerification}> here </a>
                to send verification once again</h1>
        </div>
    )
}

export default MailSentPage;