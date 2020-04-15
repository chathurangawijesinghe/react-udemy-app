import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inlin-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };
    return (
        <div>
            <p onClick={props.click} style={style}>{props.char}</p>
        </div>
    ); 
};

export default Char;