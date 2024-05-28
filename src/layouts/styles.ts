import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
  position: relative;
  max-height: 100vh;
`;

export const HeaderWrapper = styled.div`
  align-items: center;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(0deg, #191f2d, #191f2d), linear-gradient(269.92deg, rgba(149, 161, 180, .15), rgba(1, 3, 20, .5) 20.69%, rgba(149, 161, 180, .15) 49.94%, rgba(1, 3, 20, .5) 81.52%, rgba(149, 161, 180, .15));
  background-origin: border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 15px;
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
  }
`;

export const MintButton = styled.div<{ $bg?: boolean }>`
  color: #fff;
  width: ${({ $bg }) => !$bg && "100px" };
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  background: ${({ $bg }) => $bg && "linear-gradient(277.33deg, #18a672, #5ec03a 47.21%, #15a1b7 93.62%)" };
  img {
    margin-right: 10px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 50px 0;
  font-size: 20px;
  p {
    justify-content: center;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  a {
    white-space: nowrap;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      margin-left: 14px;
    }
    @media screen and (max-width: 525px) {
      &:last-child {
        margin-left: 0;
      }
    }
  }
`;

export const AppSidebarWrapper = styled.div`
  min-width: 203px;
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
export const AppContentWrapper = styled.div`
  width: 100%;
  padding: 0 25px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  margin-top: 20px;
`;