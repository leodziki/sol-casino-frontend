import styled, { css } from 'styled-components';

const Spacer = styled.div`
  display: flex;    
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }

  ${(props) =>
    props.text_attr_kinds === 'small' &&
    css`
      & > *:not(:first-child) {
        margin-left: 0.5rem;
      }
    `}
`;

export default Spacer;
