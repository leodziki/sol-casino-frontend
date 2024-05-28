import styled from "styled-components";
import main_bg from "assets/img/main_bg.png";

export const AppLayoutWrapper = styled.div`
  align-items: center;
  background-image: url(${main_bg});
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  font-family: 'Instagram Sans', sans-serif;
  margin: 0;
  position: absolute;
  width: 100vw;
  min-height: 100%;
`;

export const HeaderWrapper = styled.div`
  align-items: center;
  background-color: #15171B;
  border-bottom: 1px solid #3E4552;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: sticky;  
  width: 100%;
  height: 3.75vw;
  left:0;
  top:0;
  z-index: 100;
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  div {
    display: flex;
  }
`;

export const MintButton = styled.div<{ $bg?: boolean }>`
  color: #fff;
  width: ${({ $bg }) => !$bg && "100px" };
  height: 3vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  background: ${({ $bg }) => $bg && "linear-gradient(277.33deg, #18a672, #5ec03a 47.21%, #15a1b7 93.62%)" };
  margin-right: 1vw;
  img {
    margin-right: 1vw;
  }
`;

export const FooterWrapper = styled.div`
  background: linear-gradient(to bottom, #15171B, #1F232C);
  border-top: 1px solid #3E4552;
  bottom:0;
  display: flex;
  flex-direction: column;
  left:0;
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 14.16vw;
`;

type AppSidebarWrapperProps = {
  collapse: string;
};

export const AppSidebarWrapper = styled.div<AppSidebarWrapperProps>`
  width: ${({collapse}) => collapse === '1' ? "92px" : "230px"};
  min-width: ${({collapse}) => collapse === '1' ? "92px" : "230px"};  
  align-items: flex-start;
  background: linear-gradient(180deg, #121724, #191f2d), linear-gradient(180deg, rgba(149, 161, 180, .15), rgba(1, 3, 20, .5) 20.69%, rgba(149, 161, 180, .15) 49.94%, rgba(1, 3, 20, .5) 81.52%, rgba(149, 161, 180, .15));
  background-clip: padding-box, border-box;
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  min-height: calc(100vh - 112px);
`;

export const Content = styled.div`
  display: flex;  
  margin-top: 3.33vw;
  min-height: 100%;  
  width: 79.16vw;
`;

export const CollapseBtn = styled.div<{ collapse : string }>`
  background-color: #232B3D;
  border-radius: 8px;
  height: ${({collapse}) => collapse === '2' ? "30px" : "38px"};
  width: ${({collapse}) => collapse === '2' ? "30px" : "70px"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #91B760;
  font-size: ${({collapse}) => collapse === '2' ? "12px" : "15px"};
  margin-left: 5px;
  cursor: pointer;
`
export const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`
export const SearchBtn = styled.div<{ collapse : string }>`
  width: 140px;
  align-items: center;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(0deg, #191f2d, #191f2d), linear-gradient(269.92deg, rgba(149, 161, 180, .15), rgba(1, 3, 20, .5) 20.69%, rgba(149, 161, 180, .15) 49.94%, rgba(1, 3, 20, .5) 81.52%, rgba(149, 161, 180, .15));
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: ${({collapse}) => collapse === '1' ? "none" : "flex" };
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 8px;
  height: 30px;
  color: #b7c6c9;
  font-size: 12px;
  span {
    margin-left: 5px;
  }
`
export const GameTitle = styled.div<{ collapse : string }>`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  margin: 15px 0 0px 5px;
  display: ${({collapse}) => collapse === '1' && "none"};
`
export const NavWrapper = styled.div`
  div {
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    & > svg {
      margin-right: 5px;
    }
    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`

export const SpecialWrapper = styled.div`
  div {
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    & > svg {
      margin-right: 5px;
    }
    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    color: #240d13;
    b {
      font-family: "Anton", sans-serif !important;
      display: inline-block;
    }
    p {
      position: relative;
      font-weight: bold !important;
      overflow: hidden;
      font-size: 20px;
      margin: auto;
      line-height: 30px;
      margin-top: 24px;
      border-right: 2px solid #000;
      white-space: nowrap;
      animation: typewriter 4s steps(44) 1s 1 normal both,
        blinkTextCursor 500ms infinite;
    }
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 587px;
      }
    }
    @keyframes blinkTextCursor {
      from {
        border-right-color: #000;
      }
      to {
        border-right-color: transparent;
      }
    }
    font-weight: 400;
    font-size: 70px;
    line-height: 100%;
    letter-spacing: 0.04em;
    span {
      font-size: 60px;
      b {
        font-family: filson-soft !important;
        font-weight: 100;
      }
      letter-spacing: 0;
      font-weight: 100;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      span {
        font-size: 45px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 35px;
      span {
        font-size: 28px;
      }
    }
  }
`