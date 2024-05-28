import styled from "styled-components";

export const RoomWrapper = styled.div`

`
export const RoomHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(46,50,62);
    padding: 15px 10px 15px 30px;
`
export const RoomHeaderSection = styled.div`
    .room-header-setting {
        display: flex;
        P {
            display: flex;
            align-items: center;
            color: rgb(186,187,183);
            margin-right: 15px;
            font-size: 14px;
            cursor: pointer;
            svg {
                color: rgb(186,187,183);
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

`
export const LeaderBoardBtn = styled.div`
    background-color: rgb(166,31,103);
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
        background-color: rgba(166,31,103,.8);
    }
`
export const TabsContainer = styled.div`
    margin-top: 15px;
    & > .ant-tabs > .ant-tabs-nav::before {
        border-bottom: 1px solid #4c5367;
    }
    & > .ant-tabs > .ant-tabs-nav {
        /* margin-bottom: 0px; */
    }
    & > .ant-tabs > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list > .ant-tabs-tab {
        background-color: rgb(18.22.35);
        border: 1px solid #4c5367;
        & > .ant-tabs-tab-btn {
            color: #BABBBF;
        }
    }
    & > .ant-tabs > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list > .ant-tabs-tab-active {
        background-color: #a61F67;
        & > .ant-tabs-tab-btn {
            color: #fff;
        }
    }
`
export const RoomTitle = styled.div`
    background-color: rgb(80,87,103);
    clip-path: polygon(0 0, 63% 0, 78% 100%, 0% 100%);
    width: 156.38px;
    height: 38.91px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    padding-left: 10px;
    margin-bottom: 1.5px;
    svg {
        margin-right: 8px;
    }
`