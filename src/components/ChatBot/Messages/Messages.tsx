import React, { useEffect } from 'react';
import MessageElement from './Message/Message';
import classes from './Messages.module.scss';
import TypingIndicator from '../../ui/TypingIndicator/TypingIndicator';

interface Props {
  messageHistory: any;
  typing: boolean;
  dummy: React.RefObject<HTMLDivElement>;
}

const Messages = ({ messageHistory, typing, dummy }: Props) => {

  const createMessageArray = (msg, index) => <MessageElement message={msg} key={index} /> ;

  const messageElements = messageHistory.map(createMessageArray);

  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <section className={classes.Messages}>
      {messageElements}
      {typing && <TypingIndicator />}
      <div ref={dummy} />
    </section>
  );
};

export default Messages;
