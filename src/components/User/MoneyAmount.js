import React from 'react';
import { Input } from '../Forms/Input';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moneyPlace from '../../assets/img/money_place_top.png';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 157px;
  height: 48px;

  & ${Input} {    
    text-align: left;
    color: #FFFFFFFF;
    height: 100%;
    padding: 0.5rem 1rem 0.5rem 2rem;
    border: 0px solid ${(props) => props.theme.colors.primaryCta};
    background-color: transparent;
  }
`;

const IconWrapper = styled.label`  
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: calc(50% - 48px / 2);
  background-image:url(${moneyPlace});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;
`;

const MoneyAmount = ({ moneyAmount}) => {
  return (
    <Wrapper>
      <IconWrapper htmlFor="moneyAmountInput">        
      </IconWrapper>      
      <Input
        disabled
        type="text"
        size={15}
        value={`${new Intl.NumberFormat(document.documentElement.lang).format(moneyAmount)}$`}
        name="moneyAmountInput"
      />
    </Wrapper>
  );
};

MoneyAmount.propTypes = {
    moneyAmount: PropTypes.number,
};

export default MoneyAmount;
