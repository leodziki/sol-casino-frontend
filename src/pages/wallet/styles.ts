import styled from "styled-components";

export const WalletWrapper = styled.div`
    /* overflow-y: scroll; */
    width: 1000px;
    margin: auto;
    padding: 30px 30px 60px;
    background: #1f2730;
    border-radius: 4px;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: calc(100vh - 112px);
    overflow-y: scroll;
`
export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    h4 {
        color: #fff;
        flex: 1;
        font-size: 24px;
        font-weight: 700;
    }
    div {
        display: flex;
        align-items: center;
       
        a {
            text-decoration: underline;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            &:last-child {
                margin-left: 15px;
            }
            &:hover {
                text-decoration: none;
            }
        }
    }
`
export const SearchOptionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    .ant-input {
        width: 200px;
        color: #fff;
        font-size: 14px;
        background-color: #202a32;
        margin-right: 20px;
        &::placeholder {
            color: #364451;
            opacity: 1; /* Firefox */
        }
    }
    .ant-input-outlined {
        border: 1px solid #364451;
        border-radius: 4px;
    }
    & > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-inner {
        background-color: #202a32;
        border: 1px solid #394956;
    }
    & > .ant-checkbox-wrapper > span {
        color: #cdd3e2;
    }
`
export const CoinListWrapper = styled.div`
    color: #cdd3e2;
`
export const CoinListHeader = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    margin: 20px 0;
    :nth-child(1) {
        width: 25%;
        min-width: 150px;
    }
    :nth-child(2) {
        width: 25%;
        min-width: 150px;
    }
    :nth-child(3) {
        width: 25%;
        min-width: 150px;
    }
    :nth-child(4) {
        width: 25%;
        min-width: 150px;
    }
`
export const CoinListBody = styled.div`
    .coin-list-row {
        margin-bottom: 12px;
        font-size: 12px;
        display: flex;
        :nth-child(1) {
            width: 25%;
            display: flex;
            align-items: center;
            p {
                position: relative;
                margin-left: 10px;
                img {
                    position: absolute;
                    right: 10px;
                    top: -25px;
                }
            }
        }
        :nth-child(2) {
            width: 25%;
            display: flex;
            align-items: center;
        }
        :nth-child(3) {
            width: 25%;
            display: flex;
            align-items: center;
        }
        :nth-child(4) {
            width: 25%;
            display: flex;
            :nth-child(1), :nth-child(2) {
                border-radius: 4px;
                width: 100px;
                height: 30px;
                outline: none;
                cursor: pointer;
                border: none;
                display: flex;
                align-items: center;
                font-size: 14px;
                justify-content: center;
            }
            :nth-child(1) {
                background-color: #4a88ff;
                border: 1px solid #397bf8;
                color: #22262f;
            }
            :nth-child(2) {
                margin-left: 5px;
                background-color: #09f219;
                color: #013e00;
            }
        }
    }
`