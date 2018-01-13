import HelloMessage from './HelloMessage';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <HelloMessage
        name='John'
    />,
    document.getElementById('app')
);