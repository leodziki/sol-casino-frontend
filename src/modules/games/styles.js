import styled, { css } from "styled-components";

import setting_normal_img from "../../assets/game/play/setting_normal.png";
import leave_room_normal_img from "../../assets/game/play/leave_room_normal.png";

import call_normal_img from "../../assets/game/play/call_normal.png";
import call_pressed_img from "../../assets/game/play/call_pressed.png";
import call_disabled_img from "../../assets/game/play/call_disabled.png";

import check_normal_img from "../../assets/game/play/check_normal.png";
import check_pressed_img from "../../assets/game/play/check_pressed.png";
import check_disabled_img from "../../assets/game/play/check_disabled.png";

import pot_normal_img from "../../assets/game/play/pot_normal.png";
import pot_pressed_img from "../../assets/game/play/pot_pressed.png";
import pot_disabled_img from "../../assets/game/play/pot_disabled.png";

import max_normal_img from "../../assets/game/play/max_normal.png";
import max_pressed_img from "../../assets/game/play/max_pressed.png";
import max_disabled_img from "../../assets/game/play/max_disabled.png";

import min_normal_img from "../../assets/game/play/min_normal.png";
import min_pressed_img from "../../assets/game/play/min_pressed.png";
import min_disabled_img from "../../assets/game/play/min_disabled.png";

import half_normal_img from "../../assets/game/play/half_normal.png";
import half_pressed_img from "../../assets/game/play/half_pressed.png";
import half_disabled_img from "../../assets/game/play/half_disabled.png";

import room_back_img from "../../assets/game/poker_table.png";

export const RoomContainer = styled.div`
  background-image: url(${room_back_img});
  background-repeat: no-repeat;
  background-size: contain;
  height: 55.12vw;
  padding: 3.26vw;  
  width: 98vw;
`;

export const SettingBtn = styled.button`
  background-image: url(${setting_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  height: 1.63vw;
  position: absolute;  
  right: 0;
  top: 0;
  width: 1.63vw;
  z-index: 30;
`;

export const LeaveRoomBtn = styled.button`
  background-image: url(${leave_room_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  height: 1.63vw;
  width: 1.73vw;
`;

export const CheckBtn = styled.button`
  background-image: url(${check_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  z-index: 30;

  &:active {
    background-image: url(${check_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${check_disabled_img});
      pointer-events: none;
    `}

  @media screen and (max-width: 1024px) {
    width: 60px;
    height: 30px;
    right: 125px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 70px;
    height: 40px;
    right: 145px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 75px;
    height: 45px;
    right: 160px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 90px;
    height: 55px;
    right: 200px;
  }

  @media screen and (min-width: 1680px) {
    width: 100px;
    height: 65px;
    right: 220px;
  }
`;

export const CallBtn = styled.button`
  background-image: url(${call_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 0;
  z-index: 30;

  &:active {
    background-image: url(${call_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${call_disabled_img});
      pointer-events: none;
    `}

  @media screen and (max-width: 1024px) {
    width: 60px;
    height: 30px;
    right: 65px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 70px;
    height: 40px;
    right: 75px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 75px;
    height: 45px;
    right: 80px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 90px;
    height: 55px;
    right: 100px;
  }

  @media screen and (min-width: 1680px) {
    width: 100px;
    height: 65px;
    right: 110px;
  }
`;

export const PotRaiseBtn = styled.button`
  background-image: url(${pot_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;  
  z-index: 30;

  &:active {
    background-image: url(${pot_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${pot_disabled_img});
      pointer-events: none;
    `}

    @media screen and (max-width: 1024px) {
      width: 50px;
      height: 50px;
      bottom: 40px;
      right: 55px;
    }
  
    @media screen and (min-width: 1024px) and (max-width: 1280px) {
      width: 55px;
      height: 55px;
      bottom: 45px;
      right: 60px;
    }
  
    @media screen and (min-width: 1280px) and (max-width: 1440px) {
      width: 60px;
      height: 60px;
      bottom: 50px;
      right: 65px;
    }
  
    @media screen and (min-width: 1440px) and (max-width: 1680px) {
      width: 65px;
      height: 65px;
      bottom: 60px;
      right: 70px;
    }
  
    @media screen and (min-width: 1680px) {
      width: 70px;
      height: 70px;
      bottom: 70px;
      right: 75px;
    }
`;

export const MaxBetBtn = styled.button`
  background-image: url(${max_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 0;
  z-index: 30;

  &:active {
    background-image: url(${max_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${max_disabled_img});
      pointer-events: none;
    `}

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    bottom: 40px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 55px;
    height: 55px;
    bottom: 45px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 60px;
    height: 60px;
    bottom: 50px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 65px;
    height: 65px;
    bottom: 60px;
  }

  @media screen and (min-width: 1680px) {
    width: 70px;
    height: 70px;
    bottom: 70px;
  }
`;

export const HalfBetBtn = styled.button`
  background-image: url(${half_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 30;

  &:active {
    background-image: url(${half_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${half_disabled_img});
      pointer-events: none;
    `}

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 110px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 55px;
    height: 55px;
    bottom: 45px;
    right: 120px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 60px;
    height: 60px;
    bottom: 50px;
    right: 130px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 65px;
    height: 65px;
    bottom: 60px;
    right: 140px;
  }

  @media screen and (min-width: 1680px) {
    width: 70px;
    height: 70px;
    bottom: 70px;
    right: 150px;
  }
`;

export const MinBetBtn = styled.button`
  background-image: url(${min_normal_img});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 30;

  &:active {
    background-image: url(${min_pressed_img});
  }

  ${(props) =>
    props.type === "disabled" &&
    css`
      background-image: url(${min_disabled_img});
      pointer-events: none;
    `}

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 165px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 55px;
    height: 55px;
    bottom: 45px;
    right: 180px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 60px;
    height: 60px;
    bottom: 50px;
    right: 195px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 65px;
    height: 65px;
    bottom: 60px;
    right: 210px;
  }

  @media screen and (min-width: 1680px) {
    width: 70px;
    height: 70px;
    bottom: 70px;
    right: 225px;
  }
`;