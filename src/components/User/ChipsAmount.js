import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ColoredText from "../Typography/ColoredText";
import { SolMark } from "../game/SolMark";

import bettingChipBgImg from "../../assets/game/play/betting_chip_bg.png";

const Wrapper = styled.div`
  background-image: url(${bettingChipBgImg});
  background-repeat: no-repeat;
  background-position: contain;
  background-size: 100% 100%;
  background-color: transparent;
  z-index: 30;

  align-items: end;
  justify-content: center;
  text-align: center;
  
  position: absolute;
  display: flex;
  flex-direction: rows;
  width: 10vw;
  height: 3vw;
  right: calc(4%);
  top: calc(56%);
`;

const ChipsAmount = ({ chipsAmount }) => {
  return (
    <Wrapper>
      <ColoredText
        text_attr_kinds="other_color"
        fonttype="semiSmallTiny"
      >
        {parseFloat(chipsAmount).toFixed(2)}
      </ColoredText>
      <SolMark />
    </Wrapper>
  );
};

ChipsAmount.propTypes = {
  chipsAmount: PropTypes.number,
};

export default ChipsAmount;
