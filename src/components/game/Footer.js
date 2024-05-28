import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Spacer from '../Layout/Spacer';
import ChipsAmount from '../User/ChipsAmount';
import Button from '../buttons/Button';
import { Input } from '../Forms/Input';
import gameContext from '../../context/game/gameContext';
import globalContext from '../../context/global/globalContext';

import bottomPanelImg from '../../assets/img/bottom_panel_long.png';

import {  
  CHECK  
} from "../../pokergame/actions";

const StyledFooter = styled.footer`
  position: absolute;
  bottom:0;
  z-index: 10;
  width: 100%;
  height: 80px;
  background-image: url(${bottomPanelImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

const NavLeftElementContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
  display: flex;
  align-items: center;  
`;

const NavRightElementContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  align-items: center;  
`;

const BettingCountInput = styled(Input)`
    position: relative;
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #aaaaaa;
    z-index: 11;    
    width: 30%;
    height: 45px;

    &:focus {
      outline: none;
      border: 2px solid #FFFFFF;
    }

    ${(props) =>
      props.chip_btn_display === 'visible' &&
      css`
        display: block;        
      `}
    
    ${(props) =>
      props.chip_btn_display === 'invisible' &&
      css`
        display: none;        
      `}
`;

const Footer = ({ roomId }) => {
  const {
    bet,
    currentTable,
    isPlayerSeated,
    seatId,
    fold,
    check,
    call,
    raise,
    allin,    
    UpdateTableParameters,
  } = useContext(gameContext);
  const { chipsAmount } = useContext(globalContext);
  const [chipButtonDisplay, setChipButtonDisplay] = useState('invisible');  

  useEffect(() => {
    if (!!currentTable && isPlayerSeated && !!currentTable.seats && !!currentTable.seats[seatId] && currentTable.seats[seatId].turn) {      
      setChipButtonDisplay('visible');
    } else {
      setChipButtonDisplay('invisible');
    }
  }, [currentTable, seatId, isPlayerSeated]);

  const handleRaise = () => {
    if (currentTable && currentTable.seats && currentTable.seats[seatId]) {      
      raise(parseFloat(bet) + parseFloat(currentTable.seats[seatId].bet));
    }
  }

  const renderGameButtons = () => {
    const ButtonLists = [];
  
    if (currentTable && isPlayerSeated && currentTable.seats && currentTable.seats[seatId] && currentTable.seats[seatId].turn) {
      ButtonLists.push(<Button key="fold_btn" onClick={fold} type="fold" />);
      let bCheckAvailableFlag = true;
      let bCallAvailableFlag = false;

      for (let i = 1; i <= currentTable.maxPlayers; i++) {
        if (i != seatId && currentTable.seats[i]) {
          if (currentTable.seats[i].lastAction !== CHECK && currentTable.seats[i].lastAction !== "") {
            bCheckAvailableFlag = false;
          }

          if (currentTable.seats[seatId].bet < currentTable.seats[i].bet) {
            bCheckAvailableFlag = false;
            bCallAvailableFlag = true;
          } 
        }
      }

      if (bCheckAvailableFlag) ButtonLists.push(<Button key="check_btn" onClick={check} type="check" />);
      else ButtonLists.push(<Button type="check_disable" key="check_disabled_btn"/>);

      if (bCallAvailableFlag) ButtonLists.push(<Button key="call_btn" onClick={call} type="call" />);
      else ButtonLists.push(<Button type="call_disable" key="call_disabled_btn"/>);

      ButtonLists.push(<Button key="raise_btn" onClick={handleRaise} type="raise"/>);
    } else {
      ButtonLists.push(<Button type="fold_disable" key="fold_disabled_btn"/>);
      ButtonLists.push(<Button type="check_disable" key="check_disabled_btn"/>);
      ButtonLists.push(<Button type="call_disable" key="call_disabled_btn"/>);
      ButtonLists.push(<Button type="raise_disable" key="raise_disabled_btn"/>);     
    }
  
    return ButtonLists;
  };

  return (
    <StyledFooter>
      <NavLeftElementContainer>
        <Spacer text_attr_kinds='small'>                
          <BettingCountInput type="number" value={bet} layout_width="58%" chip_btn_display={chipButtonDisplay} onChange={(e) => {                        
            if (!!currentTable && !!currentTable.seats && !!currentTable.seats[seatId]) {          
              console.log("input value", e.target.value);
              const inputBet = e.target.value;
               if (inputBet === '') {
                console.log("input value", 0);
                UpdateTableParameters(currentTable._id, 
                  0, 
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined);            
               } else {
                if (!isNaN(parseFloat(inputBet)) && parseFloat(inputBet) >= 0) {
                  console.log("input value", inputBet);
                  UpdateTableParameters(currentTable._id, 
                    parseFloat(inputBet), 
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined);
                }
               }              
            }
          }} />
          <Button key="allin_btn" onClick={allin} type='allin' chip_btn_display={chipButtonDisplay}/>
        </Spacer>
      </NavLeftElementContainer> 
      <NavRightElementContainer> 
        <Spacer custom_type='small'>
          <ChipsAmount chipsAmount={chipsAmount} />
          {renderGameButtons()}  
        </Spacer>
      </NavRightElementContainer>         
    </StyledFooter>
  );
};

export default Footer;
