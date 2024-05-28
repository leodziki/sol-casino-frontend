import React from 'react';
import Heading from 'components/Typography/Heading';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeadingWithLogo = styled.div`
  svg {
    margin-right: 0.5rem;
    width: ${(props) => props.theme.fonts.fontSizeH3};
  }

  ${Heading} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.primaryCta};

    ${(props) =>
      props.textcolor &&
      css`
        color: ${(props) => props.textcolor};
      `}
  }
`;

const HeadingWithLogo = ({
  children,
  textcolor,
  textcentered,
  textcentered_on_mobile,
  hideIconOnMobile,
}) => {
  return (
    <StyledHeadingWithLogo>
      <Heading
        as="h2"
        headingclass="h4"
        textcolor={textcolor}
        textcentered={textcentered}
        textcentered_on_mobile={textcentered_on_mobile}
      >
        {children}
      </Heading>
    </StyledHeadingWithLogo>
  );
};

HeadingWithLogo.propTypes = {
  text: PropTypes.string,
  textcolor: PropTypes.string,
  textcentered: PropTypes.string,
  textcentered_on_mobile: PropTypes.string,
  hideIconOnMobile: PropTypes.bool,
};

HeadingWithLogo.defaultProps = {
  textcolor: '',
  textcentered: '',
  textcentered_on_mobile: '',
  hideIconOnMobile: true,
};

export default HeadingWithLogo;
