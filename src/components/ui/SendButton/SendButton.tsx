import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import classes from './SendButton.module.scss';

interface Props {
  handleSubmit: () => void;
}

const Submit = ({ handleSubmit }: Props) => (
  <div className={classes.SendIcon} onClick={handleSubmit}>
    <SendIcon />
  </div>
);

export default Submit;
