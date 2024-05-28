import React from 'react';
import styled from 'styled-components';
import winBgImg from '../../assets/game/play/win_bg.png';
import Heading from '../Typography/Heading';
import Button from '../buttons/Button';
import PropTypes from 'prop-types';

const WinBg = styled.div`  
  background-image: url(${winBgImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  position: absolute;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index:300;
  opacity: 0.9;
  display: none;
`;

const WinElement = styled.div`
    top: calc(35%);
    right: calc(45%);
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const WinHeading = styled(Heading)`
    margin: 0px 0px;
`;

const LobbyButton = styled(Button)`
    bottom: calc(25%);
    left: calc(45%);
    position: absolute;
    cursor: pointer;
    z-index:301;
    display: none;
`;

const WinOverlay = ({ history, WinChipCount }) => {
  return (
    <>
        <WinBg id="win-background-div">        
            <WinElement>
                <WinHeading as="h1" headingclass="h1" textcentered='1' textcolor='#FFFFFFFF' >
                    YOU WIN
                </WinHeading>        
                <WinHeading as="h1" headingclass="h1" textcentered='1' textcolor='#FFFFFFFF' >
                    {WinChipCount}
                </WinHeading>            
            </WinElement>        
        </WinBg>        
        <LobbyButton id="win-lobby-button" onClick={() => history.push(`/select_table`)} type='lobby' />            
    </>
  );
};

WinOverlay.propTypes = {  
    WinChipCount: PropTypes.number,
};

export default WinOverlay;
