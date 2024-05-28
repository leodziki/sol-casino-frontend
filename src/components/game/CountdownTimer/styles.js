import styled from "styled-components";
import countDownTimerBgImg from "../../../assets/game/play/count_down_timer_bg.png";

export const CountdownTimerWrapper = styled.div`
    background-image: url(${countDownTimerBgImg});
    background-repeat: no-repeat;
    background-size: contain;
    bottom: calc(7%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 30;

    @media screen and (max-width: 1024px) {
        width: 45px;
        height: 45px;
        left: calc(50% - 100px);
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        width: 55px;
        height: 55px;
        left: calc(50% - 150px);
    }

    @media screen and (min-width: 1280px) and (max-width: 1440px) {
        width: 65px;
        height: 65px;
        left: calc(50% - 200px);
    }

    @media screen and (min-width: 1440px) and (max-width: 1680px) {
        width: 75px;
        height: 75px;
        left: calc(50% - 250px);
    }

    @media screen and (min-width: 1680px) {
        width: 85px;
        height: 85px;
        left: calc(50% - 300px);        
    }
`;