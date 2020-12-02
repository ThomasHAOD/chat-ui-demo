import React from 'react';
import MaterialInput from '@material-ui/core/TextField';
import classes from './Input.module.scss';

interface Props {
  value: string;
  handleInputChange: (newMsg: string) => void;
  handleKeyPress: (event: React.KeyboardEvent) => void;
  scrollToBottom: () => void;
}

const Input = ({ value, handleInputChange, handleKeyPress, scrollToBottom }: Props) => (
  <div className={classes.InputContainer}>
    <MaterialInput variant="outlined" label="Your Message" fullWidth multiline value={value} onChange={(event) => { handleInputChange(event.target.value); }} onKeyPress={handleKeyPress} onClick={() => scrollToBottom()} />
  </div>
);

export default Input;
