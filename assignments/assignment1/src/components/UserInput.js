import React from 'react';

import './UserInput.css'

const UserInput = (props) => {
    return (
        <div>
            <input type="text" 
                onChange={props.change} 
                value={props.username}
                className="user-input" />
        </div>
    );
};

export default UserInput;