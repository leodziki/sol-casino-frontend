import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-family: fantasy;
  font-size: ${(props) =>
    props.headingclass
      ? props.theme.fonts[`fontSize${props.headingclass.toUpperCase()}`]
      : props.theme.fonts.fontSizeH1};

  text-align: ${(props) => (props.textcentered==='1' ? 'center' : 'left')};
  color: ${(props) => props.textcolor};
  
  @media screen and (max-width: 1024px) {
    text-align: ${(props) =>
      props.textcentered_on_mobile==='1' || props.textcentered==='1' ? 'center' : 'left'};
  }

  ${(props) =>
    props.nomargin==='1' &&
    css`
      margin: 0px 0px;
    `}
`;

Heading.propTypes = {
  headingclass: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8']),
  textcentered: PropTypes.string,
  textcentered_on_mobile: PropTypes.string,
  textcolor: PropTypes.string,
  nomargin: PropTypes.string,
};

Heading.defaultProps = {
  textcentered: '',
  textcentered_on_mobile: '',
  nomargin: '',
};

export default Heading;
