import styled from "styled-components";
import balanceBgImg from "../../../assets/game/balance/balance_bg.png";
import blueChipImg from "../../../assets/game/balance/blue_chip.png";
import hiddenCardImg from "../../../assets/game/cards/hiddenhidden.png";
import betStatusBg from "../../../assets/game/play/bet_status_bg.png";

export const BackCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: ${(props) => props.top_value}px;
  left: ${(props) => props.left_value}px;
  z-index: 4;
  width: 6vw;
  height: 4vw;

  * ~ * {
    margin-left: 0.2vw;
  }
`;

export const BackCard = styled.div`
  background-image: url(${hiddenCardImg});
  background-position: contain;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 2.8vw;
  height: 4vw;
`;

export const BalanceWrapper = styled.div`
  position: absolute;
  background-image: url(${balanceBgImg});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: ${(props) => props.top_value}px;
  left: ${(props) => props.left_value}px;

  @media screen and (max-width: 1024px) {
    width: 72px;
    height: 25px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 82px;
    height: 29px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 92px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 102px;
    height: 36px;
  }

  @media screen and (min-width: 1680px) {
    width: 112px;
    height: 40px;
  }
`;

export const ChipsAppendImg = styled.div`
  background-image: url(${blueChipImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: contain;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    width: 22px;
    height: 22px;
    margin-right: 4px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 27px;
    height: 27px;
    margin-right: 5px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 33px;
    height: 33px;
    margin-right: 6px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 38px;
    height: 38px;
    margin-right: 7px;
  }

  @media screen and (min-width: 1680px) {
    width: 42px;
    height: 42px;
    margin-right: 8px;
  }
`;

export const LastActionWrapper = styled.div`
  position: absolute;
  background-image: url(${betStatusBg});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;  
  text-align: center;
  height: ${(props) => (props.height_value / 6) * 4}px;
  left: ${(props) => props.left_value}px;
  top: ${(props) => props.top_value + (props.height_value / 6) * 2}px;
  width: ${(props) => props.width_value}px;
`;
