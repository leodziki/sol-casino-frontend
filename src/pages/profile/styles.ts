import styled from "styled-components";

export const ProfileWrapper = styled.div`
    /* overflow-y: scroll; */
`
export const ProfileSetting = styled.div`
    background-color: #1a2028;
    border: 1px solid #2a353e;
    margin: auto;
    border-radius: 8px;
    margin-top: 10px;
    padding: 20px;
    max-width: 1000px;
`
export const RegionSetting = styled.div``
export const LinkAccount = styled.div``
export const Gaming = styled.div``
export const Title = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`
export const SetRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    label {
        color: #a9afc1;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        flex: 1;
        span {
            color: #7b808e;
            font-size: 12px;
            padding-top: 5px;
        }
    }
    span {
        color: #fff;
        flex-wrap: wrap;
        font-size: 16px;
        font-weight: 700;
        flex: 1;
        display: flex;
        align-items: center;
        b {
            color: #89899f;
            cursor: pointer;
            font-size: 14px;
            margin-left: 10px;
            font-weight: normal;
            button {
                margin-right: 5px;
            }
            & > .ant-switch-checked {
                background-color: #09f219;
            }
        }
    }
    .region-edit-btn, .link-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #09f219;
        border-radius: 6px;
        color: #22262f;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        min-width: 80px;
        height: 26px;
        outline: none;
        border: none;
        /* flex: 1; */
        svg {
            margin-right: 5px;
        }
    }
    .link-btn {
        background-color: #00b0f2;
    }
`
export const RegionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    label {
        color: #a9afc1;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        flex: 1;
        span {
            color: #7b808e;
            font-size: 12px;
            padding-top: 5px;
        }
    }
    span {
        color: #fff;
        flex-wrap: wrap;
        font-size: 16px;
        font-weight: 700;
        flex: 1;
    }
    .region-edit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #09f219;
        border-radius: 6px;
        color: #22262f;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        min-width: 80px;
        height: 26px;
        outline: none;
        border: none;
        /* flex: 1; */
        svg {
            margin-right: 5px;
        }
    }
`