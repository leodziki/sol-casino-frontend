import React from "react";
import styled from "styled-components";
import ColoredText from "../Typography/ColoredText";
import totalPotCaptionImg from "../../assets/game/play/total_pot_caption.png";

const ChipPotCaptionWrapper = styled.div`
  background-image: url(${totalPotCaptionImg});
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 0.1vw;
  height: 2vw;
  width: 10vw;
`;

const ChipPotContainer = styled.div`
  display: flex;
  flex-direction: rows;
  position: relative;  
  pointer-events: none;
  width: 13vw;
  height: 2.1vw;
`;

const ChipPot = ({ chipPotCount }) => {
  return (
    <ChipPotContainer>
      <ChipPotCaptionWrapper />
      <ColoredText
        text_attr_kinds="other_color"
        fonttype="semiMidTiny"
      >
        {parseFloat(chipPotCount).toFixed(2)}
      </ColoredText>
    </ChipPotContainer>
  );
};

export default ChipPot;
