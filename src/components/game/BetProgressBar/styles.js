import styled from "styled-components";

import betProgressBgImg from "../../../assets/game/play/bet_progress_bg.png";
import betProgressElementImg from "../../../assets/game/play/bet_progress_element.png";
import betControlElementImg from "../../../assets/game/play/bet_control_element.png";

export const ProgressBarWrapper = styled.div`
  background-image: url(${betProgressBgImg});
  background-position: center;
  background-size: 100% 30%;
  background-repeat: no-repeat;
  width: 13vw;
  height: 3vw;
  position: absolute;
  bottom: calc(24%);
  right: calc(3%);
  z-index: 31;
  display: relative;
  cursor: pointer;
`;

export const ProgressedBar = styled.div`
  background-image: url(${betProgressElementImg});
  background-position: center;
  background-size: 100% 25%;
  background-repeat: no-repeat;
  width: ${(props) => props.progress_value * 13 / 100}vw;  
  height: 3vw;
  position: absolute;
  left: 0;
`;

export const ProgressOperator = styled.div`
  background-image: url(${betControlElementImg});  
  background-size: 100% 100%;
  background-repeat: no-repeat;
  left: ${(props) => props.progress_value * 13 / 100}vw;  
  height: 3.5vw;
  width: 2.5vw;  
  position: absolute;
  cursor: pointer;
`;
