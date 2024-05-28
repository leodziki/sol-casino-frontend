import styled from 'styled-components';
import DialerImg from '../../assets/game/play/dialer.png';

export const DialerImage = styled.div`
background-image: url(${DialerImg});
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
width:150px;
height:200px;
border: none;
border-style: none;
z-index:10;
position: absolute;
top: 10px;
left: calc(50% - 100px);
`;