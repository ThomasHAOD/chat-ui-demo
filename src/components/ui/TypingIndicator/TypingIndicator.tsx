import React from "react";
import "./TypingIndicator.scss";

import chatbot from '../../../assets/images/YS_Generic_User-01.png';

const typingIndicator = () => {
  return (
    <div className="ImageIndicator" >
      <img src={chatbot} alt="chatbot" />
      <div className="TypingIndicator" >
        <span className="one" > </span>
        <span className="two" > </span>
        <span className="three" > </span>
      </div>
    </div>
  );
};

export default typingIndicator;
