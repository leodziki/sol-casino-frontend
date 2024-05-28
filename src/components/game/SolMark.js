import styled from 'styled-components';
import solVectorImg from "../../assets/game/balance/Vector.png";

export const SolMark = styled.div`
  background-image: url(${solVectorImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: contain;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    width: 6px;
    height: 16px;
    margin-left: 2px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 7px;
    height: 18px;
    margin-left: 3px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 8px;
    height: 20px;
    margin-left: 4px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 9px;
    height: 22px;
    margin-left: 5px;
  }

  @media screen and (min-width: 1680px) {
    width: 10px;
    height: 24px;
    margin-left: 6px;
  }
`;