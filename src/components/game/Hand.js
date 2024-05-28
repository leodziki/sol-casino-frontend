import styled from 'styled-components';

export const Hand = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: Calc(50% - 6.3vw);
  bottom: 7.3vw;
  z-index: 1;
  * ~ * {
    margin-left: 0.1vw;
  }
`;
