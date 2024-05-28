import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import chipsBox from '../../assets/game/play/chips_box.png';
import emptyChipsBox from '../../assets/game/play/empty_chips_box.png';

const ChipsBoxImg = styled.div`
  position: absolute;  
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  border-style: none;
  width:100px;
  height:75px;
  z-index:10;
  top: 180px;
  left: calc(50% + 80px);  
  
  ${(props) =>
    props.ischipempty==='1' && 
    css`
      background-image: url(${chipsBox});
    `};

  ${(props) =>
    props.ischipempty!=='1' && 
    css`
      background-image: url(${emptyChipsBox});
    `};
`;

const ChipsBoxContainer = ({ ischipempty }) => {
  return (
    <ChipsBoxImg ischipempty={ischipempty} />    
  );
} 

ChipsBoxContainer.propTypes = {  
  ischipempty: PropTypes.string,
};

export default ChipsBoxContainer;