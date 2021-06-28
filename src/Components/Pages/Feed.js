import React from 'react';

const Feed = (props) => {

    const {
        handleLogOut
    } = props;

    return (
        <div>
            <h1>Welcome User</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Feed;