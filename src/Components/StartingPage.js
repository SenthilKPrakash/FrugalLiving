import React from 'react';

const StartingPage = (props) => {

    const {
        handleLogOut
    } = props;

    return (
        <div>
            <h1>Starting Page</h1>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default StartingPage;