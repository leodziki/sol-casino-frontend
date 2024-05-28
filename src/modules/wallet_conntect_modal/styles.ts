import { styled } from "styled-components";

export const WalletModalWrapper = styled.div<{ $isshow: boolean }>`
  max-width: 500px;
  position: fixed;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#121724, #121724), linear-gradient(-45deg, #001f24 .21%, #1b99ad 15.91%, #5cb644 50%, #21a06c 87.31%, #001f24);
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 12;
  padding: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ $isshow }) => ($isshow ? 1 : 0)};
  visibility: ${({ $isshow }) => ($isshow ? "visible" : "hidden")};
  .wallet-modal-logo {
      width: 260px;
      margin-top: 10px;
  }
`;
export const WalletModalOverlay = styled.div<{ $isshow: boolean }>`
  position: fixed;
  z-index: 11;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(15,17,20,.7);
  opacity: ${({ $isshow }) => ($isshow ? 1 : 0)};
  visibility: ${({ $isshow }) => ($isshow ? "visible" : "hidden")};
`;
export const WalletList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 15px;
`
export const ListItem = styled.div`
  color: #b7c6c9;
  width: 215px;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: #191f2d;
  color: #B7C6C9;
  border-radius: 4px;
  cursor: pointer;
  padding-left: 20px;
  img {
      width: 20px;
      margin-right: 15px;
  }
`
export const GoLoginText = styled.div`
  display: flex;
  color: #797e8b;
  margin-top: 15px;
  p {
      display: flex;
      color: #6ab257;
      margin-left: 5px;
      cursor: pointer;
      img {
          transform: rotate(180deg);
          width: 14px;
          margin-left: 5px;
      }
      &:hover {
          text-decoration: underline;
      }
  }
`
export const AgreeCheck = styled.div`
  color: #797e8b;
  font-size: 14px;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  input {
      margin-right: 15px;
  }
  a {
      text-decoration: underline;
      margin: 0 3px;
      cursor: pointer;
  }
`
export const CloseBtn = styled.div`
  span {
      cursor: pointer;
  }
  color: rgb(160, 160, 160);
  font-size: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`