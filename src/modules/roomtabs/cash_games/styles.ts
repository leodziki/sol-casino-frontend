import styled from "styled-components";
import { Table } from "antd";

export const CashGamesWrapper = styled.div`
  .ant-tabs-nav {
    border-bottom: none;
  }  
  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > thead
    > tr
    > th {
    background-color: #505767 !important;
    color: #dcddd8;
    border-bottom: none;
  }
  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr
    > td {
    border-bottom: none;
    color: #dcddd8;
  }
  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr:nth-child(even) {
    background-color: #181c29;
    border-bottom: none;
  }

  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr:nth-child(odd) {
    background-color: #1e2532;
    border-bottom: none;
  }
  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr
    > .ant-table-cell-row-hover {
    background: #2e323e !important;
    border-bottom: none;
  }
  &
    > .ant-table-wrapper
    > .ant-spin-nested-loading
    > .ant-spin-container
    > .ant-table
    > .ant-table-container
    > .ant-table-content
    > table
    > tbody
    > tr
    > .ant-table-column-sort {
    background: transparent;
    border-bottom: none;
  }
`;
export const SearchOptions = styled.div`
  display: flex;
`;

export const StyledTable = styled(Table)`
  .ant-table {
    border-radius: 0 !important;
  }

  .ant-table-content {
    border-radius: 0 !important;
  }
`;

export const TransparentTable = styled(Table)`
    .transparent-row {
        background-color: transparent;
        border-bottom: 1px solid #000; 
        
        &:hover {
            background-color: #f5f5f5; 
        }
    }
`;