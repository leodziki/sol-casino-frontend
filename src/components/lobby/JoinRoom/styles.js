import styled from "styled-components";
import greenTableImg from '../../../assets/img/green_light_maintable.png';

export const JoinWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(46,50,62);
    width: 245px;
`
export const JoinTitleBar = styled.div`
    width: 100%;
    align-items: center;
    background-color: rgb(80, 87, 103);    
    margin-bottom: 15px;
`
export const JoinTableImg = styled.div`
    align-items: center;
    background-image: url(${greenTableImg});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 137px;    
    justify-content: center;    
    width: 230px;    
`
export const GameTypeCaption = styled.div`
    text-align: center;
    color: #bbbbbb;
`
export const TableNameCaption = styled.div`
    font-size: large;
    text-align: center;
    color: #eeeeee;
`