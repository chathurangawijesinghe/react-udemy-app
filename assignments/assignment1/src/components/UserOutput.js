import React from 'react';

const UserOutput = (props) => {
    const style = {
        backgroundColor: 'yellow'
    };

    return (
        <div>
            <p style={style}>Username: {props.username}</p>
            <p>{props.textone}</p>
            <p>{props.texttwo}</p>
        </div>
    );
};

export default UserOutput;