import React, { useContext } from "react";
import styled from "styled-components";

import gameContext from "context/game/gameContext";
import ArrowSendButton from "components/buttons/ArrowSendButton";
import ColoredText from "components/Typography/ColoredText";
import "components/game/styles.css";

const ChattingContainer = styled.div`
  border: none;
  border-style: none;
  border-radius: 0.4vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 12.25vw;
  left: 0;
  position: absolute;
  width: 20.82vw;
  z-index: 11;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  height: 10.61vw;
  width: 100%;
`;

const ChatInputWrapper = styled.div`
  height: 1.63vw;
  width: 100%;
`;

const ChattingChannel = () => {
  const { messages } = useContext(gameContext);

  const handleChatMsgSend = () => {};

  return (
    <ChattingContainer className="bg-custom-primary">
      <ChatMessages>
        {messages &&
          messages.map((message, index) => (
            <div key={index} className="text-center">
              <ColoredText
                text_attr_kinds="other_color"
                fonttype="tinytiny"
              >
                {message}
              </ColoredText>
            </div>
          ))}
      </ChatMessages>
      <ChatInputWrapper className="border-custom-secondary border-t flex flex-row justify-center h-full pt-1.5 w-full">
        <input className="chat-input border-1 border-grey-500 bg-transparent h-full pl-1 pt-0 m-0 rounded-lg text-xs text-white focus:outline-none" placeholder="Type your message here..." />
        <ArrowSendButton handleSend={handleChatMsgSend} />
      </ChatInputWrapper>
    </ChattingContainer>
  );
};

export default ChattingChannel;
