import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import settingsButtonImg from '../../assets/img/settings_button.png';
import allinButtonImg from '../../assets/game/play/allin.png';
import foldButtonImg from '../../assets/game/play/fold.png';
import checkFoldButtonImg from '../../assets/game/play/check_fold.png';
import checkButtonImg from '../../assets/game/play/check.png';
import callButtonImg from '../../assets/game/play/call.png';
import raiseButtonImg from '../../assets/game/play/raise.png';
import allinDisableButtonImg from '../../assets/game/play/allin_disable.png';
import foldDisableButtonImg from '../../assets/game/play/fold_disable.png';
import checkDisableButtonImg from '../../assets/game/play/check_disable.png';
import callDisableButtonImg from '../../assets/game/play/call_disable.png';
import raiseDisableButtonImg from '../../assets/game/play/raise_disable.png';
import uploadAVAImg from '../../assets/settings/upload_btn.png';
import saveSettingImg from '../../assets/settings/save_btn.png';
import shopImg from '../../assets/img/shop_button.png';
import purchaseButtonImg from '../../assets/shop/purchase_button.png';
import tableAddBtnImg from '../../assets/img/table_add_btn.png';
import connectWalletImg from '../../assets/img/connect_wallet.png';
import fundButtonImg from '../../assets/img/fund_button.png';
import optinButtonImg from '../../assets/img/optin_button.png';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.75rem 1.5rem;
  outline: none;
  border: 0px solid rgba(0, 0, 0, 0);
  border-radius: ${(props) => props.theme.other.stdBorderRadius};
  background-color: ${(props) => props.theme.colors.goldenColor};
  color: ${(props) => props.theme.colors.fontColorDark};
  font-family: ${(props) => props.theme.fonts.fontFamilySansSerif};
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.3rem;  
  cursor: pointer;
  transition: all 0.3s;

  &:visited {
    background-color: transparent;
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.goldenColorDarker};
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  &:focus {
    outline: none;    
    color: ${(props) => props.theme.colors.fontColorDark};
  }

  &:disabled {
    background-color: grey;    
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.theme.colors.primaryCta};
      padding: ${(props) => {
        if (props.large) return 'calc(1rem - 2px) calc(2rem - 2px)';
        else if (props.small) return 'calc(0.5rem - 2px) calc(1rem - 2px)';
        else return 'calc(0.75rem - 2px) calc(1.5rem - 2px)';
      }};

      &,
      &:visited {
        background-color: ${(props) => props.theme.colors.primaryCta};
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:hover,
      &:active {
        background-color: ${(props) => props.theme.colors.primaryCtaDarker};
        border-color: ${(props) => props.theme.colors.primaryCtaDarker};
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:focus {
        color: ${(props) => props.theme.colors.fontColorLight};
      }

      &:disabled {
        background-color: grey;
        border-color: grey;
        color: ${(props) => props.theme.colors.fontColorDark};
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: ${(props) => props.theme.colors.primaryCta};

      &,
      &:visited {
        border: 2px solid ${(props) => props.theme.colors.primaryCta};
        background-color: transparent;
        color: ${(props) => props.theme.colors.primaryCta}};
      }

      &:hover,
      &:active {
        border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
        background-color: transparent;
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.colors.primaryCtaDarker};
        color: ${(props) => props.theme.colors.primaryCtaDarker};
      }

      &:disabled {
        border: 2px solid grey;
        background-color: grey;
        color: ${(props) => props.theme.colors.fontColorDark};
      }
    `}
  
  ${(props) =>
    props.large &&
    css`
      font-size: 1.6rem;
      line-height: 1.6rem;
      min-width: 250px;
      padding: 1rem 2rem;
    `}  
  
  ${(props) => 
    props.WalletConnect &&
    css`
      background-image:url(${connectWalletImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:70px;
      width:230px;
    `}

  ${(props) => 
    props.Funding &&
    css`
      background-image:url(${fundButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      width:130px;
    `}

  ${(props) => 
    props.Optin &&
    css`
      background-image:url(${optinButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      width:130px;
    `}

  ${(props) => 
    props.settings &&
    css`
      width:60px;
      height:60px;      
      background-image:url(${settingsButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;      
    `}

  ${(props) => 
    props.shop &&
    css`
      background-image:url(${shopImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      width:140px;
      height:60px;
      border-radius: 1rem;      
    `}
  
  ${(props) => 
    props.type === 'fold' &&
    css`
      background-image:url(${foldButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 130px;
    `}
  
  ${(props) => 
    props.type === 'fold_disable' &&
    css`
      background-image:url(${foldDisableButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      min-width: 130px;
      pointer-events: none;
    `}

  ${(props) => 
    props.type === 'check_fold' &&
    css`
      background-image:url(${checkFoldButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 175px;
    `}

  ${(props) => 
    props.type === 'check' &&
    css`
      background-image:url(${checkButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 130px;
    `}
  
  ${(props) => 
    props.type === 'check_disable' &&
    css`
      background-image:url(${checkDisableButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      min-width: 130px;
      pointer-events: none;
    `}

  ${(props) => 
    props.type === 'allin' &&
    css`
      background-image:url(${allinButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 130px;
      display: none;
    `}

  ${(props) =>
    (props.type === 'allin' && props.chip_btn_display === 'visible') &&
    css`
      display: block;        
    `}
  
  ${(props) =>
    (props.type === 'allin' && props.chip_btn_display === 'invisible') &&
    css`
      display: none;        
    `}
  
  ${(props) => 
    props.type === 'allin_disable' &&
    css`
      background-image:url(${allinDisableButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      min-width: 130px;
      pointer-events: none;
    `}

  ${(props) => 
    props.type === 'call' &&
    css`
      background-image:url(${callButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 130px;
    `}

  ${(props) => 
    props.type === 'call_disable' &&
    css`
      background-image:url(${callDisableButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      min-width: 130px;
      pointer-events: none;
    `}

  ${(props) => 
    props.type === 'raise' &&
    css`
      background-image:url(${raiseButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:55px;
      min-width: 130px;
    `}
  
  ${(props) => 
    props.type === 'raise_disable' &&
    css`
      background-image:url(${raiseDisableButtonImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-color: transparent;
      border-radius: 1rem;
      height:60px;
      min-width: 130px;
      pointer-events: none;
    `}

  ${(props) => 
    props.type === 'purchase' &&
      css`
        background-image:url(${purchaseButtonImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        background-color: transparent;
        border-radius: 1rem;
        height:60px;
        width:170px;
      `}

  ${(props) => 
    props.uploadAVA &&
    css`
      background-image:url(${uploadAVAImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;      
      background-color: transparent;
      width:300px;
      height:90px;
      border-radius: 1rem;      
    `}

  ${(props) => 
    props.save_setting &&
    css`
      background-image:url(${saveSettingImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: transparent;
      width:200px;
      height:90px;
      border-radius: 1rem;      
    `}
  
  ${(props) => 
    props.addTable &&
    css`
      background-image:url(${tableAddBtnImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: transparent;
      width:114px;
      height:121px;
      margin:0px 0px;
      padding:0px 0px;
      border-radius: 2rem;
    `}    
  
  ${(props) =>
    props.small &&
    css`
      font-size: 1.1rem;
      line-height: 1.1rem;
      min-width: 125px;
      padding: 0.5rem 1rem;
    `}
  
  ${(props) =>
    props.custom_size==='fullWidth' &&
    css`
      width: 100%;
    `}

    @media screen and (max-width: 1024px) {
    ${(props) =>
      props.large &&
      css`
        font-size: 1.4rem;
        line-height: 1.4rem;
        min-width: 250px;
        padding: 0.75rem 1.5rem;
      `}

    ${(props) =>
      (props.fullWidthOnMobile || props.custom_size==='fullWidth') &&
      css`
        width: 100%;
      `}
  }
`;

Button.propTypes = {
  shop: PropTypes.bool,
  save_setting: PropTypes.bool,
  uploadAVA: PropTypes.bool,
  purchase: PropTypes.bool,  
  settings: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  custom_size: PropTypes.string,
  fullWidthOnMobile: PropTypes.bool,
  addTable: PropTypes.bool,
  chip_btn_display: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
