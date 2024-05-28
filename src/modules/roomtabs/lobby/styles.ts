import styled from "styled-components";
import KnowTheRuleImg from "../../../assets/img/know_the_rules.png";
import LobbyBgImg from "../../../assets/img/lobby_bg.png";

export const LobbyWrapper = styled.div`
  background-image: url(${LobbyBgImg});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 640px;
    height: 298px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 860px;
    height: 401px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 1048px;
    height: 489px;
  }

  @media screen and (min-width: 1440px) and (max-width: 1680px) {
    width: 1280px;
    height: 597px;
  }

  @media screen and (min-width: 1680px) {
    width: 1500px;
    height: 700px;
  }
`;
export const LobbyLeftWrapper = styled.div`
  width: 67%;
  height: 100%;
`;
export const LobbyRightWrapper = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const LobbyTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & img:first-child {
    height: auto;
    margin-right: 20px;
    width: auto;
  }

  & img:last-child {
    height: 100%;
    width: auto;
  }
`;

export const RoomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 10px 15px 30px;
`;
export const RoomHeaderSection = styled.div`
  .room-header-setting {
    display: flex;
    P {
      display: flex;
      align-items: center;
      color: rgb(186, 187, 183);
      margin-right: 15px;
      font-size: 14px;
      cursor: pointer;
      svg {
        color: rgb(186, 187, 183);
      }
      span {
        margin-left: 5px;
      }
      &:hover {
        color: #fff;
        svg {
          color: #fff;
        }
      }
    }
  }
  .room-header-leaderboard {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    & > button > .ant-switch-inner > .ant-switch-inner-checked,
    & > button > .ant-switch-inner > .ant-switch-inner-unchecked {
      display: flex;
      height: 100%;
      align-items: center;
    }
  }
`;
export const LeaderBoardBtn = styled.div`
  background-color: rgb(166, 31, 103);
  outline: none;
  border: none;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-right: 15px;
  color: #fff;
  height: 33px;
  font-size: 12px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(166, 31, 103, 0.8);
  }
`;
export const TabsContainer = styled.div`
  & > .ant-tabs > .ant-tabs-nav::before {
    border-bottom: none;
  }
  & > .ant-tabs > .ant-tabs-nav {
    /* margin-bottom: 0px; */
  }
  &
    > .ant-tabs
    > .ant-tabs-nav
    > .ant-tabs-nav-wrap
    > .ant-tabs-nav-list
    > .ant-tabs-tab {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    width: 150px;
    background-color: rgb(18.22.35);
    & > .ant-tabs-tab-btn {
      color: #babbbf;
    }
  }
  &
    > .ant-tabs
    > .ant-tabs-nav
    > .ant-tabs-nav-wrap
    > .ant-tabs-nav-list
    > .ant-tabs-tab-active {
    background-color: #a61f67;
    & > .ant-tabs-tab-btn {
      color: #fff;
    }
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
`;

export const SubInfoWrapper = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RuleWrapper = styled.div`
  background-image: url(${KnowTheRuleImg});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 245px;
  height: 137px;
`;
