import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CloseIcon from '../../assets/settings/close_icon.png';

const CloseButton = styled.button`
  display: inline-block;
  cursor: pointer;
  outline: none;  
  border: none;

  &:focus {
    outline: none;
    border-radius: 50%;
  }

  ${(props) =>
    props.attachInDlg &&
    css`
      background-image:url(${CloseIcon});  
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      position: absolute;
      top: calc(50% - 270px);
      left: calc(50% + 367px);
      z-index: 1;
      width:70px;
      height:70px;
    `}
`;

CloseButton.propTypes = {
  clickHandler: PropTypes.func,
  attachInDlg: PropTypes.bool,
};

export default CloseButton;
