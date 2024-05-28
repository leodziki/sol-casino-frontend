import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import dealer_btn_img from '../../assets/game/play/Dealer_icon.png';

const DealerButton = styled.div`
  background-image: url(${dealer_btn_img});
  background-repeat: no-repeat;
  background-size: contain;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

DealerButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

DealerButton.defaultProps = {
  width: '40',
  height: '40',
};

export default DealerButton;
