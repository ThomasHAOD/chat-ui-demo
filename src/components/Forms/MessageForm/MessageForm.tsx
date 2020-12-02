import React, { useState } from 'react';
import Input from '../../ui/Input/Input';
import SendButton from '../../ui/SendButton/SendButton';
import classes from './MessageForm.module.scss';


interface Props {
  handleMessage: (message: {message: string, user: string}) => void;
  scrollToBottom: () => void | undefined;
}

const MessageForm = ({ handleMessage, scrollToBottom }: Props) => {

  const [newMessage, setNewMessage] = useState<string>('');

  const handleInputChange = (newMsg: string) => {
    setNewMessage(newMsg);
  };

  const onSubmit = () => {
    handleMessage({message: newMessage, user: 'Me'});
    setNewMessage('');
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className={classes.MessageFormAndCards}>
      <form className={classes.MessageForm}>
        <Input value={newMessage} handleInputChange={handleInputChange} handleKeyPress={handleKeyPress} scrollToBottom={scrollToBottom} />
        <SendButton handleSubmit={onSubmit} />
      </form>
    </div>
  );
};

export default MessageForm;
