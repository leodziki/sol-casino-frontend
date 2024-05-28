import React, { useContext } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import styled from "styled-components";

import globalContext from "context/global/globalContext";
import ColoredText from "components/Typography/ColoredText";
import "pages/profile/styles.css";
import RadiusButton from "components/buttons/RadiusButton";

interface ProfileItemProps {
  customWidth: number;
  customHeight: number;
  marginFlag?: boolean;
}

const ProfileItemContainer = styled.div<ProfileItemProps>`
  display: flex;
  flex-direction: column;
  border-radius: 0.81vw;
  height: ${(props) => props.customHeight}vw;
  padding: 0.65vw 0.81vw;
  width: ${(props) => props.customWidth}vw;

  ${(props) =>
    props.marginFlag === true &&
    `
      margin-right: 1.63vw;
    `}
`;

export const Profile: React.FC = () => {
  const { userName } = useContext(globalContext);
  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col h-full w-full">
      <div className="bg-linearGradient-4" id="profile-main-container">
        <div id="profile-banner" />
        <div className="relative w-full">
          <div id="profile-name-pub-container">
            <div>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-25"
              >
                {userName}
              </ColoredText>
            </div>
            <div>
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                {publicKey?.toString()}wfefwefefsdfdsfsdfwef
              </ColoredText>
            </div>
          </div>
          <div className="space-x-2" id="profile-buttons-container">
            <RadiusButton
              width={5.55}
              label="Invite"
              setBorder={true}
              height={1.88}
            />
            <RadiusButton
              width={8.8}
              label="Send Message"
              setBorder={true}
              height={1.88}
            />
          </div>
          <div id="profile-main-bottom-container">
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={8.57}  
              marginFlag={true}            
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Place (last 24h)
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                1st
              </ColoredText>
            </ProfileItemContainer>
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={8.57}    
              marginFlag={true}                      
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Hands Played
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                23.152
              </ColoredText>
            </ProfileItemContainer>
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={8.57}      
              marginFlag={true}                    
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Hands won
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                9.253
              </ColoredText>
            </ProfileItemContainer>
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={8.57}   
              marginFlag={true}                       
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Win Percentage
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                39.9%
              </ColoredText>
            </ProfileItemContainer>
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={8.57}    
              marginFlag={true}                      
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Tokens won
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                624 SOL
              </ColoredText>
            </ProfileItemContainer>
            <ProfileItemContainer
              className="bg-custom-primary"
              customHeight={4.13}
              customWidth={23.27}              
            >
              <ColoredText
                text_attr_kinds="secondary"
                className="text-c-11"
              >
                Current rank
              </ColoredText>
              <ColoredText
                text_attr_kinds="other_color"
                className="text-c-22"
              >
                Platinum VIII
              </ColoredText>
            </ProfileItemContainer>
          </div>
        </div>
      </div>
      <div id="profile-match-history-title-letter">
        <ColoredText
          text_attr_kinds="other_color"
          className="text-c-25"
        >
          Match history
        </ColoredText>
      </div>
      <div id="profile-match-history-container">
        <ColoredText
          text_attr_kinds="secondary"
          className="text-c-17"
        >
          Nothing to see yet
        </ColoredText>
      </div>
    </div>
  );
};
