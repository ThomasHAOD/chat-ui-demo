import React, { useState, useRef } from 'react';
import ChatWindow from './ChatWindow/ChatWindow';
// import Messages from './Messages/Messages';
import classes from './ChatBot.module.scss';

const ChatBot = () => {

  const [messageHistory, setMessageHistory] = useState([]);
  const [typing, setTyping] = useState(false);

  const dummy = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => dummy.current?.scrollIntoView({ behavior: 'smooth' });

  const handleMessage = (message: Message) => {
    const newMessageHistory = [...messageHistory, message];
    setMessageHistory(newMessageHistory);
    setTyping(true);

    setTimeout(() => {
    const newerMessageHistory = [...newMessageHistory, {message: "This is my response to your message", user:"Tam"}];
    setMessageHistory(newerMessageHistory);
    setTyping(false);
    }, 3000);
  };

  return (
    <div className={classes.ChatBot} >
      <ChatWindow handleMessage={handleMessage} scrollToBottom={scrollToBottom}
      >
        {/* <Messages messageHistory={messageHistory} typing={typing} dummy={dummy} /> */}
      </ChatWindow>
    </div>
  );
};

export default ChatBot;
