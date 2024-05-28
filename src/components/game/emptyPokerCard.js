import styled from 'styled-components';
import emptyPokerCardImg from '../../assets/game/play/empty_card.png';

const EmptyPokerCard = styled.div`
    width: 120px;
    max-width: 120px;
    min-width: 70px;
    height:70px;      
    background-image:url(${emptyPokerCardImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-color: transparent;
`;

export default EmptyPokerCard;