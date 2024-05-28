import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import radioBgImg from '../../assets/settings/radio_btn_bg.png';
import radioBtnImg from '../../assets/settings/radio_btn.png';

const RadioContainer = styled.div`
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1rem;  
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 80px;  
  height: 80px;
  background-image: url(${radioBgImg});
  background-position

  &::before {
    content: '';
    display: inline-block;
    
    
    background-size: cover;
    
    margin-right: 0.5rem;
  }

  ${(props) =>
    props.male &&
    css`
      top: calc(50% - 80px);
      left: calc(50% + 80px);
    `}
  
  ${(props) =>
    props.male === false &&
    css`
      top: calc(50% - 80px);
      left: calc(50% + 195px);
    `}
`;

const RadioButton = styled.button`
  width: 72px;
  height: 72px;  
  background-size: cover;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 0.5rem;
  position: absolute;
  top: calc(8px);
  left: calc(2px);
  cursor: pointer;
  z-index: 10;
`;

const ImageRadioButton = ({ value, male, onClick }) => {
  const [selected, setSelected] = useState(value);
  
  useEffect(() => {
    setSelected(value);    
  }, [value]);

  const handleButtonClick = () => {
    if (selected === false) {
      setSelected(true);
      value = true;
      onClick();      
    }
  };

  const buttonStyle = {     
    backgroundImage: selected === true ? `url(${radioBtnImg})` : ``
  };

  return (
    <RadioContainer male={male} >
      <RadioButton style={buttonStyle} onClick={() => handleButtonClick()}></RadioButton>
    </RadioContainer>
  );
}

ImageRadioButton.propTypes = {
  value: PropTypes.bool,
  male: PropTypes.bool
};

ImageRadioButton.defaultProps = {
  male: false,
}

export default ImageRadioButton;