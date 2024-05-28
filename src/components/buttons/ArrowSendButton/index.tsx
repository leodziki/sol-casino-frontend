import React from "react";
import styled from "styled-components";

import sendButtonImg from "assets/game/chatting/send_button.png";

interface ArrowSendButtonProps {
  handleSend: () => void;
}

const SendIcon = styled.div`
  background-image: url(${sendButtonImg});
  background-size: 100% 100%;
  height: 0.61vw;
  width: 0.54vw;
`;

const ArrowSendButton: React.FC<ArrowSendButtonProps> = ({ handleSend }) => {
  return (
    <div>
      <SendIcon onClick={handleSend} />
    </div>
  );
};

export default ArrowSendButton;
