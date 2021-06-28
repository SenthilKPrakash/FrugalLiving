import React from 'react';
import Feed from "./Feed";
import MailSentPage from "../LoginLogout/MailSentPage";

const Entry = (props) => {

    const {
        isMailVerified,
        handleLogOut,
        email
    } = props;

    return (
        <div>
            {!isMailVerified ? (
                <MailSentPage
                    email={email}
                    handleLogOut={handleLogOut}
                />
            ) : (
                <Feed
                    handleLogOut={handleLogOut}
                />
            )
            }
        </div>
    )
}

export default Entry;