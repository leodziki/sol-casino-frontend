import React from "react";
import styled, { css } from "styled-components";
import pokerTable from "../../assets/game/poker_table.png";
import blueTable from "../../assets/game/blue_table.svg";
import redTable from "../../assets/game/red_table.svg";

const StyledPokerTable = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;
  position: absolute;
  pointer-events: none;
  margin: 0 auto;
  top:0;

  @media screen and (max-width: 1024px) {
    width: 480px;
    height: 292px;
    left: calc(50% - 220px);
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 550px;
    height: 335px;
    left: calc(50% - 255px);
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 720px;
    height: 456px;
    left: calc(50% - 340px);
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 878px;
    height: 532px;
    left: calc(50% - 410px);
  }

  @media screen and (min-width: 1680px) {
    width: 1030px;
    height: 653px;
    left: calc(50% - 500px);
  }

  ${(props) =>
    props.level % 3 === 0 &&
    css`
      background-image: url(${pokerTable});
    `}

  ${(props) =>
    props.level % 3 === 1 &&
    css`
      background-image: url(${blueTable});
    `}

  ${(props) =>
    props.level % 3 === 2 &&
    css`
      background-image: url(${redTable});
    `}
`;

const PokerTable = ({ level }) => {
  // console.log("pokertable level" + level);
  return <StyledPokerTable alt="Poker Table" level={level - 1} />;
};

export default PokerTable;
