import styled, { css } from 'styled-components';

export const PositionedUISlot = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  background-color: ${({ back_color }) => back_color}
  transform-origin: ${({ origin }) => origin || 'top left'};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  @media screen and (max-width: 1068px) {
    transform: ${({ scale }) => `scale(${+scale + 0.3})` || '1'};
  }

  @media screen and (max-width: 968px) {
    transform: ${({ scale }) => `scale(${+scale + 0.25})` || '1'};
  }

  @media screen and (max-width: 868px) {
    transform: ${({ scale }) => `scale(${+scale + 0.2})` || '1'};
  }

  @media screen and (max-width: 812px) {
    transform: ${({ scale }) => `scale(${+scale + 0.15})` || '1'};
  }

  @media screen and (max-width: 668px) {
    transform: ${({ scale }) => `scale(${+scale + 0.1})` || '1'};
  }

  @media screen and (max-width: 648px) {
    transform: ${({ scale }) => `scale(${scale + 0.05})` || '1'};
  }

  @media screen and (max-width: 568px) {
    transform: ${({ scale }) => `scale(${scale})` || '1'};
  }

  ${(props) =>
    props.flex_row==='1' &&
    css`
      align-items: center;
      justify-content: center;
      text-align: center;
      display: flex;
      flex-direction: row;
    `}
  
  #mainSeatBack {
    
  }
`;
