import styled from "styled-components";
import { Tabs as AntdTabs } from "antd";

export const TabContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const StyledTabs = styled(AntdTabs)`
  width: 100%;
  .ant-tabs {
    overflow: initial;
  }
  .ant-tabs > .ant-tabs-content {
    width: 100%;
  }
  .ant-tabs > .ant-tabs-nav {
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
  }
  .ant-tabs > .ant-tabs-nav > .ant-tabs-tab {
    flex-shrink: 0;
  }
  .ant-tabs-nav::before {        
    border-bottom: 0px solid #ffffff;
  }
  .ant-tabs-nav {
    margin: 0 0 0 0;
    width: max-content !important;
  }
  .ant-tabs-card {
    margin: 0 0 0 0;
    border-color: transparent;
    border: 0;
  }
  .ant-tabs-nav-wrap {
    margin: 0 0 0 0;
    border-color: transparent;
    border: 0;
  }
  .ant-tabs-nav-list {
    margin: 0 0 0 0;
    border-color: transparent;
    border: 0;
  }
  .ant-tabs-tab {
    margin: 0 0 0 0;
    border-color: transparent;
    border: 0;
  }
  .ant-tabs-tab:first-child {
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100.38px;
    height: 38.91px;
    color: #ffffff;
    padding-left: 10px;
  }
  .ant-tabs-tab:not(:first-child) {
    background-color: rgb(80, 87, 103);
    clip-path: polygon(4% 0, 96% 0, 100% 100%, 0% 100%);
    width: 330.38px;
    height: 38.91px;
    color: #fff;
    padding-left: 20px;
    padding-right: 10px;
    margin-left: 0px;
  }
  .ant-tabs-tab-btn {
    width:100%;
  }
  .ant-tabs-tab-active {
    background-color: rgb(80, 87, 103);
    color: #ffffff;
  }
  .ant-tabs-tab:not(.ant-tabs-tab-active) {
    background-color: rgb(25, 31, 45);
  }
  .ant-tabs-ink-bar {
    display: none;
  }
`;