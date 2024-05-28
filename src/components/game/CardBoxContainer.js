import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import CardBox from '../../assets/game/play/card_box.png';
import emptyCardBox from '../../assets/game/play/empty_card_box.png';

const CardBoxImg = styled.div`
  position: absolute;  
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  border-style: none;
  width:50px;
  height:40px;
  z-index:10;
  top: 190px;
  left: calc(50% - 170px);
  
  ${(props) =>
    props.cardstate==='1' && 
    css`
      background-image: url(${CardBox});
    `};

  ${(props) =>
    props.cardstate!=='1' && 
    css`
      background-image: url(${emptyCardBox});
    `};
`;

const CardBoxContainer = ({ is_card_empty }) => {
  return (
    <CardBoxImg cardstate={is_card_empty} />    
  );
} 

CardBoxContainer.propTypes = {  
  is_card_empty: PropTypes.string,
};

export default CardBoxContainer;