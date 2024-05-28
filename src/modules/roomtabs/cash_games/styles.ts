import styled from "styled-components";

export const CashGamesWrapper = styled.div`
    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > thead > tr > th{
        background-color: #505767 !important;
        color: #DCDDD8;
        border-bottom: none;
    }
    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > tbody > tr > td{
        border-bottom: none;
        color: #DCDDD8;
    }
    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > tbody > tr:nth-child(even) {
        background-color: #181c29;
    }

    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > tbody > tr:nth-child(odd) {
        background-color: #1e2532;
    }
    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > tbody > tr > .ant-table-cell-row-hover {
        background: #2e323e !important;
    }
    & > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > tbody > tr > .ant-table-column-sort {
        background: transparent;
    }

`
export const SearchOptions = styled.div`
    display: flex;
`