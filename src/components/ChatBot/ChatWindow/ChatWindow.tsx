import React from 'react';
import Header from '../Header/Header';
import MessageForm from '../../Forms/MessageForm/MessageForm';


import classes from './ChatWindow.module.scss';

interface Props {
  children?: JSX.Element;
  handleMessage: (message: {message: string, user: string}) => void;
  scrollToBottom: () => void | undefined;
}

const ChatWindow = ({ children, handleMessage, scrollToBottom }: Props) => (
  <main className={classes.ChatWindow}>
    <Header />
    {children}

    <MessageForm handleMessage={handleMessage} scrollToBottom={scrollToBottom} />
  </main>
);

export default ChatWindow;
