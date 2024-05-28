import React from 'react';
import { Input } from '../Forms/Input';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import chipAppendPlace from '../../assets/img/chips_append_place.png';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  & ${Input} {
    text-align: center;
    padding: 0.5rem 1rem 0.5rem 2rem;
    background: #f7f2dc;
    opacity: 0.75;
    border-radius: 40px;
  }
`;

const IconWrapper = styled.label`
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 5;
  left: 5px;
  top: 5px;
`;

const ChipsAppendImg = styled.div`
  width:30px;
  height:30px;      
  background-image:url(${chipAppendPlace});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;
`;

const ChipsAmountPill = ({ chipsAmount }) => {
  return (
    <Wrapper>
      <IconWrapper htmlFor="chipsAmount">
        <ChipsAppendImg />
      </IconWrapper>
      <Input
        disabled
        type="text"
        size={10}
        value={new Intl.NumberFormat(document.documentElement.lang).format(
          chipsAmount,
        )}
        name="chipsAmount"
      />
    </Wrapper>
  );
};

ChipsAmountPill.propTypes = {
  chipsAmount: PropTypes.number,
};

export default ChipsAmountPill;
