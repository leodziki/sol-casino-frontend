import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CloseIcon from '../../assets/settings/close_icon.png';

const StyledCloseIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  background-image:url(${CloseIcon});  
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 214px);
  left: calc(50% + 323px);
  z-index: 1;
  width:65px;
  height:60px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
    border-radius: 50%;
  }

  ${(props) =>
    props.attachInSettingDlg &&
    css`
      width:70px;
      height:70px;
      top: calc(50% - 270px);
      left: calc(50% + 370px);
    `}
`;

const DlgCloseButton = ({ clickHandler, attachInSettingDlg }) => {
  if (attachInSettingDlg) {
    return (
      <StyledCloseIcon
        attachInSettingDlg
        onClick={clickHandler}
        onKeyDown={(e) => {
          if (e.keyCode === 13) clickHandler();
        }}
        tabIndex={0}
      >      
      </StyledCloseIcon>
    );  
  }

  return (
    <StyledCloseIcon
      onClick={clickHandler}
      onKeyDown={(e) => {
        if (e.keyCode === 13) clickHandler();
      }}
      tabIndex={0}
    >      
    </StyledCloseIcon>
  );
};

DlgCloseButton.propTypes = {
  attachInSettingDlg: PropTypes.bool,
  clickHandler: PropTypes.func,  
};

DlgCloseButton.defaultProps = {
  attachInSettingDlg: false,
}

export default DlgCloseButton;
