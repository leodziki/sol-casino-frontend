import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: ${(props) => props.display};
  position: relative;
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};  
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: ${(props) =>
      props.content_centered_mobile==='1' ? 'center' : 'space-between'};
    padding-left: 1rem;
    padding-right: 1rem;
  }

  ${(props) =>
    props.img_url &&
    css`
      min-width: 1024px;
      max-width: none;
      background-image: url(${(props) => props.img_url});
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `}

  ${(props) =>
    props.mainpage_img_url &&
    css`
      min-width: 1024px;
      max-width: none;
      background-image: url(${(props) => props.img_url});
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `}
    
  ${(props) =>
    props.fluid==='1' &&
    css`
      max-width: 100vh;
      width: 100%;
      padding: 0 3rem;
    `}
  
  ${(props) =>
    props.full_Height==='1' &&
    css`
      min-height: 100vh;
    `}

  ${(props) =>
      props.full_height_with_footbar==='1' &&
      css`        
        min-height: 92vh;
        margin: 0;
        padding: 0;
      `}

  ${(props) =>
      props.itemspace && 
      css`
        position: absolute;
        bottom:3px;
        margin: 0;
        padding: 0;
        & > *:not(:first-child) {
          margin-left: 1rem;
        }
      `}  

  ${(props) =>
    props.custom_size === 'fullWidth' &&
    css`
      max-width: 100vh;
    `}
`;

Container.propTypes = {
  content_centered_mobile: PropTypes.string,
  fluid: PropTypes.string,
  full_height: PropTypes.string,
  custom_size: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  justify_content: PropTypes.string,
  align_items: PropTypes.string,
  flex_direction: PropTypes.string,
  display: PropTypes.string,
  img_url: PropTypes.string,
  mainpage_img_url: PropTypes.string,
};

Container.defaultProps = {
  content_centered_mobile: '',
  fluid: '',
  full_height: '',
  margin: '0 auto',
  justify_content: 'space-between',
  align_items: 'center',
  flex_direction: 'row',
  padding: '0 2rem',
  display: 'flex',
  img_url: '',
  mainpage_img_url: '',
};

export default Container;
