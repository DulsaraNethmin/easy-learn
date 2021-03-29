import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './Messages.css';

const Messages = ({ messages,name}) => 
{
    return(
        <ScrollToBottom className="messages">
            {messages.map((message, i) => <div key={i}><Message text={message.text} user={message.user} name={name}/></div>)}
        </ScrollToBottom>
    )
};

export default Messages;